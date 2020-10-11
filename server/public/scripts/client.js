$(document).ready(onReady);

function onReady(){
  getCalculationHistory();
  //event listeners
  $('#plusButton').on('click', operatorSetAdd);
  $('#subtractButton').on('click', operatorSetSubtract);
  $('#multiplyButton').on('click', operatorSetMultiply);
  $('#divideButton').on('click', operatorSetDivide);
  $('#equalsButton').on('click', submitCalculation);
  $('#clearButton').on('click', clearInputs);
  
}//end onReady
let operatorChoice; 

//find out what the user wants to DO with the numbers
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

//allow the user to clear the values and reset the operator
function clearInputs(){
  $('#numInput1').val('');
  $('#numInput2').val('');
  $('button').removeClass();
  operatorChoice = null;
}//endClearInputs


//send user inputs to the server for calculation
function submitCalculation(){
  let calcInputs = {
    inputOne: $('#numInput1').val(),
    inputTwo: $('#numInput2').val(),
    operator: operatorChoice
  };
  operatorChoice = null;
  $('button').removeClass();  
  $.ajax({
    method: 'POST',
    url: '/newCalculation',
    data: calcInputs
  }).then(function(response) {
    //getCalculation();
    getCalculationHistory();
    getAnswer();
  }).catch(function(error) {
    alert(error);
  });
}//end submitCalculation

//get the calculationHistory array from the server
function getCalculationHistory() {
  $.ajax({
    method: 'GET',
    url: '/calculationHistory'
  }).then(function(response){
    appendCalculations(response);
  }).catch(function(error){
    alert(error);
  });
}//end get getCalculationHistory request

//retrieve the solution to the calculation
function getAnswer() {
  $.ajax({
    method: 'GET',
    url: '/answer'
  }).then(function(response){
    result = response.answer;
    displayAnswer(result);
  }).catch(function(error){
    alert(error);
  });
}//end get getAnswer request

//display the solution on the DOM
function displayAnswer(data){
  $('#answer').html(`
    <p>${data}<p>
  `)
}//end appendAnswer

//list all calculations currently stored on the server to the DOM
function appendCalculations(array) {
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




