import { isMobile } from "react-device-detect"

export default function VideoSection(props){
    return(
        <div className="video-section"style={{
                height:isMobile?"33vh":"100vh"} }>
            <video style={{width:"inherit",height:'inherit'}}
            src="https://wethinkelastic.com/assets/videos/video-start.mp4#t=0.1"></video>
        </div>
    )
}