import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
    useEffect(()=>{document.title="Indhu"}
    )
  return (
    <div>
    <h1>Hook {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Plus1</button>
    <br></br>
    <button onClick={()=>{setCount(count-1)}}>Minus1</button>
    <br></br>
    <button onClick={()=>{setCount(count+5)}}>Plus5</button>
    </div>
  )
}

export default HooksEx