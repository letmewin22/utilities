!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@emotionagency/utils"]=t():e["@emotionagency/utils"]=t()}(this,(()=>(()=>{"use strict";var e={544:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createNewElement=void 0,t.createNewElement=(e,t)=>{if("undefined"==typeof document)return;const r=document.createElement(e);return r.classList.add(t),r}},135:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delayPromise=void 0,t.delayPromise=(e=0)=>new Promise((t=>{setTimeout((()=>{t()}),e)}))},156:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.keysGenerator=t.delayPromise=t.matrixTransform=t.createNewElement=t.lerp=t.clamp=t.resize=t.raf=void 0;const o=n(r(883));t.raf=o.default;const i=n(r(481));t.resize=i.default;const a=r(328);Object.defineProperty(t,"clamp",{enumerable:!0,get:function(){return a.clamp}}),Object.defineProperty(t,"lerp",{enumerable:!0,get:function(){return a.lerp}});const s=r(544);Object.defineProperty(t,"createNewElement",{enumerable:!0,get:function(){return s.createNewElement}});const d=r(923);Object.defineProperty(t,"matrixTransform",{enumerable:!0,get:function(){return d.matrixTransform}});const l=r(135);Object.defineProperty(t,"delayPromise",{enumerable:!0,get:function(){return l.delayPromise}});const c=r(925);Object.defineProperty(t,"keysGenerator",{enumerable:!0,get:function(){return c.keysGenerator}});const u={raf:o.default,resize:i.default,clamp:a.clamp,lerp:a.lerp,createNewElement:s.createNewElement,matrixTransform:d.matrixTransform,delayPromise:l.delayPromise,keysGenerator:c.keysGenerator};t.default=u},925:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.keysGenerator=void 0,t.keysGenerator=e=>{let t="";for(let r=0;r<e;r++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return t}},328:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clamp=t.lerp=void 0,t.lerp=(e,t,r)=>e*(1-r)+t*r,t.clamp=(e,t,r)=>Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))},923:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.matrixTransform=void 0,t.matrixTransform=(e={})=>{var t,r,n,o,i,a,s;const d={scale:null!==(t=e.scale)&&void 0!==t?t:{x:1,y:1},move:null!==(r=e.move)&&void 0!==r?r:{x:0,y:0,z:0}},l=Object.keys(d).map((e=>"string"==typeof d[e]||"number"==typeof d[e]?{x:d[e],y:d[e],z:d[e]}:d[e]));return`matrix3d(\n    ${null!==(n=l[0].x)&&void 0!==n?n:1},0,0,0,\n    0,${null!==(o=l[0].y)&&void 0!==o?o:1},0,0,\n    0,0,1,0,\n    ${null!==(i=l[1].x)&&void 0!==i?i:0},${null!==(a=l[1].y)&&void 0!==a?a:0},${null!==(s=l[1].z)&&void 0!==s?s:0},1\n    )`}},883:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RAF=void 0;class r{constructor(){this.cbArray=[],this.animation=this.animation.bind(this),this.animation(0)}on(e){this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}animation(e){this.cbArray.forEach((t=>t(e))),window&&(this.raf=window.requestAnimationFrame(this.animation))}destroy(){window&&window.cancelAnimationFrame(this.raf),this.cbArray=[]}}t.RAF=r;const n=new r,o={on:e=>n.on(e),off:e=>n.off(e),destroy:()=>n.destroy()};t.default=o},481:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Resize=void 0;class r{constructor(){this.cbArray=[],this.init()}bounds(){["resizeHandler"].forEach((e=>{this[e]=this[e].bind(this)}))}init(){this.bounds(),"undefined"!=typeof window&&window.addEventListener("resize",this.resizeHandler)}resizeHandler(){this.cbArray.forEach((e=>e()))}on(e){e(),this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}match(e,t){let r;r=e.startsWith("<")?`(max-width: ${e.slice(1)})`:e.startsWith(">")?`(min-width: ${e.slice(1)})`:`(min-width: ${e})`;const n=window.matchMedia(r);n.matches&&t(),n.onchange=()=>{n.matches&&t()}}destroy(){"undefined"!=typeof window&&window.removeEventListener("resize",this.resizeHandler)}}t.Resize=r;const n=new r,o={on:e=>n.on(e),off:e=>n.off(e),match:(e,t)=>n.match(e,t),destroy:()=>n.destroy()};t.default=o}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(156)})()));
//# sourceMappingURL=index.js.map