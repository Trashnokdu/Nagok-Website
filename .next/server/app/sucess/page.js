(()=>{var e={};e.id=492,e.ids=[492],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},231:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>l});var r=s(7096),o=s(6132),i=s(7284),n=s.n(i),a=s(2564),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);s.d(t,c);let l=["",{children:["sucess",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8722)),"/home/nokdu/votesite/src/app/sucess/page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,4348)),"/home/nokdu/votesite/src/app/sucess/layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4553)),"/home/nokdu/votesite/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/nokdu/votesite/src/app/sucess/page.js"],d="/sucess/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/sucess/page",pathname:"/sucess",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},9766:(e,t,s)=>{Promise.resolve().then(s.bind(s,3692))},5303:()=>{},3692:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Home});var r=s(784),o=s(9885),i=s(7369);function Home(){let[e,t]=(0,o.useState)({choice1:0,choice2:0}),[s,n]=(0,o.useState)(!1),[a,c]=(0,o.useState)(""),[l,u]=(0,o.useState)(""),[d,p]=(0,o.useState)(!1),[x,m]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let e=(0,i.ZP)("https://api.dreamscape-interactive.com:3000",{cors:{origin:"*"}});return m(e),e.on("connect",()=>{console.log("connection server")}),e.on("endevent",e=>{!0==e&&(window.location.href="/theend")}),e.on("Isvoting",e=>{!1==e&&(window.location.href="/end")}),e.on("Votename",e=>{c(e)}),e.on("redirect",()=>{window.location.href="/end"}),e.on("redirectvo",()=>{window.location.href="/vote"}),e.on("Voteopen",e=>{!1==e&&(window.location.href="/loading")}),e.on("Votenumber",e=>{u(e),localStorage.getItem(`vote${e}`)||(window.location.href="/vote")}),()=>{e.disconnect()}},[]),(0,o.useEffect)(()=>{let e=setInterval(()=>{x&&x.emit("Ifvoting")},3e3);return()=>clearInterval(e)},[x]),(0,r.jsxs)("main",{children:[r.jsx("header",{children:r.jsx("a",{style:{textAlign:"center"},href:"/",children:r.jsx("img",{className:"img-fluid position-absolute top-0 start-50 translate-middle",src:"./logo.png",style:{marginTop:"40px",maxWidth:"100%",height:"auto"}})})}),(0,r.jsxs)("div",{className:"position-absolute top-50 start-50 translate-middle",style:{textAlign:"center",width:"100%"},children:[r.jsx("p",{className:"animate-bounce",style:{fontSize:"1.4rem",marginTop:"25px"},children:"투표가 완료되었습니다"}),(0,r.jsxs)("p",{style:{fontSize:"2.8rem"},children:["다음 투표를 위해",r.jsx("br",{})," 대기 중 입니다"]}),r.jsx("div",{style:{display:"flex",justifyContent:"center",overflow:"hidden"},children:(0,r.jsxs)("svg",{class:"loading -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{width:"80px",height:"auto",marginTop:"60px"},children:[r.jsx("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.jsx("path",{class:"opacity-75",fill:"black",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})]})]})}s(2930),s(9973)},4348:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>RootLayout,metadata:()=>o});var r=s(4656);s(5023);let o={title:"나곡중학교 축제 공식 웹사이트",description:""};function RootLayout({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{children:e})})}},8722:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>c});var r=s(5153);let o=(0,r.createProxy)(String.raw`/home/nokdu/votesite/src/app/sucess/page.js`),{__esModule:i,$$typeof:n}=o,a=o.default,c=a},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"256x255",url:t+""}]}}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[472,451,343,89],()=>__webpack_exec__(231));module.exports=s})();