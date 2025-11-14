// Task One: Identify and select all DOM Elements 
const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

//Task Two: Load a Saved Username
window.addEventListener("DOMContentLoaded", () => {
const savedUsername = localStorage.getItem("username");
if (savedUsername) {
usernameInput.value = savedUsername;
}   
});


// Task 3.1: Input event listeners 



