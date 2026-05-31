import { isMobile } from "react-device-detect"

export default function NavBar(props){
    return(
        <nav className="navbar" style={{width:isMobile?"100vw":"100vw"}}>
            <h1 className="navbar-title" >
                WE <br/>THINK<br/>
                Elastic
            </h1>
            {/* CONVERT THESE TO NAVLINKS TO FINISH THE WEBSITE COMPLETELY */}
            <ul className="navbar-list">
                <li>projects</li>
                <li>Expertise</li>
                <li>The Team</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}