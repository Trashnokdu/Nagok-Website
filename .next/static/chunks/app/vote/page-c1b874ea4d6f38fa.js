(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65],{3698:function(e,t,o){Promise.resolve().then(o.bind(o,19))},19:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Home}});var n=o(7437),i=o(2265),s=o(3388);function Home(){let[e,t]=(0,i.useState)({choice1:0,choice2:0}),[o,r]=(0,i.useState)(!1),[a,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1),[p,u]=(0,i.useState)(""),[x,f]=(0,i.useState)(""),[h,m]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let e=(0,s.ZP)("https://api.dreamscape-interactive.com:3000",{cors:{origin:"*"}});return m(e),e.on("connect",()=>{console.log("connection server")}),e.on("Isvoting",e=>{!1==e&&(window.location.href="/end")}),e.on("Voteopen",e=>{!1==e&&(window.location.href="/loading")}),e.on("Votename",e=>{u(e)}),e.on("Votenumber",e=>{f(e),localStorage.getItem("votetest".concat(e))&&(window.location.href="/sucess")}),e.on("redirect",()=>{window.location.href="/end"}),e.on("redirectsu",()=>{window.location.href="/sucess"}),()=>{e.disconnect()}},[]),(0,i.useEffect)(()=>{let e=setInterval(()=>{h&&h.emit("Ifvoting")},3e3);return()=>clearInterval(e)},[h]),(0,n.jsxs)("main",{children:[(0,n.jsx)("header",{children:(0,n.jsx)("a",{style:{textAlign:"center"},href:"/",children:(0,n.jsx)("img",{className:"img-fluid position-absolute top-0 start-50 translate-middle",src:"./logo.png",style:{marginTop:"40px",maxWidth:"100%",height:"auto"}})})}),(0,n.jsxs)("div",{className:"position-absolute top-50 start-50 translate-middle",style:{textAlign:"center",width:"100%"},children:[(0,n.jsx)("p",{style:{fontSize:"1.4rem"},children:"당신의 가수는 누구인가요?"}),(0,n.jsx)("p",{style:{fontSize:"3.5rem"},children:p}),(0,n.jsx)("button",{className:"card divbutton",style:{marginLeft:"30px",marginRight:"30px",marginTop:"45px",marginBottom:"15px",width:"85%",height:"110px",backgroundColor:"white",textDecoration:"none",borderRadius:"20px",border:"none",color:"white",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.12)",display:"flex",alignItems:"center",justifyContent:"center"},onClick:function(e){if(localStorage.getItem("votetest".concat(x))){alert("이미 투표하셨습니다"),window.location.href="/sucess";return}localStorage.setItem("votetest".concat(x),"true"),h.emit("vote"),window.location.href="/sucess"},children:(0,n.jsxs)("div",{style:{borderRadius:"10px",height:"150px"},children:[(0,n.jsx)("div",{className:"position-absolute translate-middle-y title3",style:{top:"35%",fontSize:"14px",color:"#808080",display:"inline-block",left:"0",marginLeft:"35px",textDecoration:"none"},children:"너무 마음에 들었어요!!!!"}),(0,n.jsx)("div",{className:"position-absolute translate-middle-y",style:{top:"35%",fontSize:"22px",color:"#1f1f1f",display:"inline-block",left:"0",marginLeft:"35px",marginTop:"26.5px",textDecoration:"none"},children:"\uD83D\uDC4D 좋아요"})]})}),(0,n.jsx)("button",{className:"card divbutton",style:{marginLeft:"30px",marginRight:"30px",marginTop:"25px",marginBottom:"15px",width:"85%",height:"110px",backgroundColor:"white",textDecoration:"none",borderRadius:"20px",border:"none",color:"white",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.12)",display:"flex",alignItems:"center",justifyContent:"center"},onClick:function(){if(localStorage.getItem("votetest".concat(x))){alert("이미 투표하셨습니다"),window.location.href="/sucess";return}localStorage.setItem("votetest".concat(x),"true"),window.location.href="/sucess"},children:(0,n.jsxs)("div",{style:{borderRadius:"10px",height:"150px"},children:[(0,n.jsx)("div",{className:"position-absolute translate-middle-y title3",style:{top:"35%",fontSize:"14px",color:"#808080",display:"inline-block",left:"0",marginLeft:"35px",textDecoration:"none"},children:"다음에 투표할래요!"}),(0,n.jsx)("div",{className:"position-absolute translate-middle-y",style:{top:"35%",fontSize:"22px",color:"#1f1f1f",display:"inline-block",left:"0",marginLeft:"35px",marginTop:"26.5px",textDecoration:"none"},children:"\uD83D\uDD01 스킵하기"})]})})]})]})}o(4433),o(8117)}},function(e){e.O(0,[428,396,648,971,472,744],function(){return e(e.s=3698)}),_N_E=e.O()}]);