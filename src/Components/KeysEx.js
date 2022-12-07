import React from 'react'

export default function KeysEx()
 {
    const cars=
    [
        {model:"Nano",id:1},
        {model:"Audi",id:2},
        {model:"BMW",id:3},
        {model:"Swift",id:4},
        {model:"Alto",id:5}
    ];
    return (
    <div><center>
    <h1>
    {cars.map((val)=><li key={val.id}>{val.model}</li>)}
    </h1></center>
    </div>
    )
}