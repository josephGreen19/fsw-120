import React from 'react';
import './BoxSetup-styles.css'
const BoxSetup = (props) => {

    let finishedBox = ''

   return (
        <div className = {finishedBox} style={{border: "5px solid black"}}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{props.information}</p>
            <p style={{backgroundColor:"#00FFFF"}}>{props.backgroundColor}</p>
            
          
        </div>
    );
}

export default BoxSetup