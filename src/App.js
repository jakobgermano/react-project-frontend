
import './App.css';
import Foods from './Foods';
import FoodsForm from './FoodsForm'
import {useState} from 'react'

function App() {

  const [foods, setFoods] = useState([])

  fetch(`http://localhost:3000/Foods`)
  .then(res => res.json())
  .then(data => console.log(data))
 
  return (
    <div className="App">
      <Foods/>
      <FoodsForm/>


    </div>
  );
 
}
//these render in the app component
  //render a data container component and adding new data form component
  //data container will render the data cards
  //render an about component
  //name the c
  
  
export default App;
