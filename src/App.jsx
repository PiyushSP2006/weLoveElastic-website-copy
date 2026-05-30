import IntroSection from "../src/IntroSection"
import {ScrollTrigger,SplitText} from "gsap/all"
import gsap from "gsap"
import NavBar from "../src/NavBar"
gsap.registerPlugin(ScrollTrigger,SplitText)

export default function App(props){
    return(
    <>        
        <NavBar/>
        <IntroSection/>
    </>

    )
}