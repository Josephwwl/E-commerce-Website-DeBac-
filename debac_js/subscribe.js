function subscribe(){
    var e_mail = document.getElementById("e_mail").value;
    var error_content = document.getElementById("error-content");
    var text;

    error_content.style.padding = "1px";

    if(e_mail.indexOf("@") == -1 || e_mail.length < 6 || e_mail.indexOf(".") == -1){
        text = "(Please enter a valid e-mail)";
        error_content.innerHTML = text;
        return false;
    }

    alert("Subscribed! Welcome to Debac.");
    return true;
}