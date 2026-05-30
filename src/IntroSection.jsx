import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitText from "gsap/SplitText.js"
export default function IntroSection(props){
    useGSAP(()=>{
        const loaderTl=gsap.timeline()
        let lettersGreeting=new SplitText(".greetings",{
            type:"chars"
        })
        loaderTl.to(".loader",{
            opacity:0,
            yPercent:-100,
            duration:3,
            delay:1,
            display:"none",
            ease:"power3.inOut"
        }).from(".main-content",{
            opacity:0,
            yPercent:100,
            ease:"power3.inOut"
        },'-=0.2').from(lettersGreeting.chars,{
            yPercent:100,
            stagger:0.1,
            ease:"power3.out"
        },"<"

        )
    })


    return(
        <div>
            <div className="loader">
                <h1>loading animation</h1>
            </div>
            <div className="main-content">
                <h1 className="greetings">hello</h1>
            </div>
        </div>
    )
}