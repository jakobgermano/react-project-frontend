import React from 'react'



function FoodCard({food, deleteFood}) {
    
  
   
function deleteClick() {
  fetch(`http://localhost:3000/foods/${food.id}`, {
      method: "DELETE",
    })
     .then((res) => res.json())
    .then(() => {deleteFood(food)
    })
}
   
        

    return (
        <div>
            <h3>{food.name}</h3>
            <button className="delete-button" onClick={deleteClick}>Delete</button> 
        </div>
    )
}

export default FoodCard