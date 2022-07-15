const register = document.getElementById('register');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

register.addEventListener('submit', e => {
	e.preventDefault();
	regValidate();
});

//validate values
function regValidate() {
	const usernameCheck = username.value.trim();
	const emailCheck = email.value.trim();
	const passwordCheck = password.value.trim();
	const password2Check = password2.value.trim();
    var successMsg = false;
	
    //username check
	if(usernameCheck === '') {
		setError(username, 'Please enter a username');
	} 
    else {
		setSuccess(username);
	}
	
    //email check
	if(emailCheck === '') {
		setError(email, 'Please enter an e-mail');
	} 
    else if (!isEmail(emailCheck)) {
		setError(email, 'Invalid e-mail');
	} 
    else {
		setSuccess(email);
	}
	
    //password check
	if(passwordCheck === '') {
		setError(password, 'Please enter a password');
	} 
    else {
		setSuccess(password);
	}
	
    //password2 check
	if(password2Check === '') {
		setError(password2, 'Please enter a password');
	} 
    else if(passwordCheck !== password2Check) {
		setError(password2, 'Passwords do not match');
	} 
    else{
		setSuccess(password2);
        successMsg = true;
	}

    //print alert message
    if(successMsg == true){
        alert("Succesfully signed up!");
        window.location.href = "home.html";
    }
}

//check and set error value
function setError(input, message) {
	const registerSet = input.parentElement;
	const small = registerSet.querySelector('small');
	registerSet.className = 'reg-item error';
	small.innerText = message;
}

//set success value
function setSuccess(input) {
	const registerSet = input.parentElement;
	registerSet.className = 'reg-item success';
}

//check for correct email format
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}