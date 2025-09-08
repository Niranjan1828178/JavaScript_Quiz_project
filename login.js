import Signin from "./signin.js";

const login = () => {
    loginPage()
};

export default login;

function loginPage() {
    let Signinblock = document.querySelector(".Signinblock");
    Signinblock.classList.remove("h-96");
    Signinblock.classList.add("h-72");
    let headding = document.querySelector(".SigninHeadding");
    let username = document.querySelector(".Username");
    let password = document.querySelector(".Password");
    let confirmpassword = document.querySelector(".Confirmpasswordbox");
    let signupbtn = document.querySelector(".SigninButton");
    let loginlink = document.querySelector(".LinkToLogin");
    //change headding
    headding.innerText = "Login";
    //remove confirmpassword box
    Signinblock.removeChild(confirmpassword);
    //change button text
    signupbtn.classList.remove("SigninButton");
    signupbtn.classList.add("LoginButton");
    signupbtn.innerText = "Login";
    signupbtn.addEventListener('click', () => {
        Loginincheck(username.value, password.value);
    })
    //Change login link to signin Link
    loginlink.innerHTML = `Don't have an account? <a href="#" class="linkSignup text-blue-500 underline" id="linklogin">SignUp</a>`;
    loginlink.querySelector(".linkSignup").addEventListener("click", () => {
        Signin();
    })
}

//Login Check a User
function Loginincheck(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.some(user => user.username == username);
    if (userExists) {
        let userpassword = users.reduce((acc, cur) => {
            return cur.username == username ? cur.password : acc;
        },"")
        if (userpassword == password) {
            alert("login successful");
            return;
        }
        else {
            alert("Username or Password wrong!");
            return;
        }
    }
    else{
        alert("Username or Password wrong!");
        return;
    }
}