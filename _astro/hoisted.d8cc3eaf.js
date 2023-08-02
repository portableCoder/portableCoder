import{c as de,a as fe}from"./_commonjsHelpers.23102255.js";var ee={exports:{}};(function(te,he){(function(W,Q){te.exports=Q()})(typeof self<"u"?self:de,()=>(()=>{var W={75:function(s){(function(){var c,p,A,m,g,y;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(c()-g)/1e6},p=process.hrtime,m=(c=function(){var d;return 1e9*(d=p())[0]+d[1]})(),y=1e9*process.uptime(),g=m-y):Date.now?(s.exports=function(){return Date.now()-A},A=Date.now()):(s.exports=function(){return new Date().getTime()-A},A=new Date().getTime())}).call(this)},4087:(s,c,p)=>{for(var A=p(75),m=typeof window>"u"?p.g:window,g=["moz","webkit"],y="AnimationFrame",d=m["request"+y],C=m["cancel"+y]||m["cancelRequest"+y],O=0;!d&&O<g.length;O++)d=m[g[O]+"Request"+y],C=m[g[O]+"Cancel"+y]||m[g[O]+"CancelRequest"+y];if(!d||!C){var x=0,_=0,b=[];d=function(h){if(b.length===0){var T=A(),R=Math.max(0,16.666666666666668-(T-x));x=R+T,setTimeout(function(){var N=b.slice(0);b.length=0;for(var L=0;L<N.length;L++)if(!N[L].cancelled)try{N[L].callback(x)}catch(M){setTimeout(function(){throw M},0)}},Math.round(R))}return b.push({handle:++_,callback:h,cancelled:!1}),_},C=function(h){for(var T=0;T<b.length;T++)b[T].handle===h&&(b[T].cancelled=!0)}}s.exports=function(h){return d.call(m,h)},s.exports.cancel=function(){C.apply(m,arguments)},s.exports.polyfill=function(h){h||(h=m),h.requestAnimationFrame=d,h.cancelAnimationFrame=C}}},Q={};function w(s){var c=Q[s];if(c!==void 0)return c.exports;var p=Q[s]={exports:{}};return W[s].call(p.exports,p,p.exports,w),p.exports}w.n=s=>{var c=s&&s.__esModule?()=>s.default:()=>s;return w.d(c,{a:c}),c},w.d=(s,c)=>{for(var p in c)w.o(c,p)&&!w.o(s,p)&&Object.defineProperty(s,p,{enumerable:!0,get:c[p]})},w.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),w.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c);var z={};return(()=>{w.d(z,{default:()=>re});var s=w(4087),c=w.n(s);const p=function(o){return new RegExp(/<[a-z][\s\S]*>/i).test(o)},A=function(o,t){return Math.floor(Math.random()*(t-o+1))+o};var m="TYPE_CHARACTER",g="REMOVE_CHARACTER",y="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",C="PAUSE_FOR",O="CALL_FUNCTION",x="ADD_HTML_TAG_ELEMENT",_="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",h="CHANGE_CURSOR",T="PASTE_STRING",R="HTML_TAG";function N(o){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(o)}function L(o,t){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(S){return Object.getOwnPropertyDescriptor(o,S).enumerable})),a.push.apply(a,r)}return a}function M(o){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?L(Object(a),!0).forEach(function(r){u(o,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(a,r))})}return o}function D(o){return function(t){if(Array.isArray(t))return U(t)}(o)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(o)||function(t,a){if(t){if(typeof t=="string")return U(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(t,a):void 0}}(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function U(o,t){(t==null||t>o.length)&&(t=o.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=o[a];return r}function ne(o,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,J(r.key),r)}}function u(o,t,a){return(t=J(t))in o?Object.defineProperty(o,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[t]=a,o}function J(o){var t=function(a,r){if(N(a)!=="object"||a===null)return a;var S=a[Symbol.toPrimitive];if(S!==void 0){var e=S.call(a,"string");if(N(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}(o);return N(t)==="symbol"?t:String(t)}const re=function(){function o(r,S){var e=this;if(function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,o),u(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),u(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),u(this,"setupWrapperElement",function(){e.state.elements.container&&(e.state.elements.wrapper.className=e.options.wrapperClassName,e.state.elements.cursor.className=e.options.cursorClassName,e.state.elements.cursor.innerHTML=e.options.cursor,e.state.elements.container.innerHTML="",e.state.elements.container.appendChild(e.state.elements.wrapper),e.state.elements.container.appendChild(e.state.elements.cursor))}),u(this,"start",function(){return e.state.eventLoopPaused=!1,e.runEventLoop(),e}),u(this,"pause",function(){return e.state.eventLoopPaused=!0,e}),u(this,"stop",function(){return e.state.eventLoop&&((0,s.cancel)(e.state.eventLoop),e.state.eventLoop=null),e}),u(this,"pauseFor",function(n){return e.addEventToQueue(C,{ms:n}),e}),u(this,"typeOutAllStrings",function(){return typeof e.options.strings=="string"?(e.typeString(e.options.strings).pauseFor(e.options.pauseFor),e):(e.options.strings.forEach(function(n){e.typeString(n).pauseFor(e.options.pauseFor).deleteAll(e.options.deleteSpeed)}),e)}),u(this,"typeString",function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(p(n))return e.typeOutHTMLString(n,i);if(n){var f=(e.options||{}).stringSplitter,v=typeof f=="function"?f(n):n.split("");e.typeCharacters(v,i)}return e}),u(this,"pasteString",function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return p(n)?e.typeOutHTMLString(n,i,!0):(n&&e.addEventToQueue(T,{character:n,node:i}),e)}),u(this,"typeOutHTMLString",function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,f=arguments.length>2?arguments[2]:void 0,v=function(j){var k=document.createElement("div");return k.innerHTML=j,k.childNodes}(n);if(v.length>0)for(var l=0;l<v.length;l++){var E=v[l],P=E.innerHTML;E&&E.nodeType!==3?(E.innerHTML="",e.addEventToQueue(x,{node:E,parentNode:i}),f?e.pasteString(P,E):e.typeString(P,E)):E.textContent&&(f?e.pasteString(E.textContent,i):e.typeString(E.textContent,i))}return e}),u(this,"deleteAll",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return e.addEventToQueue(y,{speed:n}),e}),u(this,"changeDeleteSpeed",function(n){if(!n)throw new Error("Must provide new delete speed");return e.addEventToQueue(_,{speed:n}),e}),u(this,"changeDelay",function(n){if(!n)throw new Error("Must provide new delay");return e.addEventToQueue(b,{delay:n}),e}),u(this,"changeCursor",function(n){if(!n)throw new Error("Must provide new cursor");return e.addEventToQueue(h,{cursor:n}),e}),u(this,"deleteChars",function(n){if(!n)throw new Error("Must provide amount of characters to delete");for(var i=0;i<n;i++)e.addEventToQueue(g);return e}),u(this,"callFunction",function(n,i){if(!n||typeof n!="function")throw new Error("Callbak must be a function");return e.addEventToQueue(O,{cb:n,thisArg:i}),e}),u(this,"typeCharacters",function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(f){e.addEventToQueue(m,{character:f,node:i})}),e}),u(this,"removeCharacters",function(n){if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(){e.addEventToQueue(g)}),e}),u(this,"addEventToQueue",function(n,i){var f=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.addEventToStateProperty(n,i,f,"eventQueue")}),u(this,"addReverseCalledEvent",function(n,i){var f=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.options.loop?e.addEventToStateProperty(n,i,f,"reverseCalledEvents"):e}),u(this,"addEventToStateProperty",function(n,i){var f=arguments.length>2&&arguments[2]!==void 0&&arguments[2],v=arguments.length>3?arguments[3]:void 0,l={eventName:n,eventArgs:i||{}};return e.state[v]=f?[l].concat(D(e.state[v])):[].concat(D(e.state[v]),[l]),e}),u(this,"runEventLoop",function(){e.state.lastFrameTime||(e.state.lastFrameTime=Date.now());var n=Date.now(),i=n-e.state.lastFrameTime;if(!e.state.eventQueue.length){if(!e.options.loop)return;e.state.eventQueue=D(e.state.calledEvents),e.state.calledEvents=[],e.options=M({},e.state.initialOptions)}if(e.state.eventLoop=c()(e.runEventLoop),!e.state.eventLoopPaused){if(e.state.pauseUntil){if(n<e.state.pauseUntil)return;e.state.pauseUntil=null}var f,v=D(e.state.eventQueue),l=v.shift();if(!(i<=(f=l.eventName===d||l.eventName===g?e.options.deleteSpeed==="natural"?A(40,80):e.options.deleteSpeed:e.options.delay==="natural"?A(120,160):e.options.delay))){var E=l.eventName,P=l.eventArgs;switch(e.logInDevMode({currentEvent:l,state:e.state,delay:f}),E){case T:case m:var j=P.character,k=P.node,X=document.createTextNode(j),F=X;e.options.onCreateTextNode&&typeof e.options.onCreateTextNode=="function"&&(F=e.options.onCreateTextNode(j,X)),F&&(k?k.appendChild(F):e.state.elements.wrapper.appendChild(F)),e.state.visibleNodes=[].concat(D(e.state.visibleNodes),[{type:"TEXT_NODE",character:j,node:F}]);break;case g:v.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case C:var oe=l.eventArgs.ms;e.state.pauseUntil=Date.now()+parseInt(oe);break;case O:var $=l.eventArgs,ae=$.cb,se=$.thisArg;ae.call(se,{elements:e.state.elements});break;case x:var K=l.eventArgs,q=K.node,Y=K.parentNode;Y?Y.appendChild(q):e.state.elements.wrapper.appendChild(q),e.state.visibleNodes=[].concat(D(e.state.visibleNodes),[{type:R,node:q,parentNode:Y||e.state.elements.wrapper}]);break;case y:var ie=e.state.visibleNodes,G=P.speed,H=[];G&&H.push({eventName:_,eventArgs:{speed:G,temp:!0}});for(var Z=0,ue=ie.length;Z<ue;Z++)H.push({eventName:d,eventArgs:{removingCharacterNode:!1}});G&&H.push({eventName:_,eventArgs:{speed:e.options.deleteSpeed,temp:!0}}),v.unshift.apply(v,H);break;case d:var le=l.eventArgs.removingCharacterNode;if(e.state.visibleNodes.length){var V=e.state.visibleNodes.pop(),ce=V.type,I=V.node,pe=V.character;e.options.onRemoveNode&&typeof e.options.onRemoveNode=="function"&&e.options.onRemoveNode({node:I,character:pe}),I&&I.parentNode.removeChild(I),ce===R&&le&&v.unshift({eventName:d,eventArgs:{}})}break;case _:e.options.deleteSpeed=l.eventArgs.speed;break;case b:e.options.delay=l.eventArgs.delay;break;case h:e.options.cursor=l.eventArgs.cursor,e.state.elements.cursor.innerHTML=l.eventArgs.cursor}e.options.loop&&(l.eventName===d||l.eventArgs&&l.eventArgs.temp||(e.state.calledEvents=[].concat(D(e.state.calledEvents),[l]))),e.state.eventQueue=v,e.state.lastFrameTime=n}}}),r)if(typeof r=="string"){var B=document.querySelector(r);if(!B)throw new Error("Could not find container element");this.state.elements.container=B}else this.state.elements.container=r;S&&(this.options=M(M({},this.options),S)),this.state.initialOptions=M({},this.options),this.init()}var t,a;return t=o,(a=[{key:"init",value:function(){var r,S;this.setupWrapperElement(),this.addEventToQueue(h,{cursor:this.options.cursor},!0),this.addEventToQueue(y,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(r=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(S=document.createElement("style")).appendChild(document.createTextNode(r)),document.head.appendChild(S),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(r){this.options.devMode&&console.log(r)}}])&&ne(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),o}()})(),z.default})())})(ee);var ve=ee.exports;const me=fe(ve);new me("#typewriter",{strings:["Developer","Designer","Engineer"],autoStart:!0,loop:!0});