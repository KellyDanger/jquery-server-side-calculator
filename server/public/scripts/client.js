console.log('hello from js');
$(document).ready(onReady);

function onReady(){
  console.log('Hello from jq');
  getMathRecord();
  //event listeners
  $('#plusButton').on('click', operatorSetAdd);
  $('#subtractButton').on('click', operatorSetSubtract);
  $('#multiplyButton').on('click', operatorSetMultiply);
  $('#divideButton').on('click', operatorSetDivide);
  
}//end onReady
let operatorChoice; 

function operatorSetAdd (){ 
  operatorChoice = 'add'
  console.log("we're going to", operatorChoice)
}//end operatorSetAdd

function operatorSetSubtract (){ 
  operatorChoice = 'subtract'
  console.log("we're going to", operatorChoice)
}//end operatorSetSubtract

function operatorSetMultiply (){ 
  operatorChoice = 'multiply'
  console.log("we're going to", operatorChoice)
}//end operatorSetMultiply

function operatorSetDivide (){ 
  operatorChoice = 'divide'
  console.log("we're going to", operatorChoice)
}//end operatorSetDivide

function getMathRecord() {
  $.ajax({
    method: 'GET',
    url: '/calculations'
  }).then(function(response){
    console.log(response);
  }).catch(function(error){
    alert(error);
  });
}//end get mathRecord request