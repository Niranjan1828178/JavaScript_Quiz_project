
import Login from "./login.js";

const signup = () => {

    SigninPage();
}

export default signup

function SigninPage() {
    let homebtn = document.querySelector(".home");
    homebtn.innerText = "Home";
    let maincontainer = document.querySelector(".maincontainer");
    maincontainer.innerHTML = "";
    maincontainer.classList.remove("justify-start");
    maincontainer.classList.add("justify-center");
    //Signin Block
    let signinblock = document.createElement("div");
    signinblock.classList.add("Signinblock", "w-[40%]", "h-96", "bg-[#F5EFE6]", "flex", "flex-col", "rounded-xl", "shadow-xl", "shadow-gray-500", "mt-14", "items-center", "gap-3", "p-3");
    let headding = document.createElement("h1");
    headding.classList.add("SigninHeadding","text-3xl", "font-extrabold", "font-serif", "text-center", "tracking-widest")
    headding.innerText = "SignUp";
    signinblock.appendChild(headding)

    //UserName Box
    let usernamebox = document.createElement("div")
    usernamebox.classList.add("flex", "flex-row", "w-[80%]", "p-1", "px-4", "gap-3", "rounded-xl", "bg-white", "items-center", "mt-2");
    let usernameicon = document.createElement("div");
    usernameicon.classList.add("w-5", "h-5");
    usernameicon.innerHTML = `<i class="fa-solid fa-user"></i>`;
    let line = document.createElement("div");
    line.classList.add("w-0", "h-full", "border")
    usernamebox.appendChild(usernameicon);
    usernamebox.appendChild(line);
    let usernameinput = document.createElement("input");
    usernameinput.type = "text";
    usernameinput.name = "username";
    usernameinput.required = true;
    usernameinput.placeholder = "Enter Username";
    usernameinput.classList.add("Username","w-[80%]", "h-10", "focus:ring-0", "focus:outline-none", "font-serif")
    usernamebox.appendChild(usernameinput);
    signinblock.appendChild(usernamebox);
    //Password Box
    let passwordbox = document.createElement("div")
    passwordbox.classList.add("flex", "flex-row", "w-[80%]", "p-1", "px-4", "gap-3", "rounded-xl", "bg-white", "items-center", "mt-2");
    let passwordicon = document.createElement("div");
    passwordicon.classList.add("w-5", "h-5");
    passwordicon.innerHTML = `<i class="fa-solid fa-lock"></i>`;
    passwordbox.appendChild(passwordicon);
    let line2 = line.cloneNode(true);
    passwordbox.appendChild(line2);
    let passwordinput = document.createElement("input");
    passwordinput.type = "password";
    passwordinput.name = "password";
    passwordinput.required = true;
    passwordinput.placeholder = "Enter Password";
    passwordinput.classList.add("Password","w-[80%]", "h-10", "focus:ring-0", "focus:outline-none", "font-serif")
    passwordbox.appendChild(passwordinput);
    signinblock.appendChild(passwordbox);

    //confirm Password Box
    let confirmpasswordbox = document.createElement("div")
    confirmpasswordbox.classList.add("Confirmpasswordbox","flex", "flex-row", "w-[80%]", "p-1", "px-4", "gap-3", "rounded-xl", "bg-white", "items-center", "mt-2");
    let confirmpasswordicon = document.createElement("div");
    confirmpasswordicon.classList.add("w-5", "h-5");
    confirmpasswordicon.innerHTML = `<i class="fa-solid fa-lock"></i>`;
    confirmpasswordbox.appendChild(confirmpasswordicon);
    let line3 = line.cloneNode(true);
    confirmpasswordbox.appendChild(line3);
    let confirmpasswordinput = document.createElement("input");
    confirmpasswordinput.type = "password";
    confirmpasswordinput.name = "confirmpassword";
    confirmpasswordinput.required = true;
    confirmpasswordinput.placeholder = "Confirm Password";
    confirmpasswordinput.classList.add("ConfirmPassword","w-[80%]", "h-10", "focus:ring-0", "focus:outline-none", "font-serif")
    confirmpasswordbox.appendChild(confirmpasswordinput);
    signinblock.appendChild(confirmpasswordbox);

    //Signin Button
    let signinbutton = document.createElement("button");
    signinbutton.classList.add("SigninButton","w-[50%]", "h-10", "bg-[#A37C6A]", "text-white", "font-bold", "rounded-xl", "mt-4", "hover:bg-[#8C7767]", "transition", "duration-300");
    signinbutton.innerText = "SignUp";
    signinbutton.classList.remove("LoginButton")
    signinbutton.addEventListener('click', () => {
        Register(usernameinput.value, passwordinput.value, confirmpasswordinput.value);
    });
    signinblock.appendChild(signinbutton);

    //link to login
    let linktologin = document.createElement("div");
    linktologin.classList.add("LinkToLogin","mt-4", "text-sm", "font-serif");
    linktologin.innerHTML = `Already have an account? <a href="#" class="linklogin text-blue-500 underline" id="linklogin">Login</a>`;
    linktologin.querySelector(".linklogin").addEventListener("click", () => {
        Login();
    })
    signinblock.appendChild(linktologin);
    maincontainer.appendChild(signinblock);
}
//Register User
function Register(username,password,confirmpassword){
    if (username === "" || password === "" || confirmpassword === "") {
        alert("Please fill all the fields");
        return;
    }
    if (password !== confirmpassword) {
        alert("Passwords do not match");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    let userExists = users.some(user => user.username == username);
    console.log(users.some(user => user.username == username));
    if (userExists) {
        alert("Username already exists");
        return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    document.querySelectorAll("input").forEach(input => input.value = "");
    Login();
}