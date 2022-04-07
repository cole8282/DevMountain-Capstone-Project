import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MenuPage from '../GameMenuCom/MenuPage.js'


function FinalPage(props) {

  //useState for the currentHighscore
  const [currentHighscore, highscoreSetter] = useState('');
  //useState for if back to menu button has been clicked
  const [backToMenu, backToMenuSetter] = useState(false);

  //Start with a request to obtain the current highscore from the DB
  useEffect(() => {
    const passingObj = {username: props.username};
    axios.post("http://localhost:3002/currenthighscore", passingObj).then((response) => {
      // console.log(response.data);
      highscoreSetter(response.data[0].highscore);
    })
   });


  //Send the final score to the DB to see if it is better then the current highscore
      const passingObjTwo = {username: props.username, newHighscore: props.finalScore};
      axios.put("http://localhost:3002/newhighscore", passingObjTwo).then((response) => {
        //  console.log(response.data);
      })

   if (backToMenu) {
     return (
       < MenuPage username={props.username}/>
     );
   }
  return (
    <div>
      <div id="final-page-header-box">
        {"Game Over"}
      </div>
      <div id="final-page-scores-text-box">
        <section id="final-score"> {"Score: " + props.finalScore} </section>
        <section id="final-highscore"> {" Your Highscore: " + currentHighscore} </section>
      </div>
      <div id="final-page-buttons-box">
        <button id="final-sign-out-btn" onClick={() => {window.location.reload();}}>Sign Out</button>
        <button id="final-back-to-menu-btn" onClick={() => {backToMenuSetter(true)}}>Back to menu</button>
      </div>
    </div>
  );
}

export default FinalPage;