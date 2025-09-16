import QuizCards from "./quizcard.js";
import Signin from "./signin.js";
const home = (loggedin) => {
  console.log(loggedin);
  HomePage(loggedin);
}

export default home

let logoutbtn = document.querySelector(".logout");
let homebtn = document.querySelector(".home");
let startquizbtn = document.querySelector(".StartQuiz");
let signinbtn = document.querySelector(".signin");
let maincontainer = document.querySelector(".maincontainer");


//Home Page
function HomePage(loggedin) {
  if (loggedin) {
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

    startquizbtn = document.querySelector(".StartQuiz");
    //Listening To QuizButton
    startquizbtn.addEventListener("click", () => {
      maincontainer.innerHTML = "";
      homebtn.classList.remove("hidden");
      homebtn.classList.add("flex");
      signinbtn.classList.add("hidden");
      signinbtn.classList.remove("flex");
      // logoutbtn.classList.remove("hidden");
      // logoutbtn.classList.add("flex");
      console.log("Quiz Started");
      localStorage.setItem("state", "user");
      QuizCards();
    });
  }
  else {
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
    let signupbtn = document.querySelector(".signup");
    //Listening To SigninButton
    signupbtn.addEventListener("click", () => {
      maincontainer.innerHTML = "";
      homebtn.classList.remove("hidden");
      homebtn.classList.add("flex");
      signinbtn.classList.add("hidden");
      localStorage.setItem("state", "signin");
      Signin();
    });
  }
}