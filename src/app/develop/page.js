"use client"
import Image from 'next/legacy/image';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function addheart(){
    console.log('1234')
    fetch('https://api.dreamscape-interactive.com:3000/addheart');
}

export default function Home() {
    return (
      <main>
            <header>
                <a style={{textAlign:"center"}} href='/'>
                    <img className="img-fluid position-absolute top-0 start-50 translate-middle" src="./logo.png" style={{marginTop: '40px', maxWidth: '100%', height: 'auto'}}></img>
                </a>
            </header>

            <div className="position-absolute top-50 start-50 translate-middle" style={{textAlign:"center", marginBottom:"20px", width:"80%"}}>
                <button style={{background: "none", border: 'none'}} onClick={addheart}>
                <h1 style={{fontSize:"40vw", marginTop:"80px"}}>❤️</h1>
                </button>
                <h1 style={{fontSize:"8vw", marginTop:"70px"}}>기대 이모티콘 보내기</h1>
                <h1 style={{fontSize:"5vw", marginTop:"14px"}}>위 하트를 누르시는 만큼 개발자들에게<br/> 유저들의 마음이 전송됩니다</h1>
            </div>
        </main>
      )}