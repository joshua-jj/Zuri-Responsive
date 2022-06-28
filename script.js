'use strict';

const form = document.querySelector('#form')
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const textInput = document.querySelector('.enter-text');
// const submitForm = document.querySelector('.submit');

form.addEventListener('submit', (e) => {
    if (fname.value === '' || fname.value === null) {
        e.preventDefault();
        document.querySelector('.error-display-fname').classList.remove('hidden');
        document.querySelector('.icon-fname').classList.add('fa-circle-exclamation');
        fname.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    if (lname.value === '' || lname.value === null) {
        e.preventDefault();
        document.querySelector('.error-display-lname').classList.remove('hidden');
        document.querySelector('.icon-lname').classList.add('fa-circle-exclamation');
        lname.style.borderColor = "hsl(0, 100%, 74%)";
    }
    if (email.value === '' || email.value === null) {
        e.preventDefault();
        document.querySelector('.error-display-email').classList.remove('hidden');
        document.querySelector('.icon-email').classList.add('fa-circle-exclamation');
        email.style.borderColor = "hsl(0, 100%, 74%)";
    }
    if (password.value === '' || password.value === null) {
        e.preventDefault();
        document.querySelector('.error-display-password').classList.remove('hidden');
        document.querySelector('.icon-password').classList.add('fa-circle-exclamation');
        password.style.borderColor = "hsl(0, 100%, 74%)";
    }

});