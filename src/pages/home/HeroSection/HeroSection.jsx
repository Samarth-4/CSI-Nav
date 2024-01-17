import NavBar from "../Navbar/NavBar";
import "./style.css";
export default function HeroSection(){
    return(
        <>
        <div className="section">
            <div className="nav">
                 <NavBar />
            </div>
            <div className="content">
                <div className="l1">BEST TECHNICAL SOCIETY AT</div>
                <div className="l2"><h1>CHANDIGARH UNIVERSITY</h1></div>
                <div className="l3">TOGETHER WE CODE, CREATE AND COLLABORATE</div>
            </div>
            <div className="buttons">
                <button className="btn1 join bt-primary">Join Now</button>
                <button className="btn1 btn-primary know">Know More</button>
            </div>

        </div>
        </>
    );
}