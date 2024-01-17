import "./styles.css";

export default function NavBar(){
    return(
        <>
        <div className="bar">
        <div className="logo">
            <img src="src\pages\home\CSI_CU_LOGO-removebg-preview 1 2.png" alt="csi-logo" />
        </div>
            <div className="components">
                <ul>
                    <li><a href="...">Home</a></li>
                    <li><a href="...">About</a></li>
                    <li><a href="...">Team</a></li>
                    <li><a href="...">Events</a></li>
                </ul>
            </div>
            <div className="button">
                <button className="btn btn-primary">Join Now</button>
            </div>
        </div>
        </>
    ); 

    
}