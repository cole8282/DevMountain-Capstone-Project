const data = require("./data.js");
const arrayOfData = data.gameContent;

//  console.log(arrayOfData);
let currentRiddle = 0;

module.exports = {
  //Frrema master request
  giveRiddle: function(req, res) {
    res.status(200).send(arrayOfData);
  },
  //end of freeman
  giveQuestion: function(req, res) {
    res.status(200).send(arrayOfData[currentRiddle].riddle);
  },
  giveAnswers: function(req, res) {
    res.status(200).send(arrayOfData[currentRiddle].answers);
  },
  giveCorrectAnswer: function(req, res) {
    res.status(200).send(arrayOfData[currentRiddle].correctAnswer);
  },
  updateCurrentRiddle: function(req, res) {
    if (req.body.newRiddle === 9) {
    res.status(200).send("Last Problem");
    }
    currentRiddle++;
    res.status(200).send("successfully updated");
  },
  resetRiddles: function(req, res) {
    currentRiddle = 0;
    res.status(200).send("Succesfully reset");
  }
}