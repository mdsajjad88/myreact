import React from 'react';
import './App.css';
import Card from './components/card';
import {Car, Garage} from './components/card2';
import ClassCom from './components/ClassCom';
import Day2 from './components/day2';
import StatePractice from "./components/usingState";
import Timer from "./components/useEffect";
function App(){
  {
    return (
      <div>
        <h2>Hello world</h2>
        <Card />
        <Car name="BMW" desc="This is a Brand in Car"/>
        <Garage />
        <hr />
        <ClassCom okay="This is class component props"/>
        <hr />
        <Day2 />
        <StatePractice />
        <Timer />
      </div>
    );
  }
}

export default App;
