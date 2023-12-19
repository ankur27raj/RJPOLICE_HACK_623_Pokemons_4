import React from 'react'
import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {

  const [action, setAction] = useState("Sign Up");

  // const handleClick = (e)=>{
  //   <Link to='/form'>Form </Link>
  // }

  return (
    <div className='content'>
      
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
        </div>
        <div className='inputs'>
          {action === "Login" ? <div> </div> :
            <div className='input'>
              <input type="text" placeholder='Name' />
            </div>
          }

          <div className='input'>
            <input type="email" placeholder='Email' />
          </div>
          <div className='input'>
            <input type="password" placeholder='Password' />
          </div>
        </div>

        <div className='submit-container'>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up")}}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  )
}