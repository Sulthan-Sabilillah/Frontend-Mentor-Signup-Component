const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#emailAddress');
const password = document.querySelector('#password');

form.addEventListener('submit', function (e) {
e.preventDefault();

validateInput();

// Check if all fields are valid before navigating to another page
if (isFormValid()) {
    // Set the URL of the new page here
    window.location.href = './home.html';
    }
});

function validateInput() {
const firstNameValue = firstName.value.trim();
const lastNameValue = lastName.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();

if (firstNameValue === '') {
    setError(firstName, 'First Name cannot be empty');
} else {
    setSuccess(firstName);
}

if (lastNameValue === '') {
    setError(lastName, 'Last Name cannot be empty');
} else {
    setSuccess(lastName);
}

if (emailValue === '') {
    setError(email, 'Email cannot be empty');
} else if (!isEmail(emailValue)) {
    setError(email, 'Look like this is not an email');
} else {
    setSuccess(email);
}

if (passwordValue === '') {
    setError(password, 'Password cannot be empty');
} else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters');
} else {
    setSuccess(password);
}
}

function setError(input, message) {
const inputControl = input.parentElement; // form-control
const errorDisplay = inputControl.querySelector('.error');

// Display error message
inputControl.classList.add('error');
errorDisplay.innerText = message;
}

function setSuccess(input) {
const inputControl = input.parentElement; // form-control
const errorDisplay = inputControl.querySelector('.error');

// Clear error message
inputControl.classList.remove('error');
errorDisplay.innerText = '';
}

function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isFormValid() {
return (
    firstName.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    isEmail(email.value.trim()) &&
    password.value.trim() !== '' &&
    password.value.trim().length >= 8
);
}