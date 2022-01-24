

function alterColor(x) {
    x.style.background = ''
    x.style.background = "#ff3333";
    }

function validateForm(){
    var checkName = document.forms["user-inputs"]["username"].value;
    if (checkName == null || checkName == "" || !isNaN(checkName) || checkName.length >= 8){
        alert ("The username field is not a name! \n Please enter the correct name!");
        return false;
    }
}

var password = document.getElementById("password") 
var confirm_password = document.getElementById("confirm-password");

function validatePassword(){
    if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Password did not match!");
    }
    else {
    confirm_password.setCustomValidity('');
    }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;