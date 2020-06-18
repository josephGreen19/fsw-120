import React from 'react';
import Card from './Card';


let VacationSpots = [

    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
  
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
   },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
   },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
   },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring" 
    } 
  ]

  const mappedVacations = VacationSpots.map( card =>{
      return(
        <Card/>
      )
  })

      return (
        <div>
            <h1> Vacation Spots</h1>
            {mappedVacations}
        </div>
    )
}



export default VacationSpots