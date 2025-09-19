import QuizPage from "./quizpage.js";
import HomePage from "./home.js";
import ProgressPage from "./progress.js";
const DB_URL="http://localhost:5001/Topics";
const quizcard = () => {
QuizCards();
}

export default quizcard
let maincontainer = document.querySelector(".maincontainer");
let homebtn = document.querySelector(".home");
let signinbtn = document.querySelector(".signin");
let logoutbtn = document.querySelector(".logout");
let progressbtn=document.querySelector(".progress");

//calling Progeress
progressbtn.addEventListener("click",()=>{
  progressbtn.classList.add("hidden");
ProgressPage();
});

//Logout Functionality
logoutbtn.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("currentuser");
  homebtn.classList.add("hidden");
  logoutbtn.classList.remove("flex");
  logoutbtn.classList.add("hidden");
  HomePage();
});

//Quiz Cards
async function QuizCards() {
  logoutbtn.classList.remove("hidden");
  logoutbtn.classList.add("flex");
  signinbtn.classList.add("hidden");
  maincontainer.classList.remove("flex-row");
  maincontainer.classList.add("flex-col");
  progressbtn.classList.remove("hidden");
  let QuizHeading = document.createElement("h1");
  QuizHeading.innerText = "Available Topics:";
  QuizHeading.classList.add(
    "text-xl",
    "font-font-semibold",
    "font-serif",
    "pl-5",
    "pt-8",
    "text-[#6B4F44]"
  );
  maincontainer.appendChild(QuizHeading);
  let cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "2xl:grid-cols-6",
    "5xl:grid-cols-8",
    "gap-7",
    "p-5",
    "place-items-center"
  );
  let response = await fetch(DB_URL);
  let data = await response.json();
  data.map((object) => {
    let card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "hover:shadow-2xl",
      "transition-shadow",
      "duration-300",
      "flex",
      "flex-col",
      "items-center",
      "w-60",
      "h-60",
      "cursor-pointer",
      "text-[#6B4F44]"
    );
    card.addEventListener("click", () => {
      QuizPage(object.topic);
    });
    let top = document.createElement("div");
    top.classList.add(
      "flex",
      "justify-center",
      "w-full",
      "items-center",
      "h-[50%]",
      "text-3xl",
      "tracking-widest",
      "rounded-t-lg",
      "uppercase",
      "font-serif"
    );
    top.innerText = object.topic;
    card.appendChild(top);
    let description = document.createElement("div");
    description.classList.add("text-[12px]", "text-center", "px-3", "py-2");
    description.innerText = object.description;
    card.appendChild(description);
    cardContainer.appendChild(card);
  });

  maincontainer.appendChild(cardContainer);
  
}
