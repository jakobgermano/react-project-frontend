import React from 'react'
import {useState} from 'react'




function FoodsForm({newFood}) {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setName('')
        fetch(`http://localhost:3000/foods`, {
            method: "POST",
           headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name})
        })
       .then((res) => res.json())
       .then((food) => newFood(food))
      
}


    function handleChange(e) {
        setName(e.target.value)

    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <label>Name: 
                    <input type="text" value={name} onChange={handleChange}/>
                </label>
                <input type="submit" value="Add new food"/>
               
            </form>
        </div>
    )
}


export default FoodsForm