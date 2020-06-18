import React from "react"
import "./header-styles.css"
const header = (props) => {





    return(
        <div className ="header" >
            <div className="navbar">
                <a href= "contact">CONTACT</a>
                <a href= "samplepost">SAMPLE POST</a>
                <a href= "about">ABOUT</a>
                <a href= "home">HOME</a>
            <div>
                <h1>Clean Blog</h1>
                <h6>A Blog Theme by Start Bootstrap</h6>
            </div>
            </div>

        </div>
    )
}




export default header

