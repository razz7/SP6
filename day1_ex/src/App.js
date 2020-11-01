import React from 'react';
import './App.css';
import upper, {text1, text2, text3} from "./file1";
import person, {males, females, persons} from "./file2";
import {Welcome, MultiWelcome} from './file3';


function App() {
	const { firstName, email } = person;
	const all = [...males, ...females];
	console.log(all);
	const all2 = [...males, 'Kurt', 'Helle', ...females, 'Tina'];
	console.log(all2);
  return (
      
	<div>
		<h2>Ex1</h2>
		<p>{upper("please uppercase me")}</p>
	   	<p>{text1}</p>
	   	<p>{text2}</p>
	   	<p>{text3}</p>
		<h3>Ex2</h3>
        <p>{firstName} {email}</p>
        <h2>Ex3</h2>
		<Welcome name="Rasmus"></Welcome>
		<MultiWelcome persons={persons} />
		

	</div>

 
       
  );
}

export default App;
