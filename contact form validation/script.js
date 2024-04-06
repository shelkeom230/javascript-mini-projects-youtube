let nameError=document.getElementById('name-error');
let phoneError=document.getElementById('phone-error');
let emailError=document.getElementById('email-error');
let messageError=document.getElementById('message-error');
let submitError=document.getElementById('submit-error');


function validateName(){
    let name=document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML='Name is required.';
        return false;
    }
    if (!name.match(/^[A-Za-z\s]+$/)) {
        nameError.innerHTML = 'only words';
        return false;
    }
    nameError.innerHTML='<img src="images/checkicon.png" style="width:25px;">';
    return true;
}


function validatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = "Phone number is required.";
        return false;
    }
    
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone number should be 10 digits long.";
        return false;
    }
    
    if (!phone.match(/^\d{10}$/)) {
        phoneError.innerHTML = "Phone number should contain only digits.";
        return false;
    }
    
    phoneError.innerHTML = '<img src="images/checkicon.png" style="width:25px;">';
    return true;
    
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = "Email address is required.";
        return false;
    }

    // Regular expression for validating email address
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
        emailError.innerHTML = "Invalid email address.";
        return false;
    }

    emailError.innerHTML = '<img src="images/checkicon.png" style="width:25px;">';
    return true;
}

function validateMessage(){
    let message=document.getElementById('contact-message').value;
    let required=30;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML=left+ " more characters are required."
        return false;
    }
    messageError.innerHTML='<img src="images/checkicon.png" style="width:25px;">';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML="please fix the errors to submit";
        setTimeout(function()  {
            submitError.style.display="none";
        }, 2000);
        return false;
    }
}