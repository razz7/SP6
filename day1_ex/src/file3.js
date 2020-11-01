import React from 'react';
import persons from "./file2";

export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

  export function WelcomePerson(props) {
    return <h2>firstName: {props.person.firstName} 
    lastName: {props.person.lastName} email: {props.person.email}</h2>;
  }

  
  
  export function MultiWelcome(props) {  
    return (
      <div>
        <WelcomePerson person={props.persons[0]}/>
        <WelcomePerson person={props.persons[1]}/>
        <WelcomePerson person={props.persons[2]}/>
        
      </div>
    );
  }


  
 