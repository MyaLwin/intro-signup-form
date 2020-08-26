const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '' || firstName === null) {
        addErrorTo('firstName', 'First Name cannot be empty')
    } else {
        removeErrorFrom('firstName');
    }

    if (lastName === '' || lastName === null) {
        addErrorTo('lastName', 'Last Name cannot be empty')
    } else {
        removeErrorFrom('lastName');
    }

    if (email === '' || email === null) {
        addErrorTo('email', 'Email cannot be empty')
    } else if (!--isValid('email')) {
        addErrorTo('email', 'Looks like this is not an email')
    } else {
        removeErrorFrom('email');
    }

    if (password === '' || password === null) {
        addErrorTo('password', 'Password cannot be empty')
    } else {
        removeErrorFrom('password');
    }
});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}