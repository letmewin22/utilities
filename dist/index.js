!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["@emotion-agency/utils"]=t():e["@emotion-agency/utils"]=t()}(this,(()=>(()=>{"use strict";var e={735:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createNewElement=void 0;const o=(0,n(317).getDocument)();t.createNewElement=(e,t)=>{const n=o.createElement(e);return n.classList.add(t),n}},458:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delayPromise=void 0,t.delayPromise=(e=0)=>new Promise((t=>{setTimeout((()=>{t()}),e)}))},152:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.keysGenerator=void 0,t.keysGenerator=e=>{let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length;for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*o));return t}},490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clamp=t.lerp=void 0,t.lerp=(e,t,n)=>e*(1-n)+t*n,t.clamp=(e,t,n)=>Math.max(Math.min(e,Math.max(t,n)),Math.min(t,n))},496:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.matrixTransform=void 0,t.matrixTransform=(e={})=>{var t,n,o,r,i,s,a;const c={scale:null!==(t=e.scale)&&void 0!==t?t:{x:1,y:1},move:null!==(n=e.move)&&void 0!==n?n:{x:0,y:0,z:0}},u=Object.keys(c).map((e=>"string"==typeof c[e]||"number"==typeof c[e]?{x:c[e],y:c[e],z:c[e]}:c[e]));return`matrix3d(\n    ${null!==(o=u[0].x)&&void 0!==o?o:1},0,0,0,\n    0,${null!==(r=u[0].y)&&void 0!==r?r:1},0,0,\n    0,0,1,0,\n    ${null!==(i=u[1].x)&&void 0!==i?i:0},${null!==(s=u[1].y)&&void 0!==s?s:0},${null!==(a=u[1].z)&&void 0!==a?a:0},1\n    )`}},976:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.raf=t.RAF=void 0;const o=(0,n(317).getWindow)();class r{constructor(){this.cbArray=[],this.animation=this.animation.bind(this),this.animation(0)}on(e){this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}animation(e){this.cbArray.forEach((t=>t(e))),o.requestAnimationFrame(this.animation)}}t.RAF=r;const i=new r;t.raf={on:e=>i.on(e),off:e=>i.off(e)}},917:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resize=t.Resize=void 0;const o=(0,n(317).getWindow)();class r{constructor(){this.cbArray=[],this.init()}bounds(){["resizeHandler"].forEach((e=>{this[e]=this[e].bind(this)}))}init(){this.bounds(),void 0!==o&&o.addEventListener("resize",this.resizeHandler)}resizeHandler(){this.cbArray.forEach((e=>e()))}on(e){e(),this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}match(e,t){let n;n=e.startsWith("<")?`(max-width: ${e.slice(1)})`:e.startsWith(">")?`(min-width: ${e.slice(1)})`:`(min-width: ${e})`;const r=o.matchMedia(n);r.matches&&t(),r.onchange=()=>{r.matches&&t()}}destroy(){void 0!==o&&o.removeEventListener("resize",this.resizeHandler)}}t.Resize=r;const i=new r;t.resize={on:e=>i.on(e),off:e=>i.off(e),match:(e,t)=>i.match(e,t),destroy:()=>i.destroy()}},169:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ssrDocument=t.getDocument=void 0;const r=o(n(997)),i={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};t.ssrDocument=i,t.getDocument=function(){const e="undefined"!=typeof document?document:{};return(0,r.default)(e,i),e}},997:(e,t)=>{function n(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t={},o={}){Object.keys(o).forEach((r=>{void 0===t[r]?t[r]=o[r]:n(o[r])&&n(t[r])&&Object.keys(o[r]).length>0&&e(t[r],o[r])}))}},317:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.extend=t.ssrWindow=t.getWindow=t.ssrDocument=t.getDocument=void 0;const r=n(169);Object.defineProperty(t,"getDocument",{enumerable:!0,get:function(){return r.getDocument}}),Object.defineProperty(t,"ssrDocument",{enumerable:!0,get:function(){return r.ssrDocument}});const i=n(868);Object.defineProperty(t,"getWindow",{enumerable:!0,get:function(){return i.getWindow}}),Object.defineProperty(t,"ssrWindow",{enumerable:!0,get:function(){return i.ssrWindow}});const s=o(n(997));t.extend=s.default},868:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ssrWindow=t.getWindow=void 0;const r=o(n(997)),i={document:n(169).ssrDocument,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};t.ssrWindow=i,t.getWindow=function(){const e="undefined"!=typeof window?window:{};return(0,r.default)(e,i),e}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0});const t=n(976),r=n(917),i=n(490),s=n(735),a=n(496),c=n(458),u=n(152),d={raf:t.raf,resize:r.resize,clamp:i.clamp,lerp:i.lerp,createNewElement:s.createNewElement,matrixTransform:a.matrixTransform,delayPromise:c.delayPromise,keysGenerator:u.keysGenerator};e.default=d})(),o})()));
//# sourceMappingURL=index.js.map