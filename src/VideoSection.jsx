import { isMobile } from "react-device-detect"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

export default function VideoSection(props){
    useGSAP(()=>{

       gsap.to(".video-section video",{
        yPercent:isMobile?-100:0,
        scale:2,
        yPercent:-3,
        scrollTrigger:{
            trigger:".video-section",
            
            start:"top 80%",
            ease:1.3,
            scrub:2
        }
       })
})

    return(
        <div className="video-section"style={{
                height:isMobile?"33vh":"100vh"} }>
            <video style={{width:"inherit",height:'inherit'}}
            src="https://wethinkelastic.com/assets/videos/video-start.mp4#t=0.1"  autoPlay
    muted
    loop
    playsInline></video>
        </div>
    )
}