!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@emotion-agency/utils"]=t():e["@emotion-agency/utils"]=t()}(this,(()=>(()=>{"use strict";var e={735:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createNewElement=void 0;const n=(0,r(628).getDocument)();t.createNewElement=(e,t)=>{const r=n.createElement(e);return r.classList.add(t),r}},458:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delayPromise=void 0,t.delayPromise=(e=0)=>new Promise((t=>{setTimeout((()=>{t()}),e)}))},152:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.keysGenerator=void 0,t.keysGenerator=e=>{let t="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length;for(let o=0;o<e;o++)t+=r.charAt(Math.floor(Math.random()*n));return t}},490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clamp=t.lerp=void 0,t.lerp=(e,t,r)=>e*(1-r)+t*r,t.clamp=(e,t,r)=>Math.max(Math.min(e,Math.max(t,r)),Math.min(t,r))},496:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.matrixTransform=void 0,t.matrixTransform=(e={})=>{var t,r,n,o,i,a,s;const c={scale:null!==(t=e.scale)&&void 0!==t?t:{x:1,y:1},move:null!==(r=e.move)&&void 0!==r?r:{x:0,y:0,z:0}},l=Object.keys(c).map((e=>"string"==typeof c[e]||"number"==typeof c[e]?{x:c[e],y:c[e],z:c[e]}:c[e]));return`matrix3d(\n    ${null!==(n=l[0].x)&&void 0!==n?n:1},0,0,0,\n    0,${null!==(o=l[0].y)&&void 0!==o?o:1},0,0,\n    0,0,1,0,\n    ${null!==(i=l[1].x)&&void 0!==i?i:0},${null!==(a=l[1].y)&&void 0!==a?a:0},${null!==(s=l[1].z)&&void 0!==s?s:0},1\n    )`}},976:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.raf=t.RAF=void 0;const n=(0,r(628).getWindow)();class o{constructor(){this.cbArray=[],this.animation=this.animation.bind(this),this.animation()}on(e){this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}animation(){this.cbArray.forEach((e=>e())),n.requestAnimationFrame(this.animation)}}t.RAF=o;const i=new o;t.raf={on:e=>i.on(e),off:e=>i.off(e)}},917:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resize=t.Resize=void 0;const n=(0,r(628).getWindow)();class o{constructor(){this.cbArray=[],this.init()}bounds(){["resizeHandler"].forEach((e=>{this[e]=this[e].bind(this)}))}init(){this.bounds(),void 0!==n&&n.addEventListener("resize",this.resizeHandler)}resizeHandler(){this.cbArray.forEach((e=>e()))}on(e){e(),this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}match(e,t){let r;r=e.startsWith("<")?`(max-width: ${e.slice(1)})`:e.startsWith(">")?`(min-width: ${e.slice(1)})`:`(min-width: ${e})`;const o=n.matchMedia(r);o.matches&&t(),o.onchange=()=>{o.matches&&t()}}destroy(){void 0!==n&&n.removeEventListener("resize",this.resizeHandler)}}t.Resize=o;const i=new o;t.resize={on:e=>i.on(e),off:e=>i.off(e),match:(e,t)=>i.match(e,t),destroy:()=>i.destroy()}},628:(e,t,r)=>{function n(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function o(e={},t={}){Object.keys(t).forEach((r=>{void 0===e[r]?e[r]=t[r]:n(t[r])&&n(e[r])&&Object.keys(t[r]).length>0&&o(e[r],t[r])}))}r.r(t),r.d(t,{extend:()=>o,getDocument:()=>a,getWindow:()=>c,ssrDocument:()=>i,ssrWindow:()=>s});const i={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return o(e,i),e}const s={document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function c(){const e="undefined"!=typeof window?window:{};return o(e,s),e}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.keysGenerator=e.delayPromise=e.matrixTransform=e.createNewElement=e.lerp=e.clamp=e.resize=e.raf=void 0;const t=r(976);Object.defineProperty(e,"raf",{enumerable:!0,get:function(){return t.raf}});const o=r(917);Object.defineProperty(e,"resize",{enumerable:!0,get:function(){return o.resize}});const i=r(490);Object.defineProperty(e,"clamp",{enumerable:!0,get:function(){return i.clamp}}),Object.defineProperty(e,"lerp",{enumerable:!0,get:function(){return i.lerp}});const a=r(735);Object.defineProperty(e,"createNewElement",{enumerable:!0,get:function(){return a.createNewElement}});const s=r(496);Object.defineProperty(e,"matrixTransform",{enumerable:!0,get:function(){return s.matrixTransform}});const c=r(458);Object.defineProperty(e,"delayPromise",{enumerable:!0,get:function(){return c.delayPromise}});const l=r(152);Object.defineProperty(e,"keysGenerator",{enumerable:!0,get:function(){return l.keysGenerator}})})(),n})()));