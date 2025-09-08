import Signin from "./signin.js";
import HomePage from "./home.js";


//buttons and containers
let homebtn = document.querySelector(".home");
let signinbtn = document.querySelector(".signin");
//calling homePage
HomePage();
//Signin Calling
signinbtn.addEventListener("click", () => {
  homebtn.classList.remove("hidden");
  signinbtn.classList.add("hidden");
  Signin();
});
