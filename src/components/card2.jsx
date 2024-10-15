import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(icca) {
  return <div><h2>I am a Car!
  </h2>
  <p>{icca.name}
    </p>
    <p>{icca.desc}</p></div>
   ;
}

function Garage() {
  return (
    <div>
	    <h1>Who lives in my Garage?</h1>
    </div>
  );
}
export {Car, Garage};
