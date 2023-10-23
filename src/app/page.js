import Image from 'next/legacy/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
      <main style={{height: "100%",backgroundColor:"#f5f5f5"}}>
            <header style={{display: 'flex', justifyContent: 'center'}}>
                <a style={{textAlign:"center"}} href='/'>
                    <img className="img-fluid position-relative top-0 start-50 translate-middle" src="./logo.png" style={{marginTop: '60px', maxWidth: '100%', height: 'auto'}}></img>
                </a>
            </header>

            <div style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>


                <div className="card divbutton" style={{marginLeft:"30px", marginRight:"30px", marginBottom: "15px", maxWidth: "100%", height: "260px", backgroundColor: 'white', textDecoration:"none", borderRadius:"20px", border:"none", color:"white", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.12)", display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <h2 className="position-absolute" style={{fontSize:"26px", color:"#1f1f1f", top:'15%', display: 'inline-block', left: '0', marginLeft:"35px"}}>🏫 나곡중학교</h2>
                        <div style={{borderRadius:"10px"}}>
                            <a className="position-absolute translate-middle-y title3" style={{top: "40%", fontSize:"14px", color:"#808080", display: 'inline-block', left: '0', marginLeft:"35px", textDecoration: "none"}} href='/'>실시간 학교 재학생 수</a>
                            <a className="position-absolute translate-middle-y" style={{top: "40%",fontSize:"22px", color:"#1f1f1f", display: 'inline-block', left: '0', marginLeft:"35px", marginTop:"26.5px", textDecoration: "none"}} href='/'>660명</a>
                        </div>

                        <div style={{borderRadius:"10px"}}>
                            <a className="position-absolute translate-middle-y title3" style={{top: "68%", fontSize:"14px", color:"#808080", display: 'inline-block', left: '0', marginLeft:"35px", textDecoration: "none"}} href='/'>실시간 학교 교직원 수</a>
                            <a className="position-absolute translate-middle-y" style={{top: "68%",fontSize:"22px", color:"#1f1f1f", display: 'inline-block', left: '0', marginLeft:"35px", marginTop:"26.5px", textDecoration: "none"}} href='/'>48명</a>
                        </div>

                </div>
                
                <div className="card divbutton" style={{marginLeft:"30px", marginRight:"30px", marginTop: "30px", marginBottom: "15px", maxWidth: "100%", height: "190px", backgroundColor: 'white', textDecoration:"none", borderRadius:"20px", border:"none", color:"white", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.12)", display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <h2 className="position-absolute" style={{fontSize:"26px", color:"#1f1f1f", top:'20%', display: 'inline-block', left: '0', marginLeft:"35px"}}>🎉 투표하기</h2>
                    <div style={{borderRadius:"10px"}}>


                        <a className="position-absolute translate-middle-y title3" style={{top: "55%", fontSize:"14px", color:"#808080", display: 'inline-block', left: '0', marginLeft:"35px", textDecoration: "none"}} href='/vote'>당신의 가수를 선택하세요!</a>
                        <a className="position-absolute translate-middle-y" style={{top: "55%",fontSize:"22px", color:"#1f1f1f", display: 'inline-block', left: '0', marginLeft:"35px", marginTop:"26.5px", textDecoration: "none"}} href='/vote'>복면가왕 투표 →</a>
                    </div>

                    

                </div>

                <div className="card" style={{marginLeft:"30px", marginRight:"30px", marginTop: "30px", maxWidth: "100%", height: "20%", backgroundColor: 'white', textDecoration:"none", borderRadius:"20px", border:"none", color:"white", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.12)"}}>
                    <h2 className="position-absolute" style={{fontSize:"26px", color:"#1f1f1f", display: 'inline-block', left: '0', top:'15%', marginLeft:"35px"}}>🎃 축제내용</h2>
                    <img src="/nagok.png" alt="Nagok" style={{maxWidth: 'auto', height: 'auto', margin: '10%', marginTop: '30%', borderRadius: '20px'}}/>
                </div>
                
                <h4 style={{fontSize:"15px", marginTop:"10%"}}>made by 20714 백승훈, 20515 양선우</h4>
            </div>
        </main>
      )}