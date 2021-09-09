import logo from './logo.svg';
import './App.css';
import Foods from './Foods';
import FoodsForm from './FoodsForm'

function App() {
  return (
    <div className="App">
      <Foods/>
      <FoodsForm/>

      
    </div>
  );
  //these render in the app component
  //render a data container component and adding new data form component
  //data container will render the data cards
  //render an about component
  //name the components like toycards, toys and toy form
}

export default App;
