//server setup
const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
//end server setup

//Variables
let calculationHistory = [{
  numInput1: 2,
  numInput2: 3,
  operatorChoice: 'add'
},
];

//GET requests
app.get('/calculations', (req, res) => {
  res.send(calculationHistory);
})


app.listen(port, () => {
  console.log('Up and Running on Port: ', port);
})//end app listen