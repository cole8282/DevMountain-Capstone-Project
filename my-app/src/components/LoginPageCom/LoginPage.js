import React, { useState } from 'react';
import "../master.css";
import Login from './Login.js';
import Register from './Register.js';

function LoginPage() {
  //state for log in component
  const [showLogIn, setLogIn] = useState(false);
  //state for register component
  const [showRegister, setRegister] = useState(false);
  //Display Login Page
  if (showLogIn) {
    return (
      < Login />
    )
  }
  //Display Register Page
  if (showRegister) {
    return (
      <Register />
    )
  }

  return (
    <div id="main">
     <h1 id="title">
       <span>{"RIDDLEMAN"}</span>
     </h1>
     <h2 id="login-page-btns-box">
      <button id='login' onClick={() => {setLogIn(true)}}>Log In</button>
      <button id='register' onClick={() => {setRegister(true)}}>Register</button>
     </h2>
     {/* {showLogIn === true && <Login />} */}
    </div>
  );
}

export default LoginPage;
