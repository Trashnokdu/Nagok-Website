"use client"
import Image from 'next/legacy/image';
import io from "socket.io-client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const [socket, setSocket] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const socket = io("https://api.dreamscape-interactive.com:3000",{
          cors: { origin: '*' }
        });
        setSocket(socket);
        socket.on("connect", () => {
          console.log("connection server");
        });
        socket.on("Voteopen", (data) => {
          if (data == true){
              window.location.href = '/vote'
          }
        });
       return () => {
           socket.disconnect();
       };
      }, []);
    return (
      <main>
            <header>
                <a style={{textAlign:"center"}} href='/'>
                    <img className="img-fluid position-absolute top-0 start-50 translate-middle" src="./logo.png" style={{marginTop: '40px', maxWidth: '100%', height: 'auto'}}></img>
                </a>
            </header>

            <div style={{textAlign:"center", marginTop:"60px", marginBottom:"20px"}}>
                <h1 style={{fontSize:"40vw", marginTop:"80px"}}>👋</h1>
                <h1 style={{fontSize:"8vw", marginTop:"70px"}}>10월 27일, 우리 그때 만나요!</h1>
                <h1 style={{fontSize:"5vw", marginTop:"14px"}}>복면가왕 | 2023.10.27</h1>
                <div style={{textAlign:"center"}}>
                <a className="card" style={{marginLeft:"12px", maxWidth:"95%", marginTop: "80px", backgroundColor: '#FFD359', color: '#484848', height:"70px", width:"auto"}} href='/vote'>
                <p className="position-absolute top-50 start-50 translate-middle" style={{fontSize:"21px"}}>투표방법 미리보기 →</p>
                </a>
                <a className="card" style={{marginLeft:"12px", maxWidth:"95%", marginTop: "15px", backgroundColor: '#484848', color: '#FFD359', height:"70px", width:"auto"}} href='/develop'>
                <p className="position-absolute top-50 start-50 translate-middle" style={{fontSize:"19px"}}>기대 이모티콘 남기기 →</p>
                </a>
                </div>
            </div>
        </main>
      )}