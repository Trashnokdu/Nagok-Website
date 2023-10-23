import Image from 'next/legacy/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
      <main>
            <header>
                <a style={{textAlign:"center"}} href='/'>
                    <img className="img-fluid position-absolute top-0 start-50 translate-middle" src="./logo.png" style={{marginTop: '40px', maxWidth: '100%', height: 'auto'}}></img>
                </a>
            </header>

            <div style={{textAlign:"center", marginTop:"60px", marginBottom:"20px"}}>
                <h1 style={{fontSize:"40vw", marginTop:"80px"}}>🎊</h1>
                <h1 style={{fontSize:"8vw", marginTop:"70px"}}>축제 수고하셨습니다</h1>
                <h1 style={{fontSize:"5vw", marginTop:"14px"}}>내년에 다시 만날 수 있기를 기원합니다</h1>
                <div style={{textAlign:"center"}}>
                </div>
            </div>
        </main>
      )}