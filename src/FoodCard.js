import React from 'react'

function FoodCard({food}) {

    return (
        <div>
            <h3>{food.name}</h3>
            <h4>likes: {food.likes}</h4>
            

        </div>
    )
}

export default FoodCard