!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function r(e={},t={}){Object.keys(t).forEach((o=>{void 0===e[o]?e[o]=t[o]:n(t[o])&&n(e[o])&&Object.keys(t[o]).length>0&&r(e[o],t[o])}))}e.r(t),e.d(t,{clamp:()=>f,createNewElement:()=>b,delayPromise:()=>v,keysGenerator:()=>g,lerp:()=>u,matrixTransform:()=>p,raf:()=>m,resize:()=>d});const o={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}},i={document:o,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function a(){const e="undefined"!=typeof window?window:{};return r(e,i),e}const s=a(),c=new class{cbArray;constructor(){this.cbArray=[],this.animation=this.animation.bind(this),this.animation()}on(e){this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}animation(){this.cbArray.forEach((e=>e())),s.requestAnimationFrame(this.animation)}},m={on:e=>c.on(e),off:e=>c.off(e)},l=a(),h=new class{cbArray;constructor(){this.cbArray=[],this.init()}bounds(){["resizeHandler"].forEach((e=>{this[e]=this[e].bind(this)}))}init(){this.bounds(),void 0!==l&&l.addEventListener("resize",this.resizeHandler)}resizeHandler(){this.cbArray.forEach((e=>e()))}on(e){e(),this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}match(e,t){let n;n=e.startsWith("<")?`(max-width: ${e.slice(1)})`:e.startsWith(">")?`(min-width: ${e.slice(1)})`:`(min-width: ${e})`;const r=l.matchMedia(n);r.matches&&t(),r.onchange=()=>{r.matches&&t()}}destroy(){void 0!==l&&l.removeEventListener("resize",this.resizeHandler)}},d={on:e=>h.on(e),off:e=>h.off(e),match:(e,t)=>h.match(e,t),destroy:()=>h.destroy()},u=(e,t,n)=>e*(1-n)+t*n,f=(e,t,n)=>Math.max(Math.min(e,Math.max(t,n)),Math.min(t,n)),y=function(){const e="undefined"!=typeof document?document:{};return r(e,o),e}(),b=(e,t)=>{const n=y.createElement(e);return n.classList.add(t),n},p=(e={})=>{const t={scale:e.scale??{x:1,y:1},move:e.move??{x:0,y:0,z:0}},n=Object.keys(t).map((e=>"string"==typeof t[e]||"number"==typeof t[e]?{x:t[e],y:t[e],z:t[e]}:t[e]));return`matrix3d(\n    ${n[0].x??1},0,0,0,\n    0,${n[0].y??1},0,0,\n    0,0,1,0,\n    ${n[1].x??0},${n[1].y??0},${n[1].z??0},1\n    )`},v=(e=0)=>new Promise((t=>{setTimeout((()=>{t()}),e)})),g=e=>{let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length;for(let o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*r));return t};return t})()));