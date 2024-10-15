import React from 'react';
import './App.css';
import Card from './components/card';
import {Car, Garage} from './components/card2';
import ClassCom from './components/ClassCom';
function App(){
  {
    return (
      <div className="App">
        <h2>Hello world</h2>
        <Card />
        <Car name="BMW" desc="This is a Brand in Car"/>
        <Garage />
        <hr />
        <ClassCom okay="This is class component props"/>
        
      </div>
      
    );
  }
}

export default App;
