import { isMobile } from "react-device-detect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ExperienceSection(){
    useGSAP(()=>{
        gsap.to(".ExperienceSection div h1",{
            xPercent:-80,
            scrollTrigger:{
                trigger:".ExperienceSection",
                pin:true,
                scrub:true,
                start:"top top",
                ease:2

            }
        })
    })


    return(
        <div className="ExperienceSection">
            <div>
                <h1 style={{fontSize:isMobile?"33vh":"80vh"}}>EXPERITISE!</h1>
            </div>
        </div>
    )
}