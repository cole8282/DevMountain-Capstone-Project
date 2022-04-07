import React, { useState } from 'react';
import Highscores from "./Highscores.js";
import Cinematic from "../GameMenuCom/Cinematic.js";

function MenuPage(props) {

  //useState for New Game
  const [playing, readyToPlay] = useState(false);
  //useState for displaying highscores
  const [displayHighscores, displayHighscoresSetter] = useState(false);
  //useState for displaying cinematic
  const [displayCinematic, displayCinematicSetter] = useState(false);
  //useState for if the cinematic is clicked on from the menu page
  const [justTheCinematic, justTheCinematicSetter] = useState(false);

  //highscores display
  if (displayHighscores) {
    return (
      < Highscores username={props.username}/>
    );
  }
  //game display
  if (playing) {
    return (
      <div id="cinematic-body">
        < Cinematic username={props.username} justTheCinematic={justTheCinematic}/>
      </div>
    );
  }
  //cinematic display
  if (displayCinematic) {
    return (
      <div id="cinematic-body">
        < Cinematic username={props.username} justTheCinematic={justTheCinematic}/>
      </div>
    )
  }
  return (
    <div>
      <button className="sign-out-btn" onClick={() => {window.location.reload();}}>Sign Out</button>
      <div id="menu-text-box">
        {`Hello ${props.username}!`}
      </div>
      <div id="menu-description-box">
        <p>This is Riddleman. A game where you need to solve as many riddles as possible in a short period of time.</p>
      </div>
      <div id="menu-btns-box">
        <button id="new-game-btn" onClick={() => {readyToPlay(true)}}>New Game</button>
        <button id="highscores-btn" onClick={() => {displayHighscoresSetter(true)}}>View Highscores</button>
        <button id="cinematic-btn" onClick={() => {displayCinematicSetter(true); justTheCinematicSetter(true);}}>Watch Cinematic</button>
      </div>
    </div>
  );
};


export default MenuPage;