import React from 'react'



function FoodCard({food}) {
    
  
   
// function deleteClick() {
//     fetch(`http://localhost:3000/foods/${food.id}`, {
//         method: "DELETE",

//     })
//     .then((res) => res.json())
//     .then(() => {deletefood(food)
//     })
// }
   
        

    return (
        <div>
            <h3>{food.name}</h3>
           {/* <button className="delete-button" onClick={deleteClick}>Delete</button> */}
        </div>
    )
}

export default FoodCard