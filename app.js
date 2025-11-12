// Task One: Identify and select all DOM Elements 
const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('ConfirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError')

//Task Two: Load a Saved Username
function displayUsername () {
const namefromLocalStorage = localStorage.getItem("name");
if(namefromLocalStorage) {
usernameText.textContent = namefromLocalStorage 
} else {
usernameText.textContent = "Name does not exist"
}
}
displayUserName()

// Task 3.1: Input event listeners 
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Task 3.2 check validation with constraint validation API
    const inputElement = document.getElementById('InsertyourInputId');

// Task 3.3 For the “Confirm Password” field, explicitly check if it matches the “Password” field.

