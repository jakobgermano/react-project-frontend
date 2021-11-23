
import './App.css';
import Foods from './Foods';
import FoodsForm from './FoodsForm';
import Nav from './Nav';
import Home from './Home';
import {Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react';

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

 function deleteFood(deleteFood) {
 const updatedFood = foods.filter((food) => food.id !== deleteFood.id)
 setFoods(updatedFood)
 }

// function updatedFood(updatedFood) {
//   const updatedFood = food.map((food) => food.id === updatedFood.id ? updatedFood : food)
// }
 
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/foods">
      <Foods foods={foods}
       deleteFood={deleteFood}
      // updatedFood={updatedFood}
      />
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

  
  
export default App;
