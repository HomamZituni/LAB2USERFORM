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


// Task Three: Input event listeners 

// username input validation 
usernameInput.addEventListener("input", () => {
if (usernameInput.validity.valueMissing) {
usernameError.textContent = "Username is required";
} else if (usernameInput.validity.tooShort) {
usernameError.textContent = "Username must be at least 3 characters";
} else {
usernameError.textContent = ""; }
});

//email input validation
emailInput.addEventListener("input", () => {
if (emailInput.validity.valueMissing) {
emailError.textContent = "Email is required";
} else if (emailInput.validity.typeMismatch) {
emailError.textContent = "Please enter a valid email";
} else {
emailError.textContent = "";
  }
});


// password input validation

passwordInput.addEventListener("input", () => {
if (passwordInput.validity.valueMissing) {
passwordError.textContent = "Password is required";
} else if (passwordInput.validity.tooShort) {
passwordError.textContent = "Password must be at least 8 characters";
} else if (passwordInput.validity.patternMismatch) {
passwordError.textContent = "Password must be 8 characters and only contain letters and numbers";
} else {
passwordError.textContent = "";
}
});

// password matching input
confirmPasswordInput.addEventListener("input", () => {
if (confirmPasswordInput.value !== passwordInput.value) {
confirmPasswordError.textContent = "Passwords do not match";
} else {
confirmPasswordError.textContent = "";
}
});

// Task Four: Form registration 
registrationForm.addEventListener("submit", function(e) {
  e.preventDefault();

  usernameInput.dispatchEvent(new Event("input"));
  emailInput.dispatchEvent(new Event("input"));
  passwordInput.dispatchEvent(new Event("input"));
  confirmPasswordInput.dispatchEvent(new Event("input"));

  if (usernameError.textContent !== "") {
    usernameInput.focus();
  } else if (emailError.textContent !== "") {
    emailInput.focus();
  } else if (passwordError.textContent !== "") {
    passwordInput.focus();
  } else if (confirmPasswordError.textContent !== "") {
    confirmPasswordInput.focus();
  } else {
    
    localStorage.setItem("username", usernameInput.value);
    alert("Registration successful!");
    setTimeout(() => {
      registrationForm.reset();
    }, 10); 
  }
});
