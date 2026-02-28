import{o as Qa,a as tr,i as er,b as M,s as Y,e as qe}from"./lifecycle.93sJC7Cf.js";import{ag as ar,ac as rr,aU as ir,aV as nr,i as lr,u as or,aW as sr,aX as Xe,aY as cr,q as ur,aZ as Et,a_ as Ke,j as Ge,w as u,f as rt,t as St,g as t,a as O,p as dr,b as vr,a$ as Oe,h as st,e as l,m as F,s as d,ay as Ft,d as n,r as i,y as fr,c as gt}from"./utils.B7PHiYi3.js";import{a as mr,s as Q}from"./render.C35p3UC7.js";import{i as W}from"./if.BJgN68_l.js";import{e as pr,i as gr}from"./each.w2JWTWyQ.js";import{b as ue}from"./this.CrZ0VV86.js";import{s as Ue}from"./event-modifiers.gvea_hMH.js";import{I as f}from"./Icon.QkT1-JiB.js";import{m as Yt}from"./config.BcpLCoqV.js";import{I as A}from"./zh_TW.B395Vq90.js";import{i as D}from"./translation.C9ecHXJu.js";import"./props.D5mhnFgQ.js";const br=()=>performance.now(),tt={tick:s=>requestAnimationFrame(s),now:()=>br(),tasks:new Set};function Ze(){const s=tt.now();tt.tasks.forEach(r=>{r.c(s)||(tt.tasks.delete(r),r.f())}),tt.tasks.size!==0&&tt.tick(Ze)}function hr(s){let r;return tt.tasks.size===0&&tt.tick(Ze),{promise:new Promise(_=>{tt.tasks.add(r={c:s,f:_})}),abort(){tt.tasks.delete(r)}}}function qt(s,r){Xe(()=>{s.dispatchEvent(new CustomEvent(r))})}function yr(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const r=s.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(_=>_[0].toUpperCase()+_.slice(1)).join("")}function He(s){const r={},_=s.split(";");for(const y of _){const[w,C]=y.split(":");if(!w||C===void 0)break;const v=yr(w.trim());r[v]=C.trim()}return r}const xr=s=>s;function _r(s,r,_,y){var w=(s&sr)!==0,C="both",v,E=r.inert,N=r.style.overflow,g,x;function T(){return Xe(()=>v??=_()(r,y?.()??{},{direction:C}))}var K={is_global:w,in(){r.inert=E,qt(r,"introstart"),g=de(r,T(),x,1,()=>{qt(r,"introend"),g?.abort(),g=v=void 0,r.style.overflow=N})},out(j){r.inert=!0,qt(r,"outrostart"),x=de(r,T(),g,0,()=>{qt(r,"outroend"),j?.()})},stop:()=>{g?.abort(),x?.abort()}},z=ar;if((z.nodes.t??=[]).push(K),mr){var R=w;if(!R){for(var c=z.parent;c&&(c.f&rr)!==0;)for(;(c=c.parent)&&(c.f&ir)===0;);R=!c||(c.f&nr)!==0}R&&lr(()=>{or(()=>K.in())})}}function de(s,r,_,y,w){var C=y===1;if(cr(r)){var v,E=!1;return ur(()=>{if(!E){var j=r({direction:C?"in":"out"});v=de(s,j,_,y,w)}}),{abort:()=>{E=!0,v?.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(_?.deactivate(),!r?.duration)return w(),{abort:Et,deactivate:Et,reset:Et,t:()=>y};const{delay:N=0,css:g,tick:x,easing:T=xr}=r;var K=[];if(C&&_===void 0&&(x&&x(0,1),g)){var z=He(g(0,1));K.push(z,z)}var R=()=>1-y,c=s.animate(K,{duration:N,fill:"forwards"});return c.onfinish=()=>{c.cancel();var j=_?.t()??1-y;_?.abort();var m=y-j,it=r.duration*Math.abs(m),nt=[];if(it>0){var V=!1;if(g)for(var k=Math.ceil(it/16.666666666666668),S=0;S<=k;S+=1){var b=j+m*T(S/k),lt=He(g(b,1-b));nt.push(lt),V||=lt.overflow==="hidden"}V&&(s.style.overflow="hidden"),R=()=>{var B=c.currentTime;return j+m*T(B/it)},x&&hr(()=>{if(c.playState!=="running")return!1;var B=R();return x(B,1-B),!0})}c=s.animate(nt,{duration:it,fill:"forwards"}),c.onfinish=()=>{R=()=>y,x?.(y,1-y),w()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=Et)},deactivate:()=>{w=Et},reset:()=>{y===0&&x?.(1,0)},t:()=>R()}}function wr(s,r,_=r){var y=()=>{_(s.volume)};r()==null&&y(),Ke(s,["volumechange"],y,!1),Ge(()=>{var w=Number(r());w!==s.volume&&!isNaN(w)&&(s.volume=w)})}function kr(s,r,_=r){var y=()=>{_(s.muted)};r()==null&&y(),Ke(s,["volumechange"],y,!1),Ge(()=>{var w=!!r();s.muted!==w&&(s.muted=w)})}function Pr(s){const r=s-1;return r*r*r+1}function Er(s,{delay:r=0,duration:_=400,easing:y=Pr,axis:w="y"}={}){const C=getComputedStyle(s),v=+C.opacity,E=w==="y"?"height":"width",N=parseFloat(C[E]),g=w==="y"?["top","bottom"]:["left","right"],x=g.map(m=>`${m[0].toUpperCase()}${m.slice(1)}`),T=parseFloat(C[`padding${x[0]}`]),K=parseFloat(C[`padding${x[1]}`]),z=parseFloat(C[`margin${x[0]}`]),R=parseFloat(C[`margin${x[1]}`]),c=parseFloat(C[`border${x[0]}Width`]),j=parseFloat(C[`border${x[1]}Width`]);return{delay:r,duration:_,easing:y,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*v};${E}: ${m*N}px;padding-${g[0]}: ${m*T}px;padding-${g[1]}: ${m*K}px;margin-${g[0]}: ${m*z}px;margin-${g[1]}: ${m*R}px;border-${g[0]}-width: ${m*c}px;border-${g[1]}-width: ${m*j}px;min-${E}: 0`}}var Sr=st('<div class="fixed bottom-20 right-4 z-60 max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Fr=st('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),Mr=st('<span class="text-sm text-(--content-meta)"></span>'),Cr=st('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-(--btn-regular-bg) shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),Tr=st('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-(--line-divider)"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>'),jr=st(`<!> <div><div role="button" tabindex="0"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden shrink-0"><img/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-(--primary) rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -0.125rem;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 3rem;
	height: 3rem;
}
.music-player {
    max-width: 20rem;
    user-select: none;
}
.mini-player {
    width: 17.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 20rem;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
	}
    50% {
        opacity: 0.5;
	}
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px !important;
        /*left: 0.5rem !important;*/
        bottom: 0.5rem !important;
        right: 0.5rem !important;
	}
    .mini-player {
        width: 280px;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
	}
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
        max-width: none;
	}
    .controls {
        gap: 8px;
	}
    .controls button {
        width: 36px;
        height: 36px;
	}
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
	}
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
	}
    .song-title {
        font-size: 14px;
	}
    .song-artist {
        font-size: 12px;
	}
    .controls {
        gap: 6px;
        margin-bottom: 12px;
	}
    .controls button {
        width: 32px;
        height: 32px;
	}
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
	}
    .playlist-item {
        padding: 8px 12px;
	}
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
	}
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
	}
    to {
        transform: translateY(0);
        opacity: 1;
	}
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
	}
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
	}
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
	}
    to {
        transform: rotate(360deg);
	}
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
	border: none;
}</style>`,1),Ir=st('<audio preload="auto"></audio> <!>',1);function Or(s,r){vr(r,!1);let _=Yt.meting_api,y=Yt.id,w=Yt.server,C=Yt.type,v=F(!1),E=F(!1),N=F(!1),g=F(!1),x=F(0),T=F(0);const K="music-player-volume";let z=F(.7),R=F(!1),c=F(!1),j=F(!1),m=F(0),it=F(""),nt=F(!1),V=F({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),k=F([]),S=F(0),b=F(),lt=F(),B=F();function Je(){try{if(typeof localStorage<"u"){const e=localStorage.getItem(K);e!==null&&!isNaN(parseFloat(e))&&l(z,parseFloat(e))}}catch(e){console.warn("Failed to load volume settings from localStorage:",e)}}function Qe(){try{typeof localStorage<"u"&&localStorage.setItem(K,t(z).toString())}catch(e){console.warn("Failed to save volume settings to localStorage:",e)}}async function ta(){l(c,!0);const e=_.replace(":server",w).replace(":type",C).replace(":id",y).replace(":auth","").replace(":r",Date.now().toString());try{const h=await fetch(e);if(!h.ok)throw new Error("meting api error");const G=await h.json();l(k,G.map(q=>{let bt=q.name??q.title??D(A.unknownSong),Dt=q.artist??q.author??D(A.unknownArtist),$=q.duration??0;return $>1e4&&($=Math.floor($/1e3)),(!Number.isFinite($)||$<=0)&&($=0),{id:q.id,title:bt,artist:Dt,cover:q.pic??"",url:q.url??"",duration:$}})),t(k).length>0&&fe(t(k)[0]),l(c,!1)}catch{Kt(D(A.musicPlayerErrorPlaylist)),l(c,!1)}}function Ot(){!t(b)||!t(V).url||(t(v)?t(b).pause():t(b).play().catch(()=>{}))}function Mt(){l(E,!t(E)),t(E)&&(l(g,!1),l(N,!1))}function Ct(){l(N,!t(N)),t(N)&&(l(E,!1),l(g,!1))}function ve(){l(g,!t(g))}function ea(){l(j,!t(j)),t(j)&&l(m,0)}function aa(){l(m,(t(m)+1)%3),t(m)!==0&&l(j,!1)}function ra(){if(t(k).length<=1)return;const e=t(S)>0?t(S)-1:t(k).length-1;Tt(e)}function Ut(e=!0){if(t(k).length<=1)return;let h;if(t(j))do h=Math.floor(Math.random()*t(k).length);while(h===t(S)&&t(k).length>1);else h=t(S)<t(k).length-1?t(S)+1:0;Tt(h,e)}let Ht=!1;function Tt(e,h=!0){e<0||e>=t(k).length||(Ht=h,l(S,e),fe(t(k)[t(S)]))}function jt(e){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e:`/${e}`}function fe(e){e&&e.url!==t(V).url&&(l(V,{...e}),e.url?l(c,!0):l(c,!1))}let Xt=!1;function ia(){if(l(c,!1),t(b)?.duration&&t(b).duration>1&&(l(T,Math.floor(t(b).duration)),t(k)[t(S)]&&Ft(k,t(k)[t(S)].duration=t(T)),Ft(V,t(V).duration=t(T))),Ht||t(v)){const e=t(b).play();e!==void 0&&e.catch(h=>{console.warn("自动播放被拦截，等待用户交互:",h),Xt=!0,l(v,!1)})}}function me(){if(Xt&&t(b)){const e=t(b).play();e!==void 0&&e.then(()=>{Xt=!1}).catch(()=>{})}}function na(e){if(!t(V).url)return;l(c,!1),Kt(D(A.musicPlayerErrorSong));const h=t(v)||Ht;t(k).length>1?setTimeout(()=>Ut(h),1e3):Kt(D(A.musicPlayerErrorEmpty))}function la(){}function oa(){t(m)===1?(Ft(b,t(b).currentTime=0),t(b).play().catch(()=>{})):t(m)===2||t(j)?Ut(!0):l(v,!1)}function Kt(e){l(it,e),l(nt,!0),setTimeout(()=>{l(nt,!1)},3e3)}function sa(){l(nt,!1)}function ca(e){if(!t(b)||!t(lt))return;const h=t(lt).getBoundingClientRect(),q=(e.clientX-h.left)/h.width*t(T);Ft(b,t(b).currentTime=q),l(x,q)}let It=F(!1),At=!1,Gt=null,ct=null;function ua(e){t(B)&&(e.preventDefault(),At=!0,t(B).setPointerCapture(e.pointerId),Gt=t(B).getBoundingClientRect(),pe(e.clientX))}function da(e){At&&(e.preventDefault(),l(It,!0),!ct&&(ct=requestAnimationFrame(()=>{pe(e.clientX),ct=null})))}function va(e){At&&(At=!1,l(It,!1),Gt=null,t(B)&&t(B).releasePointerCapture(e.pointerId),ct&&(cancelAnimationFrame(ct),ct=null),Qe())}function pe(e){if(!t(b)||!t(B))return;const h=Gt||t(B).getBoundingClientRect(),G=Math.max(0,Math.min(1,(e-h.left)/h.width));l(z,G)}function ge(){l(R,!t(R))}function be(e){if(!Number.isFinite(e)||e<0)return"0:00";const h=Math.floor(e/60),G=Math.floor(e%60);return`${h}:${G.toString().padStart(2,"0")}`}const he=["click","keydown","touchstart"];Qa(()=>{Je(),he.forEach(e=>{document.addEventListener(e,me,{capture:!0})}),ta()}),tr(()=>{typeof document<"u"&&he.forEach(e=>{document.removeEventListener(e,me,{capture:!0})})}),er();var ye=Ir();u("pointermove",Oe,da),u("pointerup",Oe,va);var U=rt(ye);ue(U,e=>l(b,e),()=>t(b));var fa=d(U,2);{var ma=e=>{var h=jr(),G=rt(h);{var q=a=>{var p=Sr(),P=n(p),I=n(P);f(I,{icon:"material-symbols:error",class:"text-xl shrink-0"});var L=d(I,2),o=n(L,!0);i(L);var Z=d(L,2),mt=n(Z);f(mt,{icon:"material-symbols:close",class:"text-lg"}),i(Z),i(P),i(p),St(()=>Q(o,t(it))),u("click",Z,sa),O(a,p)};W(G,a=>{t(nt)&&a(q)})}var bt=d(G,2);let Dt;var $=n(bt);let xe;var pa=n($);{var ga=a=>{f(a,{icon:"eos-icons:loading",class:"text-white text-lg"})},ba=a=>{var p=gt(),P=rt(p);{var I=o=>{var Z=Fr();O(o,Z)},L=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};W(P,o=>{t(v)?o(I):o(L,!1)},!0)}O(a,p)};W(pa,a=>{t(c)?a(ga):a(ba,!1)})}i($);var Nt=d($,2);let _e;var we=n(Nt),ut=n(we),zt=n(ut);let ke;var Pe=d(zt,2),ha=n(Pe);{var ya=a=>{f(a,{icon:"eos-icons:loading",class:"text-white text-xl"})},xa=a=>{var p=gt(),P=rt(p);{var I=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},L=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};W(P,o=>{t(v)?o(I):o(L,!1)},!0)}O(a,p)};W(ha,a=>{t(c)?a(ya):a(xa,!1)})}i(Pe),i(ut);var dt=d(ut,2),Zt=n(dt),_a=n(Zt,!0);i(Zt);var Ee=d(Zt,2),wa=n(Ee,!0);i(Ee),i(dt);var Se=d(dt,2),ht=n(Se),ka=n(ht);f(ka,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(ht);var Jt=d(ht,2),Pa=n(Jt);f(Pa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Jt),i(Se),i(we),i(Nt);var Lt=d(Nt,2);let Fe;var Qt=n(Lt),te=n(Qt),ee=n(te);let Me;i(te);var ae=d(te,2),re=n(ae),Ea=n(re,!0);i(re);var ie=d(re,2),Sa=n(ie,!0);i(ie);var Ce=d(ie,2),Fa=n(Ce);i(Ce),i(ae);var Te=d(ae,2),yt=n(Te),Ma=n(yt);f(Ma,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(yt);var xt=d(yt,2);let je;var Ca=n(xt);f(Ca,{icon:"material-symbols:queue-music",class:"text-lg"}),i(xt),i(Te),i(Qt);var ne=d(Qt,2),ot=n(ne),Ta=n(ot);i(ot),ue(ot,a=>l(lt,a),()=>t(lt)),i(ne);var le=d(ne,2),vt=n(le);let Ie;var ja=n(vt);f(ja,{icon:"material-symbols:shuffle",class:"text-lg"}),i(vt);var _t=d(vt,2),Ia=n(_t);f(Ia,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(_t);var ft=d(_t,2);let Ae;var Aa=n(ft);{var Da=a=>{f(a,{icon:"eos-icons:loading",class:"text-xl"})},Na=a=>{var p=gt(),P=rt(p);{var I=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},L=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};W(P,o=>{t(v)?o(I):o(L,!1)},!0)}O(a,p)};W(Aa,a=>{t(c)?a(Da):a(Na,!1)})}i(ft);var wt=d(ft,2),za=n(wt);f(za,{icon:"material-symbols:skip-next",class:"text-xl"}),i(wt);var Rt=d(wt,2);let De;var La=n(Rt);{var Ra=a=>{f(a,{icon:"material-symbols:repeat-one",class:"text-lg"})},Va=a=>{var p=gt(),P=rt(p);{var I=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},L=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};W(P,o=>{t(m)===2?o(I):o(L,!1)},!0)}O(a,p)};W(La,a=>{t(m)===1?a(Ra):a(Va,!1)})}i(Rt),i(le);var Ne=d(le,2),Vt=n(Ne),$a=n(Vt);{var Wa=a=>{f(a,{icon:"material-symbols:volume-off",class:"text-lg"})},Ba=a=>{var p=gt(),P=rt(p);{var I=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},L=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};W(P,o=>{t(z)<.5?o(I):o(L,!1)},!0)}O(a,p)};W($a,a=>{t(R)||t(z)===0?a(Wa):a(Ba,!1)})}i(Vt);var et=d(Vt,2),ze=n(et);let Le;i(et),ue(et,a=>l(B,a),()=>t(B));var $t=d(et,2),Ya=n($t);f(Ya,{icon:"material-symbols:expand-more",class:"text-lg"}),i($t),i(Ne),i(Lt);var qa=d(Lt,2);{var Oa=a=>{var p=Tr(),P=n(p),I=n(P),L=n(I,!0);i(I);var o=d(I,2),Z=n(o);f(Z,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(P);var mt=d(P,2);pr(mt,5,()=>t(k),gr,(kt,at,H)=>{var J=Cr();let Wt;var Pt=n(J),oe=n(Pt);{var Ua=X=>{f(X,{icon:"material-symbols:graphic-eq",class:"text-(--primary) animate-pulse"})},Ha=X=>{var Be=gt(),Ga=rt(Be);{var Za=pt=>{f(pt,{icon:"material-symbols:pause",class:"text-(--primary)"})},Ja=pt=>{var Ye=Mr();Ye.textContent=H+1,O(pt,Ye)};W(Ga,pt=>{H===t(S)?pt(Za):pt(Ja,!1)},!0)}O(X,Be)};W(oe,X=>{H===t(S)&&t(v)?X(Ua):X(Ha,!1)})}i(Pt);var se=d(Pt,2),Re=n(se);i(se);var Ve=d(se,2),Bt=n(Ve);let $e;var Xa=n(Bt,!0);i(Bt);var ce=d(Bt,2);let We;var Ka=n(ce,!0);i(ce),i(Ve),i(J),St(X=>{Wt=Y(J,1,"playlist-item flex items-center gap-3 p-3 hover:bg-(--btn-plain-bg-hover) cursor-pointer transition-colors",null,Wt,{"bg-[var(--btn-plain-bg)]":H===t(S),"text-[var(--primary)]":H===t(S)}),M(J,"aria-label",`播放 ${t(at).title??""} - ${t(at).artist??""}`),M(Re,"src",X),M(Re,"alt",t(at).title),$e=Y(Bt,1,"font-medium truncate",null,$e,{"text-[var(--primary)]":H===t(S),"text-90":H!==t(S)}),Q(Xa,t(at).title),We=Y(ce,1,"text-sm text-(--content-meta) truncate",null,We,{"text-[var(--primary)]":H===t(S)}),Q(Ka,t(at).artist)},[()=>jt(t(at).cover)]),u("click",J,()=>Tt(H)),u("keydown",J,X=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),Tt(H))}),O(kt,J)}),i(mt),i(p),St(kt=>Q(L,kt),[()=>D(A.musicPlayerPlaylist)]),u("click",o,ve),_r(3,p,()=>Er,()=>({duration:300,axis:"y"})),O(a,p)};W(qa,a=>{t(g)&&a(Oa)})}i(bt),fr(2),St((a,p,P,I,L,o,Z,mt,kt,at,H,J,Wt,Pt,oe)=>{Dt=Y(bt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Dt,{expanded:t(E),"hidden-mode":t(N)}),xe=Y($,1,"orb-player w-12 h-12 bg-(--primary) rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,xe,{"opacity-0":!t(N),"scale-0":!t(N),"pointer-events-none":!t(N)}),M($,"aria-label",a),_e=Y(Nt,1,"mini-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,_e,{"opacity-0":t(E)||t(N),"scale-95":t(E)||t(N),"pointer-events-none":t(E)||t(N)}),M(ut,"aria-label",p),M(zt,"src",P),M(zt,"alt",I),ke=Y(zt,1,"w-full h-full object-cover transition-transform duration-300",null,ke,{spinning:t(v)&&!t(c),"animate-pulse":t(c)}),M(dt,"aria-label",L),Q(_a,t(V).title),Q(wa,t(V).artist),M(ht,"title",o),Fe=Y(Lt,1,"expanded-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,Fe,{"opacity-0":!t(E),"scale-95":!t(E),"pointer-events-none":!t(E)}),M(ee,"src",Z),M(ee,"alt",mt),Me=Y(ee,1,"w-full h-full object-cover transition-transform duration-300",null,Me,{spinning:t(v)&&!t(c),"animate-pulse":t(c)}),Q(Ea,t(V).title),Q(Sa,t(V).artist),Q(Fa,`${kt??""} / ${at??""}`),M(yt,"title",H),je=Y(xt,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,je,{"text-[var(--primary)]":t(g)}),M(xt,"title",J),M(ot,"aria-label",Wt),M(ot,"aria-valuenow",t(T)>0?t(x)/t(T)*100:0),qe(Ta,`width: ${t(T)>0?t(x)/t(T)*100:0}%`),Ie=Y(vt,1,"w-10 h-10 rounded-lg",null,Ie,{"btn-regular":t(j),"btn-plain":!t(j)}),vt.disabled=t(k).length<=1,_t.disabled=t(k).length<=1,Ae=Y(ft,1,"btn-regular w-12 h-12 rounded-full",null,Ae,{"opacity-50":t(c)}),ft.disabled=t(c),wt.disabled=t(k).length<=1,De=Y(Rt,1,"w-10 h-10 rounded-lg",null,De,{"btn-regular":t(m)>0,"btn-plain":t(m)===0}),M(et,"aria-label",Pt),M(et,"aria-valuenow",t(z)*100),Le=Y(ze,1,"h-full bg-(--primary) rounded-full transition-all",null,Le,{"duration-100":!t(It),"duration-0":t(It)}),qe(ze,`width: ${t(z)*100}%`),M($t,"title",oe)},[()=>D(A.musicPlayerShow),()=>t(v)?D(A.musicPlayerPause):D(A.musicPlayerPlay),()=>jt(t(V).cover),()=>D(A.musicPlayerCover),()=>D(A.musicPlayerExpand),()=>D(A.musicPlayerHide),()=>jt(t(V).cover),()=>D(A.musicPlayerCover),()=>be(t(x)),()=>be(t(T)),()=>D(A.musicPlayerHide),()=>D(A.musicPlayerPlaylist),()=>D(A.musicPlayerProgress),()=>D(A.musicPlayerVolume),()=>D(A.musicPlayerCollapse)]),u("click",$,Ct),u("keydown",$,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Ct())}),u("click",ut,Ot),u("keydown",ut,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Ot())}),u("click",dt,Mt),u("keydown",dt,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Mt())}),u("click",ht,Ue(Ct)),u("click",Jt,Ue(Mt)),u("click",yt,Ct),u("click",xt,ve),u("click",ot,ca),u("keydown",ot,a=>{if(a.key==="Enter"||a.key===" "){a.preventDefault();const P=.5*t(T);t(b)&&(Ft(b,t(b).currentTime=P),l(x,P))}}),u("click",vt,ea),u("click",_t,ra),u("click",ft,Ot),u("click",wt,()=>Ut()),u("click",Rt,aa),u("click",Vt,ge),u("pointerdown",et,ua),u("keydown",et,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.key==="Enter"&&ge())}),u("click",$t,Mt),O(e,h)};W(fa,e=>{e(ma)})}St(e=>M(U,"src",e),[()=>jt(t(V).url)]),wr(U,()=>t(z),e=>l(z,e)),kr(U,()=>t(R),e=>l(R,e)),u("play",U,()=>l(v,!0)),u("pause",U,()=>l(v,!1)),u("timeupdate",U,()=>l(x,t(b).currentTime)),u("ended",U,oa),u("error",U,na),u("loadeddata",U,ia),u("loadstart",U,la),O(s,ye),dr()}export{Or as default};
