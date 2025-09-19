import Signin from "./signin.js";

localStorage.clear();
//buttons and containers
let homebtn = document.querySelector(".home");
let signinbtn = document.querySelector(".signin");
let signupbtn=document.querySelector(".signup");
//Signup Calling
signupbtn.addEventListener("click", () => {
  homebtn.classList.remove("hidden");
  signinbtn.classList.add("hidden");
  Signin();
});
//Signin Calling
signinbtn.addEventListener("click", () => {
  homebtn.classList.remove("hidden");
  signinbtn.classList.add("hidden");
  Signin();
});
