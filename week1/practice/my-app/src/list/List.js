import React from 'react';
import Card from './Card';

const List = () => {

      let vacationSpots = [
          

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

      const mappedCards = vacationSpots.map( spots =>{
            return(
                   <Card
                   place={spots.place}
                   price={spots.price}
                   timeToGo={spots.timeToGo}
                   />
            )        
      })

     

    return (
        <div>
            <h1> Vacation Spots</h1>
           
                {mappedCards}
          
        </div>
    );
}

export default List