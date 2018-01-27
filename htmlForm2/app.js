// 
// var formInput = document.getElementById("formInput");
// var inputText = document.getElementById("input");
// var submitButton = document.getElementById("submitButton");
// 
// formInput.addEventListener('submit', numbers);
// function numbers(e) {
//     var str = inputText.value.toString();
//     var regEx = str.match(/\d/g);
//     document.getElementById('outputText').innerHTML = regEx;
// 
// 
// 
//   e.preventDefault();
// }

// var inputForm = document.getElementById('inputForm');
// var textInput = document.getElementById('textInput');
// var submitButton = document.getElementById('submit');
// 
// inputForm.addEventListener('submit', numbers);
// function numbers(e){
//   var inputToString = textInput.value.toString();
//   var regEx = (/\d/g);
//   var filtered = inputToString.match(regEx);
//     // console.log(filtered);
//     document.getElementById('outputText').innerHTML = filtered;
// 
// 
//   e.preventDefault();
// }


var formInput = document.getElementById('formInput');
var inputText = document.getElementById('inputText');
var submitButton = document.getElementById('submitButton');

formInput.addEventListener('submit', getNumbers);
function getNumbers(e){
  var inputToString = inputText.value.toString();
  var regEx = (/\d/g);
  var onlyNumbers = inputToString.match(regEx)
  
  document.getElementById('showNumbers').innerHTML = onlyNumbers;
  
  e.preventDefault();
}