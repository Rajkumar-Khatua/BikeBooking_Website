var errName = document.getElementById("err-name");
var errEmail = document.getElementById("err-email");
var errNumber = document.getElementById("err-number");
var errSubject = document.getElementById("err-sub");
var errMesssage = document.getElementById("err-msg");
var errSubmitted = document.getElementById("err-submit");

function validateName() {
  var name = document.getElementById("contact-name").value;
  //   e.preventDefault()
  if (name.length == 0) {
    errName.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    errName.innerHTML = "Please Write Full Name!";
    return false;
  }
  errName.innerHTML = '<i class="fa fa-check-circle"></i> Valid!';
  return true;
}


function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if (email.length==0){
        errEmail.innerHTML ="Email is required!";
        return false;
    }

    //If the email format is not Matching This one Then It Gives error! 
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errEmail.innerHTML ="Email is Invalid!";
        return false;
    }

        errEmail.innerHTML = '<i class="fa fa-check-circle"></i> Valid!';
        return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if (phone.length==0){
        errNumber.innerHTML='Phone Number Is required';
        return false;
    }
    if (phone.length!==10) {
        errNumber.innerHTML='phone number should be 10 Dights';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        errNumber.innerHTML="phone number can't be Speacial Symbol or Charcter";
        return false;
    }
        errNumber.innerHTML = '<i class="fa fa-check-circle"></i> Valid!';
        return true;
}

function validateSubject(){
    var sub = document.getElementById("contact-subject").value;
    var required = 12;
    var left = required-sub.length;
    if (sub==0) {
        errSubject.innerHTML="Please Eneter your Subject";
        return false;
    }

    if (left>0) {
        errSubject.innerHTML= left  + 'more characters required';
        return false;
    }
    errSubject.innerHTML = '<i class="fa fa-check-circle"></i> Valid!';
        return true;
}


function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required =50;
    var left =required - message.length;

    if (message==0) {
        errMesssage.innerHTML="Please Eneter your Message";
        return false;
    }
    if (left>0) {
        errMesssage.innerHTML =left + ' more characters required';
        return false;
    }
    errMesssage.innerHTML = '<i class="fa fa-check-circle"></i> Valid!';
        return true;
}






// function alidateForm(){
//     if(!validateName()|| validateEmail()|| validatePhone()|| validateSubject()|| validateMessage()){
//         errSubmitted.innerHTML ='Please fix the Error ';
//         return false;
//     }
// }