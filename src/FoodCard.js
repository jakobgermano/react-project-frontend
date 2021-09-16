import React from 'react'

function FoodCard({food}) {
        

    return (
        <div>
            <h3>{food.name}</h3>
            <h4>Likes: {food.likes}</h4>

        </div>
    )
}

export default FoodCard