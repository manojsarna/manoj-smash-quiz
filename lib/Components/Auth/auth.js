
const loginBtn = document.getElementById("sm-auth-login-btn");

const loginForm = document.getElementById("auth-login")

const signUpBtn = document.getElementById("sm-auth-signup-btn");

const signUpForm = document.getElementById("auth-signup");


loginBtn.addEventListener("click", ()=>{
    loginForm.classList.remove("sm-main-auth-hide");
    signUpForm.classList.add("sm-main-auth-hide");
})

signUpBtn.addEventListener("click", ()=>{
    signUpForm.classList.remove("sm-main-auth-hide");
    loginForm.classList.add("sm-main-auth-hide");
    
})