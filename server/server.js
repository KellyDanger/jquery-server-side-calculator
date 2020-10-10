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

//GET requests
app.get('/calculationHistory', (req, res) => {
  res.send(calculationHistory);
})//end GET req

//POST requests
app.post('/newCalculation', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})//end POST req

app.listen(port, () => {
  console.log('Up and Running on Port: ', port);
})//end app listen