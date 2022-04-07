import axios from "axios";
import React, { useState } from 'react';
import MenuPage from "../GameMenuCom/MenuPage.js";

function Login() {

  //use state for showing menu page
  const [readyToPlay, setter] = useState(false);
  //use state for username variable
  const [userName, setterTwo] = useState('');
  if (readyToPlay) {
    return (
    < MenuPage username={userName}/>
    );
  }

  function handleLoginClick() {
    let usernameValue = document.getElementById("login-username").value;
    let passwordValue = document.getElementById("login-password").value;
    let bodyObj = {usernameValue, passwordValue};
    axios.post("http://localhost:3002/login", bodyObj).then((response) => {
      // console.log(response.data);
      if (response.data === "User Not Found") {
        alert("User Not Found");
        document.getElementById("login-username").value = '';
        document.getElementById("login-password").value = '';
      }
      if (response.data === "User Successfully Found") {
         setter(true);
         setterTwo(usernameValue);
      }
    })
  }

  if (readyToPlay) {
    return (
    < MenuPage username={userName}/>
    );
  }
  return (
    <div>
       <button id="login-backbtn" onClick={() => {window.location.reload();}}>Back</button>
      <div id="login-text-box">
        {"Welcome Back, Log In Below"}
      </div>
      <div id="login-input-box">
        <input id="login-username" placeholder="Username"/>
        <br></br>
        <input id="login-password" placeholder="Password"/>
      </div>
      <div id="login-btn-official-box">
        <button id="login-btn-official" onClick={() => {handleLoginClick()}}>Log In</button>
      </div>
    </div>
  );
}

export default Login;