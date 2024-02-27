import NavBar from "../Navbar/NavBar";
import "./style.css";
export default function HeroSection(){
    return(
        <>
        <div className="section">
            <div className="nav">
                 <NavBar />
            </div> 
            </div>
            
            <div className="main">
            <div className="sec1">
                <div className="content">
                    <h1>our <span>team</span></h1>
                    <p>
                        We at csi believe in team family etc etc etc and to do one and because to foster and that's why i like to say and i the all.
                    </p>
                </div>
                <div className="grid">
                    <div className="pic1">
                        <img className="imag1" src="..." alt="..." /> 
                        <h2>Radhika Rungta</h2>
                        <p>President</p>                   
                    </div>
                   
                    <div className="pic2">
                        <img className="imag1" src="..." alt="..." />
                    <h2>Tanmay Toshniwal</h2>
                    <p>Vice-President</p>
                    </div>
                   
                </div>
                
            </div>
            <div className="sec2">
                <h1>our <span>secretories</span></h1>
                <class className="isec">
                    <div className="per1">
                    <img className="imag2" src="..." alt="..." />
                    <h2>Anant Tripathi</h2>
                    <p>Position</p>
                    </div>

                    <div className="per1">
                    <img className="imag2" src="..." alt="..." />
                    <h2>Anant Tripathi</h2>
                    <p>Position</p>
                    </div>
                    
                    <div className="per1">
                    <img className="imag2" src="..." alt="..." />
                    <h2>Anant Tripathi</h2>
                    <p>Position</p>
                    </div>
                    <div className="per1">
                    <img className="imag2" src="..." alt="..." />
                    <h2>Anant Tripathi</h2>
                    <p>Position</p>
                    </div>
                </class>
            </div>
            <div className="sec3">
                <div className="head">
                    <h1>Technical Team</h1>
                </div>
                <div className="team">
                    <div className="chair">
                        <img src="" alt="" />
                            <h2>Sakhi</h2>
                            <p>Technical Chair</p>
                    </div>
                    <div className="cord">
                        <div className="c1">
                            <img src="" alt="" />
                            <div className="np">
                            <h3>Samarth</h3>
                            <p>Coordinator</p>
                            </div>
                        </div>
                        <div className="c1">
                            <img src="" alt="" />
                            <class className="np">
                            <h3>Samarth</h3>
                            <p>Coordinator</p>
                            </class>
                        </div>
                        <div className="c1">
                            <img src="" alt="" />
                            <div className="np">
                            <h3>Samarth</h3>
                            <p>Coordinator</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
        </>
    );
}