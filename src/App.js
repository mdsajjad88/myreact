import React from 'react';
import './App.css';
import Card from './components/card';
import {Car, Garage} from './components/card2';
import ClassCom from './components/ClassCom';
import Day2 from './components/day2';
import StatePractice from "./components/usingState";
import Timer from "./components/useEffect";
import Header from './components/Header';
import Layouts from './pages/Layouts';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Icon from './pages/Icon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App(){
  {
    return (
      <div>
        {/* <h2>Hello world</h2>
        <Card />
        <Car name="BMW" desc="This is a Brand in Car"/>
        <Garage />
        <hr />
        <ClassCom okay="This is class component props"/>
        <hr />
        <Day2 />
        <StatePractice />
        <Timer /> */}
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/contacts' element={<Contacts />}/>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/icon' element={<Icon />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
