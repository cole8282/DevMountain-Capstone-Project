import axios from "axios";
// import React, { useState } from 'react';

function Register() {

  function handleRegisterClick() {
    //grab the input values
    let usernameValue = document.getElementById("register-username").value;
    let passwordValue = document.getElementById("register-password").value;
    //edge cases if username and object are too short or long
    if (usernameValue.length > 20 || passwordValue.length > 20) {
      document.getElementById("register-username").value = '';
      document.getElementById("register-password").value = '';
      return alert("Username or Password is too long");
    }
    if (usernameValue.length < 5 || passwordValue.length < 5) {
      document.getElementById("register-username").value = '';
      document.getElementById("register-password").value = '';
      return alert("Username or Password is too short");
    }
    //send the input values to the server through an object
    let bodyObj = {usernameValue, passwordValue};
    axios.post("http://localhost:3002/register", bodyObj).then((response) => {
      // console.log(response.data);
      if (response.data === "User Successfully Created") {
        alert("User Successfully Created");
        window.location.reload();
      }
      if (response.data === "User Already Created") {
        alert("User Already Created");
        window.location.reload();
      }
    })
  }

  return (
    <div>
      <button id="register-backbtn" onClick={() => {window.location.reload();}}>Back</button>
      <div id="register-text-box">
         {"Welcome, Register Below"}
      </div>
      <div id="register-input-box">
        <input id="register-username" placeholder="Username"/>
        <br></br>
        <input id="register-password" placeholder="Password"/>
      </div>
      <div id="register-btn-official-box">
        <button id="register-btn-official" onClick={() => {handleRegisterClick()}}>Register</button>
      </div>
    </div>
  );
}

export default Register;
