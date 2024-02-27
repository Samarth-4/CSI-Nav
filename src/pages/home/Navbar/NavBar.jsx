// import "./styles.css";
// import { useRef } from "react";


// export default function NavBar(){

//     return(
//         <>
//         <div className="bar">
//         <div className="logo">
//             <img src=".\Navbar\CSI_CU_LOGO-removebg-preview 1 2.png" alt="csi-logo" />
//         </div>
//             <div className="components">
//                 <ul>
//                     <li><a href="...">Home</a></li>
//                     <li><a href="...">About</a></li>
//                     <li><a href="...">Team</a></li>
//                     <li><a href="...">Events</a></li>
//                 </ul>
//             </div>
//             <div className="button">
//                 <button className="btn btn-primary">Join Now</button>
//             </div>
//         </div>
//         </>
//     );   
// }


// import Hamburger from 'hamburger-react';
import "./styles.css";
import { useState } from "react"; // Import useState
import logo from "../../../images/logo.png";
export default function NavBar() {
    // State for managing navbar visibility on small screens
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bar">
                <div className="logo">
                    <img src={logo} alt="csi-logo" className="l1"/>
                </div>
                <div className={`components ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
                <div className="button">
                    <button className="btn btn-primary">Join Now</button>
                </div>
                <div className="line" onClick={() => setIsOpen(!isOpen)}></div> 
            </div>
        </>
    );
}
