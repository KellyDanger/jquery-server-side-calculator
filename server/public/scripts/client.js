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
  $('#equalsButton').on('click', submitCalculation);
  
}//end onReady
let operatorChoice; 
let result;

function operatorSetAdd (){ 
  operatorChoice = 'add'
}//end operatorSetAdd

function operatorSetSubtract (){ 
  operatorChoice = 'subtract'
}//end operatorSetSubtract

function operatorSetMultiply (){ 
  operatorChoice = 'multiply'
}//end operatorSetMultiply

function operatorSetDivide (){ 
  operatorChoice = 'divide'
}//end operatorSetDivide

function submitCalculation(){
  let newCalculation = {
    inputOne: $('#numInput1').val(),
    inputTwo: $('#numInput2').val(),
    operator: operatorChoice
  }
  $.ajax({
    method: 'POST',
    url: '/newCalculation',
    data: newCalculation
  }).then(function(response) {
    getCalculation();
    getAnswer();
  }).catch(function(error) {
    alert(error);
  })
}//end submitCalculation

function getAnswer() {
  $.ajax({
    method: 'GET',
    url: '/answer'
  }).then(function(response){
    result = response.answer;
    appendAnswer();
  }).catch(function(error){
    alert(error);
  });
}//end get mathRecord request

function appendAnswer(){
  $('#answer').html(`
    <p>${result}<p>
  `)
}//end appendAnswer

function getCalculation(){
  $.ajax({
      method: 'GET',
      url: '/newCalculation'
    }).then(function(response){
    }).catch(function(error){
      alert(error);
    });
  //end get newCalculation request
}//end getCalculation


function getMathRecord() {
  $.ajax({
    method: 'GET',
    url: '/calculationHistory'
  }).then(function(response){
    console.log(response);
  }).catch(function(error){
    alert(error);
  });
}//end get mathRecord request

