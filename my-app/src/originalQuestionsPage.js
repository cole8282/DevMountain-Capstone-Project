  //useState for riddle number
  // const [riddleNumber, riddleSetter] = useState(0);


  //get the question
  //useState for riddle
  // const [riddle, setter] = useState('');
  //   axios.get("http://localhost:3002/question").then((response) => {
  //     // console.log(response.data);
  //     setter(response.data);
  //   })
      // console.log(riddle);

  //get all the answers
  //use states for all the answers
  // const [answerOne, answerSetterOne] = useState('');
  // const [answerTwo, answerSetterTwo] = useState('');
  // const [answerThree, answerSetterThree] = useState('');
  // const [answerFour, answerSetterFour] = useState('');
  // axios.get("http://localhost:3002/answers").then((response) => {
  //   // console.log(response.data);
  //   answerSetterOne(response.data[0]);
  //   answerSetterTwo(response.data[1]);
  //   answerSetterThree(response.data[2]);
  //   answerSetterFour(response.data[3]);
  // })
    // console.log(answerOne, answerTwo, answerThree, answerFour);



  // // handle answer one click
  //  function handleAnswerOneClick() {

  //   axios.get("http://localhost:3002/correctanswer").then((response) => {
  //     // console.log(response.data);
  //     if (response.data !== answerOne) {
  //       let selectedAnswer = document.getElementById("answer-one-box")
  //       selectedAnswer.style.backgroundColor = 'red';
  //     }
  //     if (response.data === answerOne) {
  //       document.getElementById("answer-one-box").style.backgroundColor = 'green';
  //     }
  //     //update the riddle number after two seconds
  //     setTimeout( function() {
  //       const current = riddleNumber;
  //       riddleSetter(current + 1);
  //       const passingObj = {newRiddle: riddleNumber};
  //       axios.post("http://localhost:3002/nextriddle", passingObj).then((response) => {
  //         if (response.data === "Last Problem") {
  //           finished(true);
  //           return;
  //         }
  //         console.log("Next Riddle!")
  //       })
  //       document.getElementById("answer-one-box").style.backgroundColor = 'purple';
  //     }, 2000)
  //   })};

  // //handle answer two click
  // function handleAnswerTwoClick() {
  //   axios.get("http://localhost:3002/correctanswer").then((response) => {
  //     // console.log(response.data);
  //     if (response.data !== answerTwo) {
  //       document.getElementById("answer-two-box").style.backgroundColor = 'red';
  //     }
  //     if (response.data === answerTwo) {
  //       document.getElementById("answer-two-box").style.backgroundColor = 'green';
  //     }
  //   })};
  // //handle answer three click
  // function handleAnswerThreeClick() {
  //   axios.get("http://localhost:3002/correctanswer").then((response) => {
  //     // console.log(response.data);
  //     if (response.data !== answerThree) {
  //       document.getElementById("answer-three-box").style.backgroundColor = 'red';
  //     }
  //     if (response.data === answerThree) {
  //       document.getElementById("answer-three-box").style.backgroundColor = 'green';
  //     }
  //   })};
  // //handle answer four click
  // function handleAnswerFourClick() {
  //   axios.get("http://localhost:3002/correctanswer").then((response) => {
  //     // console.log(response.data);
  //     if (response.data !== answerFour) {
  //       document.getElementById("answer-four-box").style.backgroundColor = 'red';
  //     }
  //     if (response.data === answerFour) {
  //       document.getElementById("answer-four-box").style.backgroundColor = 'green';
  //     }
  //   })};