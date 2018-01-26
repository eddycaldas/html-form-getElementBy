
var formInput = document.getElementById('formInput')
var nameInput = document.getElementById('name');
var lastName = document.getElementById('lastName');
var city = document.getElementById('city');
var age =  document.getElementById('age');
var submitButton = document.getElementById('submitButton');
var email = document.getElementById('email');
var password = document.getElementById('password');

formInput.addEventListener('submit', onClick );
function onClick(e){
  console.log(nameInput.value);

  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value)
e.preventDefault();  
}

const nameGotten = localStorage.getItem('email');

