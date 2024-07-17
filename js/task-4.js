const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    const userData = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    console.log(userData);
    form.reset();
});

