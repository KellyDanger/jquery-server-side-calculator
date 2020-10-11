//server setup
const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
//end server setup

//Variables
let calculationHistory = [{
  numInput1: 2,
  numInput2: 3,
  operatorChoice: 'add'
},
];
let answer;

//GET requests
app.get('/answer', (req, res) => {
  res.send({answer: answer});
})//end GET req

app.get('/calculationHistory', (req, res) => {
  res.send(calculationHistory);
})//end GET req

//POST requests
app.post('/newCalculation', (req, res) => {
  let calcObj = req.body;
  let newOperator = calcObj.operator;
  let newInputOne = Number(calcObj.inputOne);
  let newInputTwo = Number(calcObj.inputTwo);
  if(newOperator === 'add'){
    answer = newInputOne + newInputTwo;
    console.log(answer);
  } else if(newOperator === 'subtract'){
    answer = newInputOne - newInputTwo;
    console.log(answer);
  } else if(newOperator === 'multiply'){
    answer = newInputOne * newInputTwo;
    console.log(answer);
  } else if(newOperator === 'divide'){
    answer = newInputOne / newInputTwo;
    console.log(answer);
  }
  res.sendStatus(200);
})//end POST req

app.listen(port, () => {
  console.log('Up and Running on Port: ', port);
})//end app listen

