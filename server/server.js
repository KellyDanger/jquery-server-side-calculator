//server setup
const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//end server setup

//Variables
let calculationHistory = [];
let answer;
// let newCalculation = {};

// GET requests
app.get('/answer', (req, res) => {
  res.send({answer: answer});
})//end GET req


//POST requests
app.post('/newCalculation', (req, res) => {
  let calcObj = req.body;
  let newOperator = calcObj.operator;
  let newInputOne = Number(calcObj.inputOne);
  let newInputTwo = Number(calcObj.inputTwo);
  if(newOperator === '+'){
    answer = newInputOne + newInputTwo;
    console.log(answer);
  } else if(newOperator === '-'){
    answer = newInputOne - newInputTwo;
    console.log(answer);
  } else if(newOperator === '*'){
    answer = newInputOne * newInputTwo;
    console.log(answer);
  } else if(newOperator === '/'){
    answer = newInputOne / newInputTwo;
    console.log(answer);
  };//end if statement
  newCalculation = {
    numInput1: newInputOne,
    numInput2: newInputTwo,
    operatorChoice: newOperator,
    solution: answer
  }; 
  calculationHistory.push(newCalculation);
  res.sendStatus(200);
})//end POST req


app.get('/calculationHistory', (req, res) => {
  res.send(calculationHistory);
})//end GET req

// //get newCalc
// app.get('/newCalculation', (req, res) => {
//   res.send(newCalculation)
// })//end GET req

app.listen(port, () => {
  console.log('Up and Running on Port: ', port);
})//end app listen

