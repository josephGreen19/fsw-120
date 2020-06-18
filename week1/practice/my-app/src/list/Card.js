import React from 'react';
import './card-styles.css'
const Card = (props) => {

    let completedClass = ''

  

   
        

    return (
        <div className = {completedClass}>
            <table>
                <thead>
                    <th>Place</th>
                    <th>Price</th>
                    <th>Time To Go</th>
                </thead>
                <tbody>
                     <tr>
                         <td className ="firsth1">{props.place}</td>
                        <td className = "firstli">{props.price}</td>
                        <td className = "nextli">{props.timeToGo}</td>
                    </tr>
               </tbody>
         
           
               
           
           
        </table>
        </div>
    );
}

export default Card