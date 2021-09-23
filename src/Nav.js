import React from 'react'
import{NavLink} from 'react-router-dom'


function Nav(){
    return(
        <div>
             <NavLink style={{marginRight: "10px"}} to="/"> Home</NavLink> 
             <NavLink style={{marginRight: "10px"}} to="/foods">All My Foods</NavLink>
             <NavLink style={{ marginRight: "10px"}} to="/foods/new">Add Some Foods</NavLink>
             
               
        </div>
    )
}


export default Nav