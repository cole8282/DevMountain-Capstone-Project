require('dotenv').config();
const controller = require("./controller/controller.js");

const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {dialect: 'postgres',
 dialectOptions: {ssl: {require: true, rejectUnauthorized: false}}});

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/../public/build'));

//Register user to database
app.post("/register", function(req, res) {
  sequelize.query(
    `SELECT *
    FROM users
    WHERE username='${req.body.usernameValue}'`
   ).then((dbres) => {
    if (dbres[0].length === 0) {
      sequelize.query(`INSERT INTO users(username, password, highscore)
      VALUES('${req.body.usernameValue}', '${req.body.passwordValue}', 0);`
     );
     console.log(dbres[0]);
     res.status(200).send("User Successfully Created");
    } else {
      console.log(dbres[0]);
      res.status(200).send("User Already Created");
    }
   });
})

//Log in functionality
app.post("/login", function(req, res) {
   sequelize.query(
    `SELECT *
    FROM users
    WHERE username='${req.body.usernameValue}' AND password='${req.body.passwordValue}'`
   ).then((dbres) => {
     if (dbres[0].length >= 1) {
    console.log(dbres[0]);
      res.status(200).send("User Successfully Found");
     } else {
    console.log(dbres[0]);
       res.status(200).send("User Not Found");
     }
  });
})

//the questions and answers
// give the riddle freeman
app.get("/riddle", controller.giveRiddle);
//end of freeman
//give the question
app.get("/question", controller.giveQuestion);
//give all the answers
app.get("/answers", controller.giveAnswers);
//give the correct answer
app.get("/correctanswer", controller.giveCorrectAnswer);

//update the riddle
app.post("/nextriddle", controller.updateCurrentRiddle);

//reset the riddles
app.post("/resetriddles", controller.resetRiddles);

//give the current highscore
app.post("/currenthighscore", function(req, res) {
  sequelize.query(
    `SELECT highscore
    FROM users
    WHERE username='${req.body.username}'`
   ).then((dbres) => {
    res.status(200).send(dbres[0]);
  })
})

//update the new highscore in the database
app.put("/newhighscore", function(req, res) {
  sequelize.query
  (`UPDATE users
  SET highscore='${req.body.newHighscore}'
  WHERE username='${req.body.username}' AND '${req.body.newHighscore}' > highscore`
 )
 .then((dbres) => {
    res.status(200).send("analyzed successfully");
  })
})

//get all of the highscores and usernames from the DB
app.get("/allhighscores", function(req, res) {
  sequelize.query
  (`SELECT username, highscore
    FROM users
    ORDER BY highscore DESC`
  )
  .then((dbres) => {
    res.status(200).send(dbres[0]);
  })
})

app.listen(3002, () => {
  console.log("Server is running on port 3002");
})