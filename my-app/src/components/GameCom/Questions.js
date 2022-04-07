import React, { useState, useEffect } from 'react';
import axios from "axios";
import FinalPage from "./FinalPage.js";

function Questions(props) {
  //set a dummy riddle to default value, so the return has something to pass in(it appears for a super small amount of time)
  const [riddles, setRiddles] = useState([{riddle: 'riddle', answers: ['one', 'two', 'three', 'four']}]);
  //useState for the current riddle default to zero as first
  const [riddleCounter, setRiddleCounter] = useState(0);
  // useState for end of game
  const [theEnd, finished] = useState(false);
  // useState for if a button has already been clicked on the same riddle
  const [clicked, setClicked] = useState(false);
  //useState for the score
  const [currentScore, setScore] = useState(0);
  //useState for the time left
  const [currentTime, setTime] = useState(10);
  //useState for resetting the timer
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3002/riddle").then((response) => {
      setRiddles(response.data);
    })
   }, []);

  // the final countdown...
  useEffect(() => {
    const timer = setTimeout(() => {
      //if an answer is selected reset timer for next riddle
      console.log('currentTime:',currentTime)
      if (resetTimer) {
        setResetTimer(false);
        setTime(10);
      } else if (currentTime === 0) {
        timerRunsOut();
      } else {
        setTime(currentTime - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });


    // timer runs out function
    function timerRunsOut() {
      if (theEnd) {
        return;
      }
        document.getElementById(`answer-${0}-box`).style.backgroundColor = 'red';
        document.getElementById(`answer-${1}-box`).style.backgroundColor = 'red';
        document.getElementById(`answer-${2}-box`).style.backgroundColor = 'red';
        document.getElementById(`answer-${3}-box`).style.backgroundColor = 'red';

      setTimeout( function() {
        setTime(10);
        setRiddleCounter(riddleCounter + 1);
        if (riddleCounter === 9) {
          //end of game so get final score and jump to next page
          finished(true);
        } else  {
          document.getElementById(`answer-${0}-box`).style.backgroundColor = 'rgb(241, 208, 20)';
          document.getElementById(`answer-${1}-box`).style.backgroundColor = 'rgb(241, 208, 20)';
          document.getElementById(`answer-${2}-box`).style.backgroundColor = 'rgb(241, 208, 20)';
          document.getElementById(`answer-${3}-box`).style.backgroundColor = 'rgb(241, 208, 20)';
        }
      }, 2000)
    };


   //master click function
  function handleClick(buttonNum) {
    //condition for function only running clicked is false which we make true immediatley afterwards
    if (clicked === false) {
      setClicked(true);
      setResetTimer(true);
      // incorrect condition
      // find the text of the button clicked compare it
      if (riddles[riddleCounter].correctAnswer !== riddles[riddleCounter].answers[buttonNum]) {
        document.getElementById(`answer-${buttonNum}-box`).style.backgroundColor = 'red';
      }
      // correct condition
      if (riddles[riddleCounter].correctAnswer === riddles[riddleCounter].answers[buttonNum]) {
        document.getElementById(`answer-${buttonNum}-box`).style.backgroundColor = 'green';
        setScore(currentScore + 1)
      }
      //update the riddle number after two seconds
      setTimeout( function() {
        setRiddleCounter(riddleCounter + 1);
        if (riddleCounter === 9) {
          //end of game so get final score and jump to next page
          finished(true);
        } else  {
          document.getElementById(`answer-${buttonNum}-box`).style.backgroundColor = 'rgb(241, 208, 20)';
        }
        setClicked(false);
      }, 1000)
    }
  }


  if (theEnd) {
    return (
      < FinalPage finalScore={currentScore} username={props.username}/>
    );
  } else {
    return (
      <div id="main-questions-div">
        <button className="sign-out-btn" onClick={() => {window.location.reload();}}>Sign Out</button>
        <div id="timer-question-score">
        <div id="timer-box">
            {"TIMER:"}
            <div id="timer">{currentTime}</div>
          </div>
          <div id="question-box">
            {riddles[riddleCounter].riddle}
            </div>
            <div id="score-box">
            {"SCORE:"}
            <div id="score">{currentScore}</div>
          </div>
        </div>
        <div id="answers-box-container">
          <div className="answer-boxes" id="answer-0-box">
            {riddles[riddleCounter].answers[0]}
          <button className="answer-buttons" onClick={() => {handleClick(0)}}></button>
          </div>
          <div className="answer-boxes" id="answer-1-box">
            {riddles[riddleCounter].answers[1]}
          <button className="answer-buttons" onClick={() => {handleClick(1)}}></button>
          </div>
          <div className="answer-boxes" id="answer-2-box">
          {riddles[riddleCounter].answers[2]}
          <button className="answer-buttons" onClick={() => {handleClick(2)}}></button>
          </div>
          <div className="answer-boxes" id="answer-3-box">
          {riddles[riddleCounter].answers[3]}

            <button className="answer-buttons" onClick={() => {handleClick(3)}}></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;