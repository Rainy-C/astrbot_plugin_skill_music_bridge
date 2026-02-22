import json
import re
from typing import Any, Dict, Optional

from astrbot.api.event import filter, AstrMessageEvent
from astrbot.api.star import Context, Star, register
import astrbot.api.message_components as Comp


BRIDGE_SENTINEL_FIELD = "__astrbot_bridge__"


def _extract_text_from_chain(chain) -> str:
    """把消息链里的 Plain 文本拼起来，方便识别 JSON。"""
    parts = []
    for seg in chain:
        if isinstance(seg, Comp.Plain):
            parts.append(seg.text)
    return "".join(parts).strip()


def _try_parse_bridge_json(text: str, expected_bridge_value: str) -> Optional[Dict[str, Any]]:
    """
    识别并解析 Skill 输出的 JSON。
    约束：
    - 必须是一个 JSON object
    - 必须带 __astrbot_bridge__ == expected_bridge_value
    """
    if not text:
        return None

    # 快速挡掉明显不是 JSON 的
    if not (text.startswith("{") and text.endswith("}")):
        return None

    try:
        obj = json.loads(text)
    except Exception:
        return None

    if not isinstance(obj, dict):
        return None

    if obj.get(BRIDGE_SENTINEL_FIELD) != expected_bridge_value:
        return None

    return obj


async def _send_napcat_segment_via_aiocqhttp(event: AstrMessageEvent, segment: Dict[str, Any]) -> None:
    """
    通过 aiocqhttp (NapCat OneBot v11) 直接发送消息段：
    call_action('send_msg', group_id=..., message=[segment])
    """
    # 只在 NapCat/aiocqhttp 上干这事
    if event.get_platform_name() != "aiocqhttp":
        # 其它平台就别硬发了，容易变成“我以为能行”的经典事故
        return

    # event.bot 就是 aiocqhttp client（你文档里 delete_msg 用的就是这个套路）
    # 6
    client = event.bot

    payload: Dict[str, Any] = {"message": [segment]}

    gid = event.get_group_id()
    if gid:
        payload["group_id"] = int(gid7    uid = event.get_sender_id()
        payload["user_id"] = int(uid)

    await client.api.call_action("send_msg", **payload)


@register(
    "astrbot_plugin_skill_music_bridge",
    "晨",
    "拦截 Skill 输出 JSON 并转 NapCat 音乐卡片",
    "1.0.0",
)
class SkillMusicBridgePlugin(Star):
    def __init__(self, context: Context):
        super().__init__(context)

    @filter.on_decorating_result(priority=-999)
    async def on_decorating_result(self, event: AstrMessageEvent):
        result = event.get_result()
        chain = result.chain

        text = _extract_text_from_chain(chain)
        config = self.context.get_config() or {}
        expected = config.get("bridge_key", "napcat.music.v1")
        silent_swallow = bool(config.get("silent_swallow", True))

        obj = _try_parse_bridge_json(text, expected)
        if not obj:
            return

        # 失败 JSON：给用户一个更友好的提示（但仍然吞掉原 JSON）
        if "error" in obj:
            msg = obj["error"].get("message", "点歌失败")
            if silent_swallow:
                result.chain.clear()
                result.chain.append(Comp.Plain("\u200b"))  # 零宽占位，尽量不刷屏
            else:
                result.chain.clear()
                result.chain.append(Comp.Plain(f"点歌失败：{msg}"))
            return

        seg = obj.get("napcat_segment")
        if not isinstance(seg, dict) or seg.get("type") != "music":
            # 不是我们要的结构，别乱发
            return

        data = seg.get("data", {})
        if not isinstance(data, dict):
            return

        # 最低限度校验（自定义音乐卡片）
        if data.get("type") != "custom":
            # 你也可以扩展成 qq/163/kugou/kuwo 的 ID 卡片
            # 但你现在 MetingAPI 更适合 custom
            return

        # NapCat 自定义音乐消息段字段（url/audio/title/image/singer）
        # 结构参考 NapCat 文档 music -> 自定义音源 8
        for k in ("url", "audio", "title"):
            if not data.get(k):
                return

        # 先发音乐卡片
        await _send_napcat_segment_via_aiocqhttp(event, seg)

        # 再吞掉原本要发出去的 JSON
        if silent_swallow:
            result.chain.clear()
            result.chain.append(Comp.Plain("\u200b"))
        else:
            result.chain.clear()
            result.chain.append(Comp.Plain("🎵"))