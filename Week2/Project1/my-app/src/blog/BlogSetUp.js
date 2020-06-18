import React from "react"
import "./blogSetUp-styles.css"

const BlogSetUp = (props) => {





    return(
        
        <div className= "body" >
                <h2 className="wide">{props.title}</h2>
                <p className="subtitle">{props.subTitle}</p>
                <p className= "line"> posted by<i> <b style={{color:"black"}}>{props.author}</b></i> on {props.date}</p>
        </div>
       
            
        
        
    )
}




export default BlogSetUp