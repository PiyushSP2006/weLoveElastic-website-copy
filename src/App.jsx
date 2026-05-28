import IntroSection from "../src/IntroSection"
import {ScrollTrigger,SplitText} from "gsap/all"
gsap.registerPlugin(ScrollTrigger,SplitText)

export default function App(props){
    return(
        <IntroSection/>
    )
}