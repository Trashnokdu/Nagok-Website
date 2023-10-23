"use client"
import { useEffect, useState } from 'react';
import io from "socket.io-client";
import Image from 'next/legacy/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [results, setResults] = useState({ choice1: 0, choice2: 0 });
    const [isVoting, setIsVoting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isEnd, setEnd] = useState(false);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [socket, setSocket] = useState(null);
    useEffect(() => {
      const socket = io("https://api.dreamscape-interactive.com:3000",{
        cors: { origin: '*' }
      });

      setSocket(socket);
      socket.on("connect", () => {
        console.log("connection server");
      });
      socket.on("Isvoting", (data) => {
        if (data == false){
            window.location.href = '/end'
        }
      });
      socket.on("Voteopen", (data) => {
        if (data == false){
            window.location.href = '/loading'
        }
      });
      socket.on("Votename", (data) => {
        setName(data);
      });
      socket.on("Votenumber", (data) => {
        setNumber(data);
        if (localStorage.getItem(`votetest${data}`)) {
          window.location.href = '/sucess'
        }
      });
      socket.on("redirect", () => {
        window.location.href = '/end'
      });
      socket.on("redirectsu", () => {
        window.location.href = '/sucess'
      });
      
     return () => {
         socket.disconnect();
     };
    }, []);
    function vote(choice) {
        if (localStorage.getItem(`votetest${number}`)) {
          alert('이미 투표하셨습니다');
          window.location.href = '/sucess'   
          return;
        }
        localStorage.setItem(`votetest${number}`, 'true');
        socket.emit('vote');
        window.location.href = '/sucess'        
      }  
    function skip(){
      if (localStorage.getItem(`votetest${number}`)) {
        alert('이미 투표하셨습니다');
        window.location.href = '/sucess'   
        return;
      }
      localStorage.setItem(`votetest${number}`, 'true');
      window.location.href = '/sucess'
    } 
   useEffect(() => {
     const intervalId = setInterval(() => {
       if(socket) { 
         socket.emit('Ifvoting');
         
       }
     }, 3000);

     return () => clearInterval(intervalId);
  }, [socket]);   
    return (
      <main>
            <header>
                <a style={{textAlign:"center"}} href='/'>
                    <img className="img-fluid position-absolute top-0 start-50 translate-middle" src="./logo.png" style={{marginTop: '40px', maxWidth: '100%', height: 'auto'}}></img>
                </a>
            </header>
        <div className="position-absolute top-50 start-50 translate-middle" style={{textAlign:"center", width:"100%"}}>
            <p style={{fontSize:"1.4rem"}}>당신의 가수는 누구인가요?</p>
            <p style={{fontSize:"3.5rem"}}>{name}</p>
            <button className="card divbutton" style={{marginLeft:"30px", marginRight:"30px", marginTop: "45px", marginBottom: "15px", width: "85%", height: "110px", backgroundColor: 'white', textDecoration:"none", borderRadius:"20px", border:"none", color:"white", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.12)", display:'flex', alignItems:'center', justifyContent:'center'}} onClick={vote}>
                    <div style={{borderRadius:"10px", height: "150px"}}>
                        <div className="position-absolute translate-middle-y title3" style={{top: "35%", fontSize:"14px", color:"#808080", display: 'inline-block', left: '0', marginLeft:"35px", textDecoration: "none"}}>너무 마음에 들었어요!!!!</div>
                        <div className="position-absolute translate-middle-y" style={{top: "35%",fontSize:"22px", color:"#1f1f1f", display: 'inline-block', left: '0', marginLeft:"35px", marginTop:"26.5px", textDecoration: "none"}}>👍 좋아요</div>
                    </div>
            </button>
            <button className="card divbutton" style={{marginLeft:"30px", marginRight:"30px", marginTop: "25px", marginBottom: "15px", width: "85%", height: "110px", backgroundColor: 'white', textDecoration:"none", borderRadius:"20px", border:"none", color:"white", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.12)", display:'flex', alignItems:'center', justifyContent:'center'}} onClick={skip}>
                    <div style={{borderRadius:"10px", height: "150px"}}>
                        <div className="position-absolute translate-middle-y title3" style={{top: "35%", fontSize:"14px", color:"#808080", display: 'inline-block', left: '0', marginLeft:"35px", textDecoration: "none"}}>다음에 투표할래요!</div>
                        <div className="position-absolute translate-middle-y" style={{top: "35%",fontSize:"22px", color:"#1f1f1f", display: 'inline-block', left: '0', marginLeft:"35px", marginTop:"26.5px", textDecoration: "none"}}>🔁 스킵하기</div>
                    </div>
            </button>
        </div>
        </main>
      )}