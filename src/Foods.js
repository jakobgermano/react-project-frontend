import React from 'react'
import FoodCard from './FoodCard'

function Foods({foods}) {
   
    const allFoods = foods.map(food => <FoodCard key={food.id} food={food}  />)

        

   

    return(
        <div>
            <h1>My Fav foods</h1>
            {allFoods}
            
            
        </div>
    )
}

//render foodcards 
//should handle state as well
//this is container 

export default Foods;