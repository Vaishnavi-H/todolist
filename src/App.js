import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Greet from './Components/Greet'

function App() {
  const[id, setId]=useState("banil");
return (
    <div>
      <h3>Probs in js</h3>
      
      <Greet fog={id} />
       <button onClick = {() => {setId("Sarath")}}>update</button>
    
    </div>
  );

}

export default App;
