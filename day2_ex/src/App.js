import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Joke} from "./joke";
import ListDemo from './ListDemo';


function ButtonWithState(props) {
  
  const [count, setCount] = useState(props.passValue);

  useEffect(() => {
    localStorage.setItem("count", count);
    
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + props.passValue2)}>
        Increment
      </button>
      <button onClick={() => setCount(count - props.passValue2)}>
        Decrement
      </button>
      {props.name}
    </div>
  );
}







function App() {
  return (
    <div className="App">
         <ButtonWithState passValue={1} passValue2={1} />
         <p><Joke/></p>
         <p><ListDemo/></p>
    </div>
  );
}

export default App;
