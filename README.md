# 🎵 astrbot_plugin_skill_music_bridge

将 AstrBot Skill 输出的 JSON 自动转换为 NapCat 音乐卡片并发送。

---

## 🧠 设计理念

实现一个两段式音乐卡片系统：

自然语言  
→ LLM 调用 Skill  
→ Skill 调 MetingAPI 并生成 JSON  
→ 插件拦截 JSON  
→ 转换为 NapCat music 消息段发送  

Skill 只负责结构化输出  
插件负责平台适配与富消息发送  

职责分离，结构清晰，可扩展性强。

---

## 📦 功能特性

- ✅ 拦截 Skill 输出 JSON
- ✅ 自动识别桥接标识字段
- ✅ 转换为 NapCat 自定义 music 卡片
- ✅ 支持群聊 / 私聊
- ✅ 可选择是否吞掉原 JSON 文本

---

## 🧩 依赖环境

- AstrBot v4+
- 平台：NapCat（aiocqhttp / OneBot v11）
- MetingAPI 服务