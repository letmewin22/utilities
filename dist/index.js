!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("main",[],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(()=>(()=>{var e={735:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(875),t);void 0!==a&&(e.exports=a)}else n=[o,t,o(628)],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNewElement=void 0;const o=(0,e("ssr-window").getDocument)();t.createNewElement=(e,t)=>{const r=o.createElement(e);return r.classList.add(t),r}}))},458:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(875),t);void 0!==a&&(e.exports=a)}else n=[o,t],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delayPromise=void 0,t.delayPromise=(e=0)=>new Promise((t=>{setTimeout((()=>{t()}),e)}))}))},607:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(875),t);void 0!==a&&(e.exports=a)}else n=[o,t,o(976),o(917),o(490),o(735),o(496),o(458),o(152)],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.keysGenerator=t.delayPromise=t.matrixTransform=t.createNewElement=t.lerp=t.clamp=t.resize=t.raf=void 0;const o=e("./raf/raf");Object.defineProperty(t,"raf",{enumerable:!0,get:function(){return o.raf}});const r=e("./resize/resize");Object.defineProperty(t,"resize",{enumerable:!0,get:function(){return r.resize}});const n=e("./math");Object.defineProperty(t,"clamp",{enumerable:!0,get:function(){return n.clamp}}),Object.defineProperty(t,"lerp",{enumerable:!0,get:function(){return n.lerp}});const i=e("./createNewElement");Object.defineProperty(t,"createNewElement",{enumerable:!0,get:function(){return i.createNewElement}});const s=e("./matrixTransform");Object.defineProperty(t,"matrixTransform",{enumerable:!0,get:function(){return s.matrixTransform}});const a=e("./delay");Object.defineProperty(t,"delayPromise",{enumerable:!0,get:function(){return a.delayPromise}});const c=e("./keysGenerator");Object.defineProperty(t,"keysGenerator",{enumerable:!0,get:function(){return c.keysGenerator}})}))},152:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(875),t);void 0!==a&&(e.exports=a)}else n=[o,t],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.keysGenerator=void 0,t.keysGenerator=e=>{let t="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=o.length;for(let n=0;n<e;n++)t+=o.charAt(Math.floor(Math.random()*r));return t}}))},490:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(875),t);void 0!==a&&(e.exports=a)}else n=[o,t],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clamp=t.lerp=void 0,t.lerp=(e,t,o)=>e*(1-o)+t*o,t.clamp=(e,t,o)=>Math.max(Math.min(e,Math.max(t,o)),Math.min(t,o))}))},496:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(875),t);void 0!==a&&(e.exports=a)}else n=[o,t],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matrixTransform=void 0,t.matrixTransform=(e={})=>{var t,o,r,n,i,s,a;const c={scale:null!==(t=e.scale)&&void 0!==t?t:{x:1,y:1},move:null!==(o=e.move)&&void 0!==o?o:{x:0,y:0,z:0}},u=Object.keys(c).map((e=>"string"==typeof c[e]||"number"==typeof c[e]?{x:c[e],y:c[e],z:c[e]}:c[e]));return`matrix3d(\n    ${null!==(r=u[0].x)&&void 0!==r?r:1},0,0,0,\n    0,${null!==(n=u[0].y)&&void 0!==n?n:1},0,0,\n    0,0,1,0,\n    ${null!==(i=u[1].x)&&void 0!==i?i:0},${null!==(s=u[1].y)&&void 0!==s?s:0},${null!==(a=u[1].z)&&void 0!==a?a:0},1\n    )`}}))},976:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(528),t);void 0!==a&&(e.exports=a)}else n=[o,t,o(628)],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.raf=t.RAF=void 0;const o=(0,e("ssr-window").getWindow)();class r{constructor(){this.cbArray=[],this.animation=this.animation.bind(this),this.animation(0)}on(e){this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}animation(e){this.cbArray.forEach((t=>t(e))),o.requestAnimationFrame(this.animation)}}t.RAF=r;const n=new r;t.raf={on:e=>n.on(e),off:e=>n.off(e)}}))},917:(e,t,o)=>{var r,n,i;!function(s){if("object"==typeof e.exports){var a=s(o(529),t);void 0!==a&&(e.exports=a)}else n=[o,t,o(628)],void 0===(i="function"==typeof(r=s)?r.apply(t,n):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resize=t.Resize=void 0;const o=(0,e("ssr-window").getWindow)();class r{constructor(){this.cbArray=[],this.init()}bounds(){["resizeHandler"].forEach((e=>{this[e]=this[e].bind(this)}))}init(){this.bounds(),void 0!==o&&o.addEventListener("resize",this.resizeHandler)}resizeHandler(){this.cbArray.forEach((e=>e()))}on(e){e(),this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}match(e,t){let r;r=e.startsWith("<")?`(max-width: ${e.slice(1)})`:e.startsWith(">")?`(min-width: ${e.slice(1)})`:`(min-width: ${e})`;const n=o.matchMedia(r);n.matches&&t(),n.onchange=()=>{n.matches&&t()}}destroy(){void 0!==o&&o.removeEventListener("resize",this.resizeHandler)}}t.Resize=r;const n=new r;t.resize={on:e=>n.on(e),off:e=>n.off(e),match:(e,t)=>n.match(e,t),destroy:()=>n.destroy()}}))},528:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=528,e.exports=t},529:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=529,e.exports=t},875:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=875,e.exports=t},628:(e,t,o)=>{"use strict";function r(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function n(e={},t={}){Object.keys(t).forEach((o=>{void 0===e[o]?e[o]=t[o]:r(t[o])&&r(e[o])&&Object.keys(t[o]).length>0&&n(e[o],t[o])}))}o.r(t),o.d(t,{extend:()=>n,getDocument:()=>s,getWindow:()=>c,ssrDocument:()=>i,ssrWindow:()=>a});const i={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function s(){const e="undefined"!=typeof document?document:{};return n(e,i),e}const a={document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function c(){const e="undefined"!=typeof window?window:{};return n(e,a),e}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}return o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(607)})()));