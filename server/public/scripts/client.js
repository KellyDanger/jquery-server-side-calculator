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
  $('#clearButton').on('click', clearInputs);
  
}//end onReady
let operatorChoice; 

function operatorSetAdd (){ 
  operatorChoice = '+';
  $(this).toggleClass("clickedButton");
}//end operatorSetAdd

function operatorSetSubtract (){ 
  operatorChoice = '-';
  $(this).toggleClass("clickedButton");
}//end operatorSetSubtract

function operatorSetMultiply (){ 
  operatorChoice = '*';
  $(this).toggleClass("clickedButton");
}//end operatorSetMultiply

function operatorSetDivide (){ 
  operatorChoice = '/';
  $(this).toggleClass("clickedButton");
}//end operatorSetDivide

function clearInputs(){
  $('#numInput1').val('');
  $('#numInput2').val('');
  $('button').removeClass();
}//endClearInputs

function submitCalculation(){
  let calcInputs = {
    inputOne: $('#numInput1').val(),
    inputTwo: $('#numInput2').val(),
    operator: operatorChoice
  };
  $.ajax({
    method: 'POST',
    url: '/newCalculation',
    data: calcInputs
  }).then(function(response) {
    //getCalculation();
    getMathRecord();
    getAnswer();
  }).catch(function(error) {
    alert(error);
  });
}//end submitCalculation

function getAnswer() {
  $.ajax({
    method: 'GET',
    url: '/answer'
  }).then(function(response){
    result = response.answer;
    appendAnswer(result);
  }).catch(function(error){
    alert(error);
  });
}//end get mathRecord request

function appendAnswer(data){
  $('#answer').html(`
    <p>${data}<p>
  `)
}//end appendAnswer

function appendCalculations(array) {
  console.log(array);
  $('#calculationList').empty();
  for(let calc of array){
    $('#calculationList').append(`
    <li>${calc.numInput1} ${calc.operatorChoice} ${calc.numInput2} = ${calc.solution}</li>
  `);
  }
}//end appendCalculations



// function getCalculation(){
//   $.ajax({
//       method: 'GET',
//       url: '/newCalculation'
//     }).then(function(response){
//     }).catch(function(error){
//       alert(error);
//     });
//   //end get newCalculation request
// }//end getCalculation


function getMathRecord() {
  $.ajax({
    method: 'GET',
    url: '/calculationHistory'
  }).then(function(response){
    appendCalculations(response);
  }).catch(function(error){
    alert(error);
  });
}//end get mathRecord request

