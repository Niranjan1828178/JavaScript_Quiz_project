import QuizCards from "./quizcard.js";
import Signin from "./signin.js";
const home = (loggedin) => {
  console.log(loggedin);
  HomePage(loggedin);
}

export default home

let topicsbtn = document.querySelector(".quiz");
let progressbtn=document.querySelector(".progress");

//Home Page
function HomePage() {
  if (localStorage.getItem("currentuser")) {
    let homebtn = document.querySelector(".home");
    let signinbtn = document.querySelector(".signin");
    let logoutbtn = document.querySelector(".logout");
    let maincontainer = document.querySelector(".maincontainer");
    topicsbtn.classList.add("hidden");
    progressbtn.classList.remove("hidden");
    maincontainer.innerHTML = `<main
        class="h-full w-[40%] flex flex-col items-center mt-40 justify-center pt-10 "
      >
      <h1 class="capitalize text-[#420803] text-3xl sm:text-8xl tracking-wide font-serif font-extrabold mb-5">${localStorage.getItem("currentuser")}.</h1>
        <h1
          class="text-[#6B4F44] text-2xl sm:text-7xl text-center font-serif font-extrabold sm:mb-10"
        >
          Welcome to the Quiz App!
        </h1>
        <p
          class="text-[#6B4F44] text-md sm:text-2xl font-serif mb-6 text-center w-[50%]"
        >
          Verify your programming understanding. The MCQ way to confirm your
          expertise.
        </p>
        <a href="#"
          class="StartQuiz bg-[#A37C6A] transition duration-400  hover:bg-[#D3C5B8] text-[#F5F0EF] hover:text-stone-700 font-serif font-semibold px-1 py-1 text-sm rounded-lg mx-1 sm:px-3 sm:py-2 sm:rounded-xl sm:text-lg"
          >Start Quiz</a
        >
      </main>
      <article class="h-full w-[60%] flex items-center justify-center pt-10">
        <img
          src="./src/assets/landing.png"
          alt="Landing Image"
          class="w-full h-full object-contain"
        />
      </article>`;
    maincontainer.classList.add("flex-row");
    maincontainer.classList.remove("flex-col");
    signinbtn.classList.add("hidden");
    logoutbtn.classList.remove("hidden");
    homebtn.classList.add("hidden");

    //Listening To QuizButton
    document.querySelector(".StartQuiz").addEventListener("click", () => {
      maincontainer.innerHTML = "";
      homebtn.classList.remove("hidden");
      QuizCards();
    });
  }
  else {
    let signinbtn = document.querySelector(".signin");
    let homebtn = document.querySelector(".home");
    let maincontainer = document.querySelector(".maincontainer");
    topicsbtn.classList.add("hidden");
    progressbtn.classList.add("hidden");
    maincontainer.innerHTML = `<main
        class="h-full w-[40%] flex flex-col items-center mt-24 justify-center pt-10"
      >
        <h1
          class="text-[#6B4F44] text-2xl sm:text-7xl text-center font-serif font-extrabold sm:mb-10"
        >
          Welcome to the Quiz App!
        </h1>
        <p
          class="text-[#6B4F44] text-md sm:text-2xl font-serif mb-6 text-center w-[50%]"
        >
          Verify your programming understanding. The MCQ way to confirm your
          expertise.
        </p>
        <a href="#"
          class="signup bg-[#A37C6A] transition duration-400  hover:bg-[#D3C5B8] text-[#F5F0EF] hover:text-stone-700 font-serif font-semibold px-1 py-1 text-sm rounded-lg mx-1 sm:px-3 sm:py-2 sm:rounded-xl sm:text-lg"
          >Get Started</a
        >
      </main>
      <article class="h-full w-[60%] flex items-center justify-center pt-10">
        <img
          src="./src/assets/landing.png"
          alt="Landing Image"
          class="w-full h-full object-contain"
        />
      </article>`;
      maincontainer.classList.add("flex-row");
    maincontainer.classList.remove("flex-col");
    let signupbtn = document.querySelector(".signup");
    homebtn.classList.add("hidden");
    // homebtn.classList.add("flex");
    // signinbtn.classList.remove("flex");
    signinbtn.classList.add("hidden");
    
    //Listening To SigninButton
    signupbtn.addEventListener("click", () => {
      maincontainer.innerHTML = "";
      // localStorage.setItem("state", "signin");
      Signin();
    });
  }
}