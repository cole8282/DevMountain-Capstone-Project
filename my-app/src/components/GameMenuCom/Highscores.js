import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuPage from "./MenuPage.js";

function Highscores(props) {

  //useState for returning to menu page
  const [returnToMenu, returnToMenuSetter] = useState(false);
  //useState for all of the highscores data
  const [highscoresData, highscoresDataSetter] = useState([{username: "Usernames", highscore: "Highscores"}]);

  //make a get request to obtain all usernames and there highscores
  useEffect(() => {
    axios.get("http://localhost:3002/allhighscores").then((response) => {
      highscoresDataSetter(response.data);
    })
  }, []);


  console.log(highscoresData);
  //function for displaying the entire list of data
  // function renderData(arrayOfData) {
  //   <>
  //   {arrayOfData.map(({ username, highscore }) => (
  //     <p key={username}>Coffee type {username} in a {highscore} size.</p>
  //   ))}
  // </>
  // }


  if (returnToMenu) {
    return (
     < MenuPage username={props.username}/>
    );
  }
  return (
   <div>
     <button id="back-to-menu-btn-highscores" onClick={() => {returnToMenuSetter(true)}}>Back To Menu</button>
     <div id="rankings-header-text-box">
       {'Rankings'}
     </div>

     <div id="master-data-box">
       <div id="data-row-box">
         <div id="rank-row-box"> Rank </div>
         <div id="username-row-box"> Username </div>
         <div id="highscore-row-box"> Highscore </div>
       </div>
        {highscoresData.map(({ username, highscore }, index) => (
          <div id="rankings-individual-data-box" key={username}>
           <section id="rankings-rank">{`${index + 1}`}</section>
           <section id="rankings-username">{`${username}`}</section>
           <section id="rankings-scores">{`${highscore}`}</section>
          </div>
        ))}
     </div>
   </div>
  );
};

export default Highscores;