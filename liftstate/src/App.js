import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import LiftState from "./liftState"

function App() {
  const [persons, setPersons] = useState([]);
  return (
    <div className="App">
      <LiftState persons={persons} setPersons={setPersons}/>
    </div>
  );
}

export default App;
