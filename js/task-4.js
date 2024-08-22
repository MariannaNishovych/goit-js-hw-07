'use strict';

const formEl = document.querySelector('.login-form');

console.log(formEl);

const handleFormSubmit = event => {
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    const data = {
        email,
        password,
    };
    

    if (!email || !password) {
        return alert('All form fields must be filled in');
    } else {
        console.log(data);
        formEl.reset();
    }
    
}


formEl.addEventListener('submit', handleFormSubmit);
