import { isMobile } from "react-device-detect"


export default function ShowCaseSection(props){


    return(
        <div className="showcase-section" >
           <div className="flexbox-container" style={isMobile?{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}:{display:"grid"}}
           >
                

                {items.map((item)=>(
                <div key={item.id} style={{
                    padding:"5% 5% 5% 5%",
                    gridColumn:item.gridClm,
                    gridRow:item.gridRow,
                    // gridRowStart:item.gridRowStart
                      
                }
                }>
                    {item.thumnailType=="image"?<img src={item.thumnail} style={{width:"99.9%"}}/>:<video style={{width:"99.9%"}}  autoPlay
    muted
    loop
    playsInline src={item.thumnail}/>}
                    
                    <h1 style={{textAlign:"left"}}>{item.h1}</h1>
                    <p>{item.P}</p>
                </div>
                ))}
           </div>
        </div>
    )
}

const items=[
    {
        id:1,
        thumnailType:"video",
        thumnail:"/assets/thumnail-IEC.mp4",
        h1:"HEC PARIS IEC",
        P:"Branding , Digital , Strategy",
        gridClm:"span 5",
        gridRow:"span 1"
    }
    ,{
        id:2,
        thumnailType:"image",
        thumnail:"https://wethinkelastic.com/assets/images/thumbnail-white-coffee-b1aada7092b251dc.webp",
        h1:"WHITE COFFEE",
        P:"Branding , Strategy",
        gridClm:"span 3",
        gridRow:"span 1"
    },{
        id:3,
        thumnailType:"video",
        thumnail:"https://wethinkelastic.com/assets/videos/thumnail-beev.mp4#t=0.1",
        h1:"BEEV",
        P:"Branding , Digital , Strategy",
        gridClm:"span 4",
        gridRow:"span 1",
        gridRowStart:'3'
    },{
        id:4,
        thumnailType:"image",
        thumnail:"https://wethinkelastic.com/assets/images/thumbnail-peugeot-ac01e927d1befcd7.webp",
        h1:"PEUGOET",
        P:"Branding",
        gridClm:"span 4",
        gridRow:"span 1",
    },
    {   id:5,
        thumnailType:"image",
        thumnail:"https://wethinkelastic.com/assets/images/thumbnail-kreme-47f2f7370631b92f.webp",
        h1:"KREME",
        P:"Branding, Strategy",
        gridClm:"span 8",
        gridRow:"span 2",
    }
]
