import { isMobile } from "react-device-detect";

export default function TextUnderVideoSection(props){
    return(
        
<div className="text-section-1" style={{height:isMobile?"33vh":"100vh",}}>
    {isMobile?
        <>
        <h1 style={{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center"}}><span>we</span> LET'S HELP<br/> the brands<br/>More <br/> quickly</h1>
        </>
    :<>
            <h1><span>we</span>LET'S HELP</h1>
            <h1>the brands</h1>
            <h1 style={{textAlign:"right"}}><span>has</span> GROW</h1>
            <h1>More</h1>
            <div style={{display:"flex",justifyContent:"space-between",textAlign:"center"}}>
            <h1>quickly</h1>
            <span className="highlighted-text" >
                thanks to Storytelling<br/>
                impactful  an identity<br/>
                strong visual  interfaces<br/>
                ultra-fluid digital <br/>
            </span>
            </div>
            </>
        }
</div>
        
    )
}


