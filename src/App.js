
import './App.css';
import Foods from './Foods';
import FoodsForm from './FoodsForm'
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
      <Foods foods={foods}/>
      <FoodsForm newFood={newFood}/>


    </div>
  );
 
}
//these render in the app component
  //render a data container component and adding new data form component
  //data container will render the data cards
  //render an about component
  //name the c
  
  
export default App;
