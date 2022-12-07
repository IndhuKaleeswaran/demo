import React  from 'react'

export default function ListEx()
{
   
    const cars=["Alto800 ","BMW ","Audi ","Nano "]
    
    return (
      <div>
      <h1>{cars.map((val)=><li>{val}</li>)}</h1>
      </div>)
  
}