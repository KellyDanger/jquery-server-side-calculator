//server setup
const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;
//end server setup


app.listen(port, () => {
  console.log('Up and Running on Port: ', port);
})//end app listen