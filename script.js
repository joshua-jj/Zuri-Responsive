'use strict';

const form = document.querySelector('#form')
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue == '') {
        setError(fname, "First name cannot be empty");
    } else {
        setSuccess(fname);
    }

    if (lnameValue == "") {
        setError(lname, "Last name cannot be empty");
    } else {
        setSuccess(lname);
    }

    if (emailValue == "") {
        setError(email, "Email cannot be empty");
    } else if(!validateEmail(emailValue)) {
        setError(email, "Looks  like this is not an email");
    } else {
        setSuccess(email);
    }

    if (passwordValue == "") {
        setError(password, "Password cannot be empty");
    } else {
        setSuccess(password);
    }
}

function setError(input, message) {
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small');
    small.textContent = message;
    inputContainer.classList.add('error');
}

function setSuccess(input) {
    const inputContainer = input.parentElement;
    inputContainer.classList.remove("error");
    inputContainer.classList.add("success");
}

function validateEmail(email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(regexEmail);
}
