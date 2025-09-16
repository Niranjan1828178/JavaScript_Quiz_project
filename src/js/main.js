import Signin from "./signin.js";


localStorage.setItem("state","index");
//buttons and containers
let homebtn = document.querySelector(".home");
let signinbtn = document.querySelector(".signin");
//calling homePage
// HomePage();
let signupbtn=document.querySelector(".signup");
//Signup Calling
signupbtn.addEventListener("click", () => {
  homebtn.classList.remove("hidden");
  signinbtn.classList.add("hidden");
  localStorage.setItem("state","signin");
  Signin();
});
//Signin Calling
signinbtn.addEventListener("click", () => {
  homebtn.classList.remove("hidden");
  signinbtn.classList.add("hidden");
  localStorage.setItem("state","signin");
  Signin();
});
