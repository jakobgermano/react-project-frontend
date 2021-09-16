import React from 'react'



function FoodsForm() {
    return(
        <div>
            <h3>Add new food</h3>
            <form>
                <label>Name: </label>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
//should handle state

export default FoodsForm