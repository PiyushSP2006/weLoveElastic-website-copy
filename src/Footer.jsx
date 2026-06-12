import { isMobile } from "react-device-detect"

export function Footer(props){
    return(
        <div className="footer">
            <span style={{color:"#695f53",marginTop:isMobile?"4vh":"3vh"}}>SUIVANT/<span style={{color:"#e7cfb1"}}>PROJECT</span></span>
            <ul style={{display:"flex",flexDirection:isMobile?"column":"row",justifyContent:"space-between",width:"inherit",marginTop:isMobile?"4vh":"3vh"}}>
                {links.map((item)=>{
                    return(
                        <li key={item.id}>{item.id!=1?<a href="#">{item.tag}</a>:`${item.tag}`}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const links=[
    {tag:"© 2024 wethinkelastic",id:1},
    {tag:" @Nos actus",id:2},
    {tag:"uncafe@wethinkelastic.com",id:3},
    {tag:"cookies",id:4},
    {tag:"Mentions légales",id:5}
]