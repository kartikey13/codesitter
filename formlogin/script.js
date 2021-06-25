var signupsubmit = document.getElementById('signupbtn');
       
var signinsubmit = document.getElementById('btn');

var logininfo;
var signupinfo;
 
//code for span on opening correct user



//function logtest
if(signinsubmit){
    console.log("signinsubmit")
    //Submit button
        signinsubmit.addEventListener("click", logtest = (e) => {
        
        e.preventDefault();
//Taking Values in an object
        const logdetail = {
        mail : document.getElementById('email'),
        pass : document.getElementById('pass')
        }

        for(var i in logdetail){
            if(logdetail[i].value === ""){
                setError(logdetail[i], "Field cannot be empty");
            }
            else{
                setSuccess(logdetail[i]);  
            }
        }
        loginarray = {
            email: document.getElementById('email').value,
            password: document.getElementById('pass').value
        } 
            logininfo = JSON.stringify(loginarray);
        var signarray = localStorage.getItem('firststorage')
        //testing for right username and password
            if(logininfo !== signarray){
                console.log("unsuccessful")
                window.location.reload();
            }
            else{
                console.log("successful")
               localStorage.setItem('email', loginarray.email)
               window.location.assign("user.html")
            }    
    })    
}


//function test()
if(signupsubmit){
         console.log("signupsubmit")
    //Submit button
         signupsubmit.addEventListener("click", test = (ev) =>{
                ev.preventDefault();
        
                const details = {   //object name = details
                    email : document.getElementById('e-mail'),
                    paas : document.getElementById('password'),
                    phone : document.getElementById('phone-number'),
                    work : document.getElementById('occupation'),
                    addr : document.getElementById('address')
                    }

                    for(var i in details){
                        if(details[i].value === ""){
                            setError(details[i], "Field cannot be empty");
                            window.location.reload();
                        }
                        else{
                            setSuccess(details[i])
                            array = {
                                email : document.getElementById('e-mail').value,
                                password : document.getElementById('password').value
                                
                            }
                            signupinfo = JSON.stringify(array);
                            localStorage.setItem('firststorage', signupinfo)
                            window.location.assign("signin.html")      
                        }     
                    }     
        })
    }

    function setError(input, message){
       var userblock = input.parentElement; 
       var small = userblock.querySelector('span');

       small.innerHTML = message;
       small.style.visibility = "visible";
        input.className = 'error';
    }

    function setSuccess(input){
        var userblock = input.parentElement; 
        var small = userblock.querySelector('span');

        small.style.visibility = "hidden";
        input.className = "success";
    }

  