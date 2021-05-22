var btn = document.getElementById('sliderbtn');
var form = document.getElementById('form');

//main function
btn.onclick = (function(event){
    event.preventDefault();
    form.classList.add('active');
});
//close button
var closebtn = document.querySelector('.close');
closebtn.onclick = (function(eventclose){
    eventclose.preventDefault();
    form.classList.remove('active');
});
    //getting values of from inputs
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var answer = document.getElementById('answer')
var submitBtn = document.getElementById("submit");
    
//Checker function inside main function
submitBtn.onclick = (function(e){
     e.preventDefault();
     //trimming spaces from values
     var usernameValue = username.value.trim();
     var emailValue = email.value.trim();
     var passwordValue = password.value.trim();
     var answerValue = answer.value.trim();

     //Condition for username
     if(usernameValue === ""){
         //set error message
         //set error class
         setErrorFor(username, 'Username cannot be empty');    
     }
     else{
         //set success class
         setSuccessFor(username);
     }
 

    //condition for email
    if(emailValue === ""){
        //set error message
        //set error class
        setErrorFor(email, 'Email cannot be empty');    
    }
    else{
        //set success class
        setSuccessFor(email);
    }

    //condition for password
    if(passwordValue === ""){
        //set error message
        //set error class
        setErrorFor(password, 'Password cannot be empty');    
    }
    else{
        //set success class
        setSuccessFor(password);
    }

     //condition for question
     if(answerValue === ""){
        //set error message
        setErrorFor(answer, 'Answer cannot be empty');    
    }
    else{
        //set success class
        setSuccessFor(answer);
    }
});
//Error function
function setErrorFor(input, message){
    var formcontrol = input.parentElement;
    var small = formcontrol.querySelector('small');
    //change message
    small.innerHTML = message;
    small.style.visibility = 'visible';

    //add error class
    //input.className = 'error';
    input.classList.add('error');
}

function setSuccessFor(input){
    var formcontrol = input.parentElement;
    var small = formcontrol.querySelector('small');
    input.className = 'success';
    small.style.visibility = 'hidden';

}

