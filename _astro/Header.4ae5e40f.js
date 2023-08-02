import{u as c,j as e,a as d,b as h,s as f,c as p}from"./jsx-runtime.0a5ddef3.js";import{r as l}from"./index.13fb2395.js";import{r as g}from"./index.7887b15d.js";import"./_commonjsHelpers.23102255.js";const x=(t=768)=>{const[s,n]=l.useState(!1);return l.useEffect(()=>{const i=()=>{const r=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(b=>b.test(navigator.userAgent)),m=window.innerWidth<=t;n(r||m)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[t]),s};var u=g.GenIcon,w=function(s){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(s)},j=function(s){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M80 160h352M80 256h352M80 352h352"}}]})(s)};const v=()=>{const t=x(),[s,n]=l.useState(!1),i=c({opacity:s?1:0,x:s?0:100});function o(){n(!1)}return e.jsxs("nav",{role:"menu",className:"flex justify-between   gap-x-4 text-xs md:text-2xl items-center",children:[t&&e.jsx("button",{className:"text-xl",onClick:()=>{n(r=>!r)},children:e.jsx(j,{})}),!t&&e.jsx("div",{className:"flex gap-x-4",children:e.jsx(a,{onClick:()=>{}})}),t&&e.jsxs(d.div,{style:{...i,x:i.x.to(r=>`${r}vw`)},className:"fixed text-xl top-0 left-0 z-50 w-full h-full flex flex-col gap-y-4  bg-zinc-900 bg-opacity-70 backdrop-blur-2xl p-4",children:[e.jsx("div",{className:"text-4xl",children:"Menu"}),e.jsx(a,{onClick:o}),e.jsxs("button",{className:"gap-x-2 items-center flex",onClick:o,children:[e.jsx(w,{className:"text-center"})," ",e.jsx("span",{children:" Close "})]})]})]})},a=({onClick:t})=>{const s=h(f);return e.jsxs(e.Fragment,{children:[p.map((n,i)=>e.jsxs("a",{onClick:t,href:`#${n}`,className:"capitalize w-min flex flex-col ",children:[n,e.jsx("div",{className:`
          w-3/4
          ${s.section===n?"border-b-2 border-indigo-400":"border-b-0 border-white"} transition-all duration-200`})]},i)),e.jsxs("a",{target:"_blank",onClick:t,href:"https://github.com/portableCoder",children:[" ","Github"]}),e.jsxs("a",{target:"_blank",onClick:t,href:"https://portableCoder.github.io/portableThoughts",children:[" ","Blog"]})]})};function M(t){return t.deltaY<0}const S=()=>{const[t,s]=l.useState(!1),n=c({y:t?-100:0});l.useEffect(()=>{const o=r=>{M(r)?s(!1):s(!0)};return window.addEventListener("wheel",o),()=>{window.removeEventListener("wheel",o)}},[]);const i=x();return e.jsxs(d.header,{style:i?{}:n,className:"w-full bg-zinc-900 bg-opacity-50 backdrop-blur-xl sticky top-0 left-0 text-base font-mono  items-center p-4  flex justify-between z-50",children:[e.jsx("div",{className:"text-lg md:text-2xl font",children:e.jsxs("div",{className:"mx-2",children:[" ","portableCoder",e.jsx("span",{className:"animate-pulse duration-100 md:text-2xl text-xs",children:"█"})]})}),e.jsx(v,{})]})};export{S as default};
