import Signin from "./signin.js";
import QuizCard from "./quizcard.js";
const USERS_URL = "http://localhost:5001/Users";
const login = () => {
    loginPage()
};

export default login;

let maincontainer = document.querySelector(".maincontainer");
function loginPage() {
    maincontainer.innerHTML = "";
    //Login Block
    let loginblock = document.createElement("div");
    loginblock.classList.add("loginblock", "w-[40%]", "h-96", "bg-[#F5EFE6]", "flex", "flex-col", "rounded-xl", "shadow-xl", "shadow-gray-500", "mt-14", "items-center", "gap-3", "p-3");
    let headding = document.createElement("h1");
    headding.classList.add("LoginHeadding","text-3xl", "font-extrabold", "font-serif", "text-center", "tracking-widest")
    headding.innerText = "Login";
    loginblock.appendChild(headding)

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
    loginblock.appendChild(usernamebox);
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
    loginblock.appendChild(passwordbox);
    // //change headding
    // headding.innerText = "Login";
    // //remove confirmpassword box
    // loginblock.removeChild(confirmpassword);
    // //change button text
    // signupbtn.classList.remove("SigninButton");
    // signupbtn.classList.add("LoginButton");
    // signupbtn.innerText = "Login";
    //Login Button
        let loginbutton = document.createElement("button");
        loginbutton.classList.add("loginbutton","w-[50%]", "h-10", "bg-[#A37C6A]", "text-white", "font-bold", "rounded-xl", "mt-4", "hover:bg-[#8C7767]", "transition", "duration-300");
        loginbutton.innerText = "Login";
        loginbutton.addEventListener('click', async() => {
            event.preventDefault();
            Loginincheck(usernameinput.value, passwordinput.value);
        });
        loginblock.appendChild(loginbutton);
    
        //link to login
        let linktosignup = document.createElement("div");
        linktosignup.classList.add("linktosignup","mt-4", "text-sm", "font-serif");
        linktosignup.innerHTML = `Don't have an account? <a href="#" class="linkSignup text-blue-500 underline" id="linklogin">Signup</a>`;
        linktosignup.querySelector(".linkSignup").addEventListener("click", () => {
            Signin();
        })
        loginblock.appendChild(linktosignup);
        maincontainer.appendChild(loginblock);
}

//Login Check a User
async function Loginincheck(username, password) {
    let users = await fetch(USERS_URL);
    let usersData = await users.json();
    let userExists = usersData.find((user) => user.username == username);
    if (userExists) {
        if (userExists.password == password) {
            await fetch(USERS_URL + `/${userExists.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ isLoggedIn: true })
            });
            maincontainer.innerHTML = "";
            QuizCard();
        }
        else {
            alert("Username or Password wrong!");
            loginPage();
            return;
        }
    }
    else{
        alert("User doesn't exists!");
        loginPage();
        return;
    }
}