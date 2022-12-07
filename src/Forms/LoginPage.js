import React, { useState } from 'react'

export default function LoginPage() {
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const formHandler=(event)=>
    {
        event.preventDefault();
          const loginobj={
            name:username,
            pwd:password
          }
          console.log(loginobj);
          alert(JSON.stringify(loginobj));
    }
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username:<input type="text" value={username} placeholder="Username" onChange={e=>setUserName(e.target.value)}/>
    <br></br>
    Password:<input type="password" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
    <br></br>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}
