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
        if (localStorage.getItem(`vote${data}`)) {
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
        if (localStorage.getItem(`vote${number}`)) {
          alert('이미 투표하셨습니다');
          window.location.href = '/sucess'   
          return;
        }
        localStorage.setItem(`vote${number}`, 'true');
        socket.emit('vote');
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
            <p style={{fontSize:"4rem"}}>{name}</p>
            <button className="card" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "30%", marginTop: "70px", marginBottom: "15px", width: "40%", height: "150px", backgroundColor: 'black'}} onClick={vote}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{height: "70px", color: 'white', marginTop: "16px"}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>

                        <h2 style={{color: 'white', marginTop: "10px", fontSize: "22px"}}>투표하기</h2>
            </button>
        </div>
        </main>
      )}