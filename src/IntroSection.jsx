import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitText from "gsap/SplitText.js"
export default function IntroSection(props){
    useGSAP(()=>{
        const loaderTl=gsap.timeline()
        let lettersGreeting=new SplitText(".greetings",{
            type:"chars"
        })

        // let spanText=new SplitText(,{
        //     type:"lines"
        // })
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


    return(
        <div className="hello-section">
            <div className="loader">
                <h1>loading animation</h1>
            </div>
            <div className="main-content">
                <h1 className="greetings">
                    hello
                    <span>
                        WE ARE THE TEAM
                    </span>
                    <span>
                        WE THINK ELASTIC
                    </span>
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