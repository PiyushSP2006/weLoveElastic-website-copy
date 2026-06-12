import { isMobile } from "react-device-detect";

export default function ExperienceSection(){

    return(
        <div className="ExperienceSection">
            <div>
                <h1 style={{fontSize:isMobile?"33vh":"80vh"}}>EXPERIENCE</h1>
            </div>
        </div>
    )
}