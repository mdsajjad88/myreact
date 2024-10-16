import React,{useState} from 'react'

function Color() {
    const[rang, newColor]= useState({
        name: 'Black',
        brand:'AsianPaints',
        price:'600'
    })
    const updateColor =()=>{
        newColor (previousColor => {
            return {
                name:'White',
                brand:'China',
            }
        })
    }
  return (
    <div><h1>My {rang.name}</h1>
    <p>
      It is a {rang.brand} {rang.price}.
    </p>
    <button
      type="button"
      onClick={updateColor}
    >White</button>
    </div>
  )
}

export default Color;