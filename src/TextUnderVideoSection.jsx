import { isMobile } from "react-device-detect";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/all";

export default function TextUnderVideoSection(props){
    useGSAP(()=>{
        // const textTimeLine=gsap.timeline({
        //     scrollTrigger:{
        //         trigger:".text-section-1",
        //         start:"top 50%",
        //     }
        // })
        // // let split=new SplitText(".text-section-1",{
        // //     type:"lines"
        // // })split.lines
        gsap.from(".text-section-1 h1 ,.text-section-1 span",{
            opacity:0,
            yPercent:100,
            stagger:0.15,            
            ease:"power3.out",
            scrollTrigger:{
                trigger:".text-section-1",
                start:"top 50%",
            }
        })
    })


    return(
        
<div className="text-section-1" style={{height:"max-content",}}>
    {isMobile?
        <>
        <h1 style={{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center"}}><span>we</span> LET'S HELP<br/> the brands<br/>More <br/> quickly</h1>
        </>
    :<>
            <h1><span>we</span>LET'S HELP</h1>
            <h1>the brands</h1>
            <h1 style={{textAlign:"right"}}><span>has</span> GROW</h1>
            <h1>More</h1>
            <div style={{display:"flex",justifyContent:"space-between",textAlign:"center",height:"max-content",width:"inherit",overflowY:"hidden"}}>
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


