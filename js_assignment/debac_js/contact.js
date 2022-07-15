function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_msg = document.getElementById("error-msg");
    var text;

    error_msg.style.padding = "12px";

    if(name.length < 3){
      text = "Please enter a valid name";
      error_msg.innerHTML = text;
      return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6 || email.indexOf(".") == -1){
      text = "Please enter a valid e-mail";
      error_msg.innerHTML = text;
      return false;
    }

    if(message.length <= 5){
      text = "Please enter more than 5 characters";
      error_msg.innerHTML = text;
      return false;
    }

    alert("Feedback submitted!");
    return true;
}