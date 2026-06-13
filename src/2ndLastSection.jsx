import { useGSAP } from "@gsap/react"
import { gsap } from "gsap/gsap-core"
import { SplitText } from "gsap/all"

export default function SecondLastSection(){
    useGSAP(()=>{
        // const split=new SplitText(".second-last-section span",{
        //     type:'lines'
        // })
        gsap.from(".second-last-section span",{
             opacity:0,
            yPercent:100,
            stagger:0.15,
            duration:2,            
            ease:"power3.out",
            scrollTrigger:{
                trigger:".second-last-section",
                start:"top 30%",
               
            }
        })
    })


    return(
        <div className="second-last-section">
            <div>
                <span>
                    You have a beautiful<br/>
                    project? let's talk about it<br/>
                    around one <br/>
                    <span  className="text-part-of-second-last-section" style={{display:"inline-block"}}>
                        Good coffee
                    </span>
                </span>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnc5enZ4dDVpOWIxNzV1bXkzcWxzbGc4YTk5Y25obmI4bnM3ejZ5eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jS2UBiJNF1O8k5UIog/giphy.gif" autoPlay/>
            </div>
        </div>
    )
}