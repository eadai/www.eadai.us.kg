import{j as Ue,k as Xe,l as G,m as K,p as pt,u as U,d as s,n as F,q as ge,s as Je,I as se,v as Qe,x as Ae,y as Ze,z as Ct,A as Pe,B as et,C as Oe,D as tt,E as nt,G as at,H as ot,J as Et,K as fe,V as Se,L as ve,M as it,F as pe,N as rt,O as At,P as Pt,Q as Ot,R as Vt,S as Tt,T as _t,U as lt,W as It,X as Bt,Y as Lt,Z as Rt,$ as Mt,a0 as O,a1 as st,a2 as ct,a3 as Ft,a4 as z,a5 as $,a6 as Y,a7 as Ve,a8 as M,a9 as W,aa as Nt,ab as Me,ac as be,ad as xe,ae as Fe,af as Te,ag as Ne,ah as D,ai as He,aj as _e,ak as ut,al as Ht,am as he,an as dt,ao as De,ap as Dt,aq as ee,ar as Wt,as as jt,at as ft,au as zt,av as $t,aw as qt,ax as Yt,ay as Gt,az as Kt,aA as Ut,aB as Xt,aC as Jt,aD as Qt,aE as Zt,aF as en,aG as tn,aH as nn,aI as an,o as vt,c as mt,w as A,aJ as on,b as Z,aK as rn,aL as ae,e as oe,t as ln,aM as sn}from"./index-J_YdAGYK.js";class q{constructor(n){let{x:t,y:a,width:o,height:i}=n;this.x=t,this.y=a,this.width=o,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function We(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function cn(e){return Array.isArray(e)?new q({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function un(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,i,c,r,d;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),i=+o[0],c=+o[5],r=+o[12],d=+o[13];else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),i=+o[0],c=+o[3],r=+o[4],d=+o[5];else return new q(n);const f=t.transformOrigin,l=n.x-r-(1-i)*parseFloat(f),h=n.y-d-(1-c)*parseFloat(f.slice(f.indexOf(" ")+1)),p=i?n.width/i:e.offsetWidth+1,S=c?n.height/c:e.offsetHeight+1;return new q({x:l,y:h,width:p,height:S})}else return new q(n)}function dn(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const ue=new WeakMap;function fn(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const a=Xe(t),o=ue.get(e);if(n[t]==null)o==null||o.forEach(i=>{const[c,r]=i;c===a&&(e.removeEventListener(a,r),o.delete(i))});else if(!o||![...o].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=o||new Set;i.add([a,n[t]]),ue.has(e)||ue.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function vn(e,n){Object.keys(n).forEach(t=>{if(Ue(t)){const a=Xe(t),o=ue.get(e);o==null||o.forEach(i=>{const[c,r]=i;c===a&&(e.removeEventListener(a,r),o.delete(i))})}else e.removeAttribute(t)})}function yt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const mn="cubic-bezier(0.4, 0, 0.2, 1)";function yn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?gn(e):Ie(e))return e;e=e.parentElement}return document.scrollingElement}function me(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Ie(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Ie(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function gn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function hn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const bn="/assets/logo-DtuIbWiQ.png",xn=G()({name:"VCardActions",props:K(),setup(e,n){let{slots:t}=n;return pt({VBtn:{slim:!0,variant:"text"}}),U(()=>{var a;return s("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),kn=F({opacity:[Number,String],...K(),...ge()},"VCardSubtitle"),wn=G()({name:"VCardSubtitle",props:kn(),setup(e,n){let{slots:t}=n;return U(()=>s(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Sn=Je("v-card-title"),pn=F({start:Boolean,end:Boolean,icon:se,image:String,text:String,...Qe(),...K(),...Ae(),...Ze(),...Ct(),...ge(),...Pe(),...et({variant:"flat"})},"VAvatar"),je=G()({name:"VAvatar",props:pn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=Oe(e),{borderClasses:o}=tt(e),{colorClasses:i,colorStyles:c,variantClasses:r}=nt(e),{densityClasses:d}=at(e),{roundedClasses:f}=ot(e),{sizeClasses:l,sizeStyles:h}=Et(e);return U(()=>s(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,i.value,d.value,f.value,l.value,r.value,e.class],style:[c.value,h.value,e.style]},{default:()=>[t.default?s(ve,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?s(fe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?s(Se,{key:"icon",icon:e.icon},null):e.text,it(!1,"v-avatar")]})),{}}}),Cn=F({appendAvatar:String,appendIcon:se,prependAvatar:String,prependIcon:se,subtitle:[String,Number],title:[String,Number],...K(),...Ae()},"VCardItem"),En=G()({name:"VCardItem",props:Cn(),setup(e,n){let{slots:t}=n;return U(()=>{var f;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||t.append),r=!!(e.title!=null||t.title),d=!!(e.subtitle!=null||t.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[o&&s("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?s(ve,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):s(pe,null,[e.prependAvatar&&s(je,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(Se,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[r&&s(Sn,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),d&&s(wn,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(f=t.default)==null?void 0:f.call(t)]),c&&s("div",{key:"append",class:"v-card-item__append"},[t.append?s(ve,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):s(pe,null,[e.appendIcon&&s(Se,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(je,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),An=F({opacity:[Number,String],...K(),...ge()},"VCardText"),Pn=G()({name:"VCardText",props:An(),setup(e,n){let{slots:t}=n;return U(()=>s(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),On=F({appendAvatar:String,appendIcon:se,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:se,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Qe(),...K(),...Ae(),...rt(),...At(),...Pt(),...Ot(),...Vt(),...Ze(),...Tt(),...ge(),...Pe(),...et({variant:"elevated"})},"VCard"),ie=G()({name:"VCard",directives:{Ripple:_t},props:On(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=Oe(e),{borderClasses:i}=tt(e),{colorClasses:c,colorStyles:r,variantClasses:d}=nt(e),{densityClasses:f}=at(e),{dimensionStyles:l}=lt(e),{elevationClasses:h}=It(e),{loaderClasses:p}=Bt(e),{locationStyles:S}=Lt(e),{positionClasses:y}=Rt(e),{roundedClasses:v}=ot(e),C=Mt(e,t),V=O(()=>e.link!==!1&&C.isLink.value),k=O(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return U(()=>{const w=V.value?"a":e.tag,T=!!(a.title||e.title!=null),I=!!(a.subtitle||e.subtitle!=null),L=T||I,P=!!(a.append||e.appendAvatar||e.appendIcon),u=!!(a.prepend||e.prependAvatar||e.prependIcon),_=!!(a.image||e.image),te=L||u||P,E=!!(a.text||e.text!=null);return st(s(w,z({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},o.value,i.value,c.value,f.value,h.value,p.value,y.value,v.value,d.value,e.class],style:[r.value,l.value,S.value,e.style],onClick:k.value&&C.navigate,tabindex:e.disabled?-1:void 0},C.linkProps),{default:()=>{var b;return[_&&s("div",{key:"image",class:"v-card__image"},[a.image?s(ve,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(fe,{key:"image-img",cover:!0,src:e.image},null)]),s(Ft,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),te&&s(En,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),E&&s(Pn,{key:"text"},{default:()=>{var m;return[((m=a.text)==null?void 0:m.call(a))??e.text]}}),(b=a.default)==null?void 0:b.call(a),a.actions&&s(xn,null,{default:a.actions}),it(k.value,"v-card")]}}),[[ct("ripple"),k.value&&e.ripple]])}),{}}}),ze=Je("v-kbd","kbd");function ke(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Vn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function $e(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return ke({x:o,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return ke({x:o,y:i},n)}return ke({x:n.width/2,y:n.height/2},n)}const gt={static:In,connected:Ln},Tn=F({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in gt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function _n(e,n){const t=$({}),a=$();Y&&Ve(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var c,r;M(()=>e.locationStrategy,i),W(()=>{window.removeEventListener("resize",o),a.value=void 0}),window.addEventListener("resize",o,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(c=e.locationStrategy(n,e,t))==null?void 0:c.updateLocation:a.value=(r=gt[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function o(i){var c;(c=a.value)==null||c.call(a,i)}return{contentStyles:t,updateLocation:a}}function In(){}function Bn(e,n){const t=un(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ln(e,n,t){(Array.isArray(e.target.value)||hn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:i}=Nt(()=>{const y=Me(n.location,e.isRtl.value),v=n.origin==="overlap"?y:n.origin==="auto"?be(y):Me(n.origin,e.isRtl.value);return y.side===v.side&&y.align===xe(v).align?{preferredAnchor:Fe(y),preferredOrigin:Fe(v)}:{preferredAnchor:y,preferredOrigin:v}}),[c,r,d,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>O(()=>{const v=parseFloat(n[y]);return isNaN(v)?1/0:v})),l=O(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const y=n.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let h=!1;const p=new ResizeObserver(()=>{h&&S()});M([e.target,e.contentEl],(y,v)=>{let[C,V]=y,[k,w]=v;k&&!Array.isArray(k)&&p.unobserve(k),C&&!Array.isArray(C)&&p.observe(C),w&&p.unobserve(w),V&&p.observe(V)},{immediate:!0}),W(()=>{p.disconnect()});function S(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const y=cn(e.target.value),v=Bn(e.contentEl.value,e.isRtl.value),C=me(e.contentEl.value),V=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const k=C.reduce((E,b)=>{const m=b.getBoundingClientRect(),x=new q({x:b===document.documentElement?0:m.x,y:b===document.documentElement?0:m.y,width:b.clientWidth,height:b.clientHeight});return E?new q({x:Math.max(E.left,x.left),y:Math.max(E.top,x.top),width:Math.min(E.right,x.right)-Math.max(E.left,x.left),height:Math.min(E.bottom,x.bottom)-Math.max(E.top,x.top)}):x},void 0);k.x+=V,k.y+=V,k.width-=V*2,k.height-=V*2;let w={anchor:o.value,origin:i.value};function T(E){const b=new q(v),m=$e(E.anchor,y),x=$e(E.origin,b);let{x:N,y:H}=Vn(m,x);switch(E.anchor.side){case"top":H-=l.value[0];break;case"bottom":H+=l.value[0];break;case"left":N-=l.value[0];break;case"right":N+=l.value[0];break}switch(E.anchor.align){case"top":H-=l.value[1];break;case"bottom":H+=l.value[1];break;case"left":N-=l.value[1];break;case"right":N+=l.value[1];break}return b.x+=N,b.y+=H,b.width=Math.min(b.width,d.value),b.height=Math.min(b.height,f.value),{overflows:We(b,k),x:N,y:H}}let I=0,L=0;const P={x:0,y:0},u={x:!1,y:!1};let _=-1;for(;!(_++>10);){const{x:E,y:b,overflows:m}=T(w);I+=E,L+=b,v.x+=E,v.y+=b;{const x=Ne(w.anchor),N=m.x.before||m.x.after,H=m.y.before||m.y.after;let X=!1;if(["x","y"].forEach(B=>{if(B==="x"&&N&&!u.x||B==="y"&&H&&!u.y){const j={anchor:{...w.anchor},origin:{...w.origin}},J=B==="x"?x==="y"?xe:be:x==="y"?be:xe;j.anchor=J(j.anchor),j.origin=J(j.origin);const{overflows:Q}=T(j);(Q[B].before<=m[B].before&&Q[B].after<=m[B].after||Q[B].before+Q[B].after<(m[B].before+m[B].after)/2)&&(w=j,X=u[B]=!0)}}),X)continue}m.x.before&&(I+=m.x.before,v.x+=m.x.before),m.x.after&&(I-=m.x.after,v.x-=m.x.after),m.y.before&&(L+=m.y.before,v.y+=m.y.before),m.y.after&&(L-=m.y.after,v.y-=m.y.after);{const x=We(v,k);P.x=k.width-x.x.before-x.x.after,P.y=k.height-x.y.before-x.y.after,I+=x.x.before,v.x+=x.x.before,L+=x.y.before,v.y+=x.y.before}break}const te=Ne(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:D(we(L)),left:e.isRtl.value?void 0:D(we(I)),right:e.isRtl.value?D(we(-I)):void 0,minWidth:D(te==="y"?Math.min(c.value,y.width):c.value),maxWidth:D(qe(He(P.x,c.value===1/0?0:c.value,d.value))),maxHeight:D(qe(He(P.y,r.value===1/0?0:r.value,f.value)))}),{available:P,contentBox:v}}return M(()=>[o.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>S()),Te(()=>{const y=S();if(!y)return;const{available:v,contentBox:C}=y;C.height>v.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function we(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function qe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ce=!0;const ye=[];function Rn(e){!Ce||ye.length?(ye.push(e),Ee()):(Ce=!1,e(),Ee())}let Ye=-1;function Ee(){cancelAnimationFrame(Ye),Ye=requestAnimationFrame(()=>{const e=ye.shift();e&&e(),ye.length?Ee():Ce=!0})}const de={none:null,close:Nn,block:Hn,reposition:Dn},Mn=F({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in de}},"VOverlay-scroll-strategies");function Fn(e,n){if(!Y)return;let t;_e(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=ut(),await new Promise(a=>setTimeout(a)),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=de[e.scrollStrategy])==null||a.call(de,n,e,t)}))}),W(()=>{t==null||t.stop()})}function Nn(e){function n(t){e.isActive.value=!1}ht(e.targetEl.value??e.contentEl.value,n)}function Hn(e,n){var c;const t=(c=e.root.value)==null?void 0:c.offsetParent,a=[...new Set([...me(e.targetEl.value,n.contained?t:void 0),...me(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,i=(r=>Ie(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((r,d)=>{r.style.setProperty("--v-body-scroll-x",D(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",D(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",D(o)),r.classList.add("v-overlay-scroll-blocked")}),W(()=>{a.forEach((r,d)=>{const f=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),h=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-f,r.scrollTop=-l,r.style.scrollBehavior=h}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Dn(e,n,t){let a=!1,o=-1,i=-1;function c(r){Rn(()=>{var l,h;const d=performance.now();(h=(l=e.updateLocation).value)==null||h.call(l,r),a=(performance.now()-d)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{ht(e.targetEl.value??e.contentEl.value,r=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{c(r)})})):c(r)})})}),W(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(o)})}function ht(e,n){const t=[document,...me(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),W(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const Wn=Symbol.for("vuetify:v-menu"),jn=F({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function zn(e,n){let t=()=>{};function a(c){t==null||t();const r=Number(c?e.openDelay:e.closeDelay);return new Promise(d=>{t=Ht(r,()=>{n==null||n(c),d(c)})})}function o(){return a(!0)}function i(){return a(!1)}return{clearDelay:t,runOpenDelay:o,runCloseDelay:i}}const $n=F({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...jn()},"VOverlay-activator");function qn(e,n){let{isActive:t,isTop:a,contentEl:o}=n;const i=he("useActivator"),c=$();let r=!1,d=!1,f=!0;const l=O(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),h=O(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!l.value),{runOpenDelay:p,runCloseDelay:S}=zn(e,u=>{u===(e.openOnHover&&r||l.value&&d)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==u&&(f=!0),t.value=u)}),y=$(),v={onClick:u=>{u.stopPropagation(),c.value=u.currentTarget||u.target,t.value||(y.value=[u.clientX,u.clientY]),t.value=!t.value},onMouseenter:u=>{var _;(_=u.sourceCapabilities)!=null&&_.firesTouchEvents||(r=!0,c.value=u.currentTarget||u.target,p())},onMouseleave:u=>{r=!1,S()},onFocus:u=>{Dt(u.target,":focus-visible")!==!1&&(d=!0,u.stopPropagation(),c.value=u.currentTarget||u.target,p())},onBlur:u=>{d=!1,u.stopPropagation(),S()}},C=O(()=>{const u={};return h.value&&(u.onClick=v.onClick),e.openOnHover&&(u.onMouseenter=v.onMouseenter,u.onMouseleave=v.onMouseleave),l.value&&(u.onFocus=v.onFocus,u.onBlur=v.onBlur),u}),V=O(()=>{const u={};if(e.openOnHover&&(u.onMouseenter=()=>{r=!0,p()},u.onMouseleave=()=>{r=!1,S()}),l.value&&(u.onFocusin=()=>{d=!0,p()},u.onFocusout=()=>{d=!1,S()}),e.closeOnContentClick){const _=dt(Wn,null);u.onClick=()=>{t.value=!1,_==null||_.closeParents()}}return u}),k=O(()=>{const u={};return e.openOnHover&&(u.onMouseenter=()=>{f&&(r=!0,f=!1,p())},u.onMouseleave=()=>{r=!1,S()}),u});M(a,u=>{var _;u&&(e.openOnHover&&!r&&(!l.value||!d)||l.value&&!d&&(!e.openOnHover||!r))&&!((_=o.value)!=null&&_.contains(document.activeElement))&&(t.value=!1)}),M(t,u=>{u||setTimeout(()=>{y.value=void 0})},{flush:"post"});const w=De();_e(()=>{w.value&&Te(()=>{c.value=w.el})});const T=De(),I=O(()=>e.target==="cursor"&&y.value?y.value:T.value?T.el:bt(e.target,i)||c.value),L=O(()=>Array.isArray(I.value)?void 0:I.value);let P;return M(()=>!!e.activator,u=>{u&&Y?(P=ut(),P.run(()=>{Yn(e,i,{activatorEl:c,activatorEvents:C})})):P&&P.stop()},{flush:"post",immediate:!0}),W(()=>{P==null||P.stop()}),{activatorEl:c,activatorRef:w,target:I,targetEl:L,targetRef:T,activatorEvents:C,contentEvents:V,scrimEvents:k}}function Yn(e,n,t){let{activatorEl:a,activatorEvents:o}=t;M(()=>e.activator,(d,f)=>{if(f&&d!==f){const l=r(f);l&&c(l)}d&&Te(()=>i())},{immediate:!0}),M(()=>e.activatorProps,()=>{i()}),W(()=>{c()});function i(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&fn(d,z(o.value,f))}function c(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&vn(d,z(o.value,f))}function r(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=bt(d,n);return a.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,a.value}}function bt(e,n){var a,o;if(!e)return;let t;if(e==="parent"){let i=(o=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:o.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Gn(){if(!Y)return ee(!1);const{ssr:e}=Wt();if(e){const n=ee(!1);return jt(()=>{n.value=!0}),n}else return ee(!0)}const Kn=F({eager:Boolean},"lazy");function Un(e,n){const t=ee(!1),a=O(()=>t.value||e.eager||n.value);M(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function Xn(){const n=he("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ge=Symbol.for("vuetify:stack"),re=ft([]);function Jn(e,n,t){const a=he("useStack"),o=!t,i=dt(Ge,void 0),c=ft({activeChildren:new Set});zt(Ge,c);const r=ee(+n.value);Ve(e,()=>{var h;const l=(h=re.at(-1))==null?void 0:h[1];r.value=l?l+10:+n.value,o&&re.push([a.uid,r.value]),i==null||i.activeChildren.add(a.uid),W(()=>{if(o){const p=$t(re).findIndex(S=>S[0]===a.uid);re.splice(p,1)}i==null||i.activeChildren.delete(a.uid)})});const d=ee(!0);o&&_e(()=>{var h;const l=((h=re.at(-1))==null?void 0:h[0])===a.uid;setTimeout(()=>d.value=l)});const f=O(()=>!c.activeChildren.size);return{globalTop:qt(d),localTop:f,stackStyles:O(()=>({zIndex:r.value}))}}function Qn(e){return{teleportTarget:O(()=>{const t=e();if(t===!0||!Y)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=[...a.children].find(i=>i.matches(".v-overlay-container"));return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Zn(){return!0}function xt(e,n,t){if(!e||kt(e,t)===!1)return!1;const a=yt(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(i=>i==null?void 0:i.contains(e.target))}function kt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Zn)(e)}function ea(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&xt(e,n,t)&&setTimeout(()=>{kt(e,t)&&a&&a(e)},0)}function Ke(e,n){const t=yt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const ta={mounted(e,n){const t=o=>ea(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=xt(o,e,n)};Ke(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},beforeUnmount(e,n){e._clickOutside&&(Ke(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function na(e){const{modelValue:n,color:t,...a}=e;return s(an,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&s("div",z({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const aa=F({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...$n(),...K(),...rt(),...Kn(),...Tn(),...Mn(),...Pe(),...Yt()},"VOverlay"),le=G()({name:"VOverlay",directives:{ClickOutside:ta},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...aa()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const i=he("VOverlay"),c=$(),r=$(),d=$(),f=Gt(e,"modelValue"),l=O({get:()=>f.value,set:g=>{g&&e.disabled||(f.value=g)}}),{themeClasses:h}=Oe(e),{rtlClasses:p,isRtl:S}=Kt(),{hasContent:y,onAfterLeave:v}=Un(e,l),C=Ut(O(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:V,localTop:k,stackStyles:w}=Jn(l,Xt(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:I,target:L,targetEl:P,targetRef:u,activatorEvents:_,contentEvents:te,scrimEvents:E}=qn(e,{isActive:l,isTop:k,contentEl:d}),{teleportTarget:b}=Qn(()=>{var ne,Le,Re;const g=e.attach||e.contained;if(g)return g;const R=((ne=T==null?void 0:T.value)==null?void 0:ne.getRootNode())||((Re=(Le=i.proxy)==null?void 0:Le.$el)==null?void 0:Re.getRootNode());return R instanceof ShadowRoot?R:!1}),{dimensionStyles:m}=lt(e),x=Gn(),{scopeId:N}=Xn();M(()=>e.disabled,g=>{g&&(l.value=!1)});const{contentStyles:H,updateLocation:X}=_n(e,{isRtl:S,contentEl:d,target:L,isActive:l});Fn(e,{root:c,contentEl:d,targetEl:P,isActive:l,updateLocation:X});function B(g){o("click:outside",g),e.persistent?ce():l.value=!1}function j(g){return l.value&&V.value&&(!e.scrim||g.target===r.value||g instanceof MouseEvent&&g.shadowTarget===r.value)}Y&&M(l,g=>{g?window.addEventListener("keydown",J):window.removeEventListener("keydown",J)},{immediate:!0}),Jt(()=>{Y&&window.removeEventListener("keydown",J)});function J(g){var R,ne;g.key==="Escape"&&V.value&&(e.persistent?ce():(l.value=!1,(R=d.value)!=null&&R.contains(document.activeElement)&&((ne=T.value)==null||ne.focus())))}const Q=Qt();Ve(()=>e.closeOnBack,()=>{Zt(Q,g=>{V.value&&l.value?(g(!1),e.persistent?ce():l.value=!1):g()})});const Be=$();M(()=>l.value&&(e.absolute||e.contained)&&b.value==null,g=>{if(g){const R=yn(c.value);R&&R!==document.scrollingElement&&(Be.value=R.scrollTop)}});function ce(){e.noClickAnimation||d.value&&dn(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:mn})}function wt(){o("afterEnter")}function St(){v(),o("afterLeave")}return U(()=>{var g;return s(pe,null,[(g=t.activator)==null?void 0:g.call(t,{isActive:l.value,targetRef:u,props:z({ref:I},_.value,e.activatorProps)}),x.value&&y.value&&s(en,{disabled:!b.value,to:b.value},{default:()=>[s("div",z({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},h.value,p.value,e.class],style:[w.value,{"--v-overlay-opacity":e.opacity,top:D(Be.value)},e.style],ref:c},N,a),[s(na,z({color:C,modelValue:l.value&&!!e.scrim,ref:r},E.value),null),s(tn,{appear:!0,persisted:!0,transition:e.transition,target:L.value,onAfterEnter:wt,onAfterLeave:St},{default:()=>{var R;return[st(s("div",z({ref:d,class:["v-overlay__content",e.contentClass],style:[m.value,H.value]},te.value,e.contentProps),[(R=t.default)==null?void 0:R.call(t,{isActive:l})]),[[nn,l.value],[ct("click-outside"),{handler:B,closeConditional:j,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,scrimEl:r,target:L,animateClick:ce,contentEl:d,globalTop:V,localTop:k,updateLocation:X}}}),oa={class:"text-subtitle-1"},ia={__name:"HelloWorld",setup(e){return(n,t)=>(vt(),mt(sn,{class:"fill-height"},{default:A(()=>[s(on,{class:"align-centerfill-height mx-auto","max-width":"900"},{default:A(()=>[s(fe,{class:"mb-4",height:"150",src:bn}),t[6]||(t[6]=Z("div",{class:"text-center"},[Z("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to"),Z("h1",{class:"text-h2 font-weight-bold"},"Vuetify")],-1)),t[7]||(t[7]=Z("div",{class:"py-4"},null,-1)),s(rn,null,{default:A(()=>[s(ae,{cols:"12"},{default:A(()=>[s(ie,{class:"py-4",color:"surface-variant",image:"https://cdn.vuetifyjs.com/docs/images/one/create/feature.png","prepend-icon":"mdi-rocket-launch-outline",rounded:"lg",variant:"outlined"},{image:A(()=>[s(fe,{position:"top right"})]),title:A(()=>t[0]||(t[0]=[Z("h2",{class:"text-h5 font-weight-bold"},"Get started",-1)])),subtitle:A(()=>[Z("div",oa,[t[3]||(t[3]=oe(" Replace this page by removing ")),s(ze,null,{default:A(()=>t[1]||(t[1]=[oe(ln("<HelloWorld />"))])),_:1}),t[4]||(t[4]=oe(" in ")),s(ze,null,{default:A(()=>t[2]||(t[2]=[oe("pages/index.vue")])),_:1}),t[5]||(t[5]=oe(". "))])]),default:A(()=>[s(le,{opacity:".12",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),s(ae,{cols:"6"},{default:A(()=>[s(ie,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/","prepend-icon":"mdi-text-box-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Learn about all things Vuetify in our documentation.",target:"_blank",title:"Documentation",variant:"text"},{default:A(()=>[s(le,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),s(ae,{cols:"6"},{default:A(()=>[s(ie,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","prepend-icon":"mdi-star-circle-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Explore available framework Features.",target:"_blank",title:"Features",variant:"text"},{default:A(()=>[s(le,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),s(ae,{cols:"6"},{default:A(()=>[s(ie,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://vuetifyjs.com/components/all","prepend-icon":"mdi-widgets-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Discover components in the API Explorer.",target:"_blank",title:"Components",variant:"text"},{default:A(()=>[s(le,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),s(ae,{cols:"6"},{default:A(()=>[s(ie,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://discord.vuetifyjs.com","prepend-icon":"mdi-account-group-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Connect with Vuetify developers.",target:"_blank",title:"Community",variant:"text"},{default:A(()=>[s(le,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},la={__name:"index",setup(e){return(n,t)=>{const a=ia;return vt(),mt(a)}}};export{la as default};
