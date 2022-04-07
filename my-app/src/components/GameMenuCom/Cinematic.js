import React, { useState, useEffect } from 'react';
import MenuPage from "./MenuPage.js";
import Questions from "../GameCom/Questions.js";


function Cinematic(props) {

  //use state for showing menu page
  const [backToMenu, backToMenuSetter] = useState(false);
  //use state for showing questions page
  const [readyToPlay, readyToPlaySetter] = useState(false);
  //use state for showing accept challenge button
  const [showAcceptChallenge, showAcceptChallengeSetter] = useState(false);


  //if its just not the watch the cinematic then show the skip button and at the end show the accept challenge button
  useEffect(() => {
  if (props.justTheCinematic === false) {
   document.getElementById("skip-cinematic-btn").style.display = "initial";
    showAcceptChallengeSetter(true);
  }
}, [props.justTheCinematic]);



//the cinematic
useEffect(() => {
  //story divs
  document.getElementById("cinematic-part-one").style.display = "initial";
  //starting color style
  document.body.style.backgroundColor = "black";

  //rotation 1
  setTimeout(() => {
    document.getElementById("cinematic-part-one").style.display = "none";
    document.getElementById("cinematic-part-two").style.display = "initial";
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/7888995.jpg')";
    //rotation 2
    setTimeout(() => {
      document.getElementById("cinematic-part-two").style.display = "none";
      document.getElementById("cinematic-part-three").style.display = "initial";
      document.body.style.backgroundImage = "url(https://img.wallpapersafari.com/desktop/1280/1024/74/10/81gMe5.jpg)";
      document.body.style.backgroundSize = "cover";
      //rotation 3
      setTimeout(() => {
        document.getElementById("cinematic-part-three").style.display = "none";
        document.body.style.backgroundSize = "initial";
        document.getElementById("cinematic-part-four").style.display = "initial";
        document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/63/21/bXJYop.jpg')";
        //rotation 4
        setTimeout(() => {
          document.getElementById("cinematic-part-four").style.display = "none";
          document.getElementById("cinematic-part-five").style.display = "initial";
          // document.body.style.backgroundImage = "none";
          // document.body.style.backgroundColor = "rgb(58, 39, 10)";
          //showing the accept the challenge button
          if (showAcceptChallenge) {
            document.getElementById("accept-challenge-btn").style.display = "initial";
          }
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}, [showAcceptChallenge]);




//back to menu display
  if (backToMenu) {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(19, 32, 68)";
    return (
      < MenuPage username={props.username}/>
    )
  }
  //onto game display
  if (readyToPlay) {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(19, 32, 68)";
    return (
      < Questions username={props.username}/>
    )
  }
  return (
    <div>
      <button id="back-to-menu-btn" onClick={() => {backToMenuSetter(true)}}>Back</button>
      <button id="skip-cinematic-btn" onClick={() => {readyToPlaySetter(true)}}>Skip</button>
      {/* cinematic */}
      <div id="cinematic-part-one">
        <span>{"It was a day like any other day."}</span>
      </div>
      <div id="cinematic-part-two">
        <span>{"You were strolling around the village. Enjoying the scenery. When suddenly..."}</span>
      </div>
      <div id="cinematic-part-three">
        <span>{"The sky began to grow dark and the air around you became thick with fog."}</span>
      </div>
      <div id="cinematic-part-four">
        <span>{"A man appeared out of the dark mists and spoke to you calling himself the RIDDLEMAN!"}</span>
      </div>
      <div id="cinematic-part-five">
        <span>{"He challenges you to a game of riddles. A game that your very life may depend on..."}</span>
      </div>
      {/* end cinematic */}
      <button id="accept-challenge-btn" onClick={() => {readyToPlaySetter(true)}}> Accept The Challenge! </button>
    </div>
  );
}

export default Cinematic;