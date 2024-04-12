let container = document.getElementById('container');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
let emailInput = document.getElementById('email');
let savedUsername = '';
let savedPassword = '';
let savedEmail = '';

toggle = () => {
    container.classList.toggle('sign-in')
    container.classList.toggle('sign-up')
}

toggle2 = () => {
    savedUsername = usernameInput.value;
    savedPassword = passwordInput.value;
    savedEmail = emailInput.value;
    if (usernameInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '' || emailInput.value === '') {
        alert('Please finish the empty fields!');
    } else if (passwordInput.value!== confirmPasswordInput.value) {
        alert('Passwords do not match!');
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
        alert('Please enter a valid email address!');
    } else {
        firebase.auth().createUserWithEmailAndPassword(savedEmail, savedPassword)
           .then((userCredential) => {
                const user = userCredential.user;
                console.log('User is signed in:', user);
                container.classList.toggle('sign-in')
                container.classList.toggle('sign-up')
            })
           .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/email-already-in-use') {
                    alert('The email address is already in use by another account.');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('The email address is not valid.');
                } else if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
            })
    }
}

setTimeout(() => {
    container.classList.add('sign-in')
}, 200);

