const login = document.getElementById('login');
const emailLg = document.getElementById('emailLg');
const passwordLg = document.getElementById('passwordLg');

login.addEventListener('submit', e => {
	e.preventDefault();
	loginValidate();
});

//validate values
function loginValidate() {
	const emailLgCheck = emailLg.value.trim();
	const passwordLgCheck = passwordLg.value.trim();
    var successMsg = false;

    //email check
	if(emailLgCheck == '') {
		setError(emailLg, 'Please enter an e-mail');
	} 
    else if (!isEmail(emailLgCheck)) {
		setError(emailLg, 'Invalid e-mail');
	} 
    else {
		setSuccess(emailLg);
	}
	
    //password check
	if(passwordLgCheck == '') {
		setError(passwordLg, 'Please enter a password');
	} 
    else {
		setSuccess(passwordLg);
        successMsg = true;
	}

    //print alert message
    if(successMsg == true){
        alert("Succesfully logged in!");
        window.location.href = "home.html";
    }
}

//check and set error value
function setError(input, message) {
	const loginSet = input.parentElement;
	const small = loginSet.querySelector('small');
	loginSet.className = 'login-item error';
	small.innerText = message;
}

//set success value
function setSuccess(input) {
	const loginSet = input.parentElement;
	loginSet.className = 'login-item success';
}

//check for correct email format
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}