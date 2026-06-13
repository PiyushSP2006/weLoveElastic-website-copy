import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitText from "gsap/SplitText.js"
import { BrowserView, MobileView, isMobile } from "react-device-detect";




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
            ease:"power3.inOut"
        }).from(".main-content",{
            opacity:0,
            yPercent:100,
            ease:"power3.inOut"
        },'-=1').from(lettersGreeting.chars,{
            opacity:0,
            yPercent:100,
            stagger:0.15,            
            ease:"power3.out"
        },"<"
        ).from(".navbar",{
            yPercent:10,
            opacity:0
        },"<")
    })

    console.log(isMobile)
    return(
        <div className="wrapper" style={{width:isMobile?"100vw":"100vw",
                height:isMobile?"66vh":"100vh"}}>
            <div className="loader" >
                <h1 >loading animation</h1>
            </div>
            <div className="main-content" style={{height:isMobile?"66vh":"100vh"}}>
                <h1 className="greetings" style={{fontSize:isMobile?"7rem":"42vw"}} >
                    hello
                </h1>
            </div>

           
            
        </div>
    )
}


// inside CSS
// .loader{
//     zindex=10000
//     opacity=1
// }
// .main {
//     opacity=1
// }

// using gsap 
// const tl=gsap.tl()
// tl.to("loader",{
//     opacity:0
//     ypercent:-100
//     duraiton:1
// }).from(MediaDeviceInfo,{
//     ypercent100
//     opacity0
// },"-=0.02").to("chars",{
//     stagger:0.1,
//     ypercent100
// },"<")

// style={{fontSize:isMobile?"20vw":"16px"}}