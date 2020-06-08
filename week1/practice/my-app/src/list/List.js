import React from 'react';
import Card from './Card';

const List = () => {

   

    return (
        <div>
            <h1> Weekend To-Do List</h1>
            <input type='checkbox'></input> 
            <Card title= 'Garbage'
                  description='Take out the trash'
                  isComplete='false'
            />
             <input type='checkbox' id='check' onClick="toggleDone()"></input> 
            <Card title='Mow'
                  description='Mow around the house and cabin'
                  isComplete='false'
             />
              <input type='checkbox'></input> 
            <Card title= 'Trim the Hedges'
                  description='Trim up any bushes that need it'
                  isComplete='false'
             />
              <input type='checkbox'></input> 
            <Card title= ' Deck'
                  description='Clean and powerwash the deck'
                  isComplete='false'
             />
              <input type='checkbox'></input> 
            <Card title= 'Weed wack' 
                  description='Weedeat around house'
                  isComplete='false'
            />
             <input type='checkbox'></input> 
            <Card title= 'Miscellaneous'
                  description='Take a nap'
                  isComplete='true'
            />
          
        </div>
    );
}

export default List