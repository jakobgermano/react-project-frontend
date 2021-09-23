
import './App.css';
import Foods from './Foods';
import FoodsForm from './FoodsForm'
import Nav from './Nav'
import Home from './Home'
import {Route, Switch } from "react-router-dom"
import {useState, useEffect} from 'react'

function App() {

 const [foods, setFoods] = useState([])
 
 useEffect(() => {
  fetch(`http://localhost:3000/foods`)
  .then(res => res.json())
  .then(foodsData => setFoods(foodsData))
 }, [])

 function newFood(newFood) {
   setFoods([...foods, newFood])

 }

  
 
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="foods">
      <Foods foods={foods}/>
     </Route>
     <Route exact path="/foods/new">
      <FoodsForm newFood={newFood}/>
      </Route>
      <Route>
        <Home exact path="/"/>
      </Route>
      </Switch>


    </div>
  );
 
}
//these render in the app component
  //render a data container component and adding new data form component
  //data container will render the data cards
  //render an about component
  //name the c
  
  
export default App;
