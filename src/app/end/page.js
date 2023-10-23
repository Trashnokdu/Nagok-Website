"use client"
import { useEffect, useState } from 'react';
import io from "socket.io-client";
import Image from 'next/legacy/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socket = io("https://api.dreamscape-interactive.com:3000",{
      cors: { origin: '*' }
    });
    setSocket(socket);
    socket.on("connect", () => {
      console.log("connection server");
      socket.emit('Ifvoting');
    });
    socket.on('endevent', (data) => {
      if (data == true){
        window.location.href = '/theend'
    }
  });
    socket.on("Isvoting", (data) => {
      if (data == true){
          window.location.href = '/vote'
      }
    });
    socket.on("Voteopen", (data) => {
      if (data == false){
          window.location.href = '/loading'
      }
    });
   return () => {
       socket.disconnect();
   };
  }, []);
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
            <p className='animate-bounce' style={{fontSize:"1.4rem", marginTop:"25px"}}>투표가 종료되었습니다</p>
            <p style={{fontSize:"2.8rem"}}>결과 집계 중입니다</p>
            <div style={{display: 'flex', justifyContent: 'center', overflow: 'hidden'}}>
            <svg class="loading -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{width:"80px", height:"auto", marginTop:"60px"}}>
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path class="opacity-75" fill="black" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            </div>
        </div>
        </main>
      )}