import React, {useState, useEffect} from 'react'

function Timer() {
    const [count, setCount]= useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count+1);
        }, 1000);
    });
  return (
    <div>Counting = {count}</div>
  )
}

export default Timer;