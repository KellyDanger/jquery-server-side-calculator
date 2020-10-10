console.log('hello from js');
$(document).ready(onReady);

function onReady(){
  console.log('Hello from jq');
  getMathRecord();
  //event listeners
  $('#plusButton').on('click', operatorSetAdd);
  
}//end onReady
let operatorChoice; 

function operatorSetAdd (){ 
  operatorChoice = 'add'
}//end operatorSetAdd

function getMathRecord() {
  $.ajax({
    method: 'GET',
    url: '/calculations'
  }).then(function(response){
    console.log(response);
  }).catch(function(error){
    alert(error);
  });
}