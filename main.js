// const { use } = require("react");

let maincontainer = document.querySelector(".maincontainer");
let initialcontent = maincontainer.innerHTML;
let homebtn = document.querySelector(".home");
homebtn.addEventListener("click", () => {
  maincontainer.innerHTML = initialcontent;
  maincontainer.classList.remove("flex-col");
  maincontainer.classList.add("flex-row");
});

async function QuizCards() {
  maincontainer.classList.remove("flex-row");
  maincontainer.classList.add("flex-col");
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
  let response = await fetch("./src/assets/Topics.json");
  let data = await response.json();
  data.map((object) => {
    let card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "hover:shadow-xl",
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
      // console.log(object);
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
let quizbtn1 = document.querySelector(".Quiz1");

quizbtn1.addEventListener("click", () => {
  maincontainer.innerHTML = "";
  QuizCards();
});

let navigationContainer = document.createElement("div");
// let score = 0;
let userAnswers = {};
let selectedQuestionIndexs = [];
let Questions;
async function QuizPage(topic) {
  let response = await fetch("./src/assets/Topics.json");
  let data = await response.json();
  let selectedTopic = data.find((obj) => obj.topic === topic);
  // console.log(selectedTopic);
  Questions = selectedTopic.questions;
  console.log(Questions);
  while (selectedQuestionIndexs.length < 10) {
    let randomIndex = Math.floor(Math.random() * Questions.length);
    if (!selectedQuestionIndexs.includes(randomIndex)) {
      selectedQuestionIndexs.push(randomIndex);
    }
  }
  console.log(selectedQuestionIndexs);
  maincontainer.innerHTML = "";
  maincontainer.classList.remove("flex-col");
  maincontainer.classList.add("flex-row");

  navigationContainer.classList.add(
    "w-[10%]",
    "h-full",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "text-[#6B4F44]",
    "mx-1"
  );
  let questionContainer = document.createElement("div");
  questionContainer.classList.add(
    "w-[90%]",
    "h-[full]",
    // "bg-white",
    "flex",
    "flex-col",
    "gap-3",
    "p-20"
  );
  maincontainer.appendChild(navigationContainer);
  // let rulescontainer=document.createElement("div");
  let ruleHeading=document.createElement("h1");
  ruleHeading.classList.add("text-2xl","font-serif","font-semibold","text-black");
  ruleHeading.innerText="Rules to follow:";
  console.log(ruleHeading);
  questionContainer.appendChild(ruleHeading)
  let rulesblock=document.createElement("div");
  rulesblock.classList.add("flex","flex-col","gap-3")
  let rules= [
  "Read all questions and options carefully.",
  "Answer based on your best knowledge; don't rush.",
  "If unsure, choose your best guess.",
  "Please use buttons to navigate Questions.",
  "Please Don't perss Submit before compleating.",
  "Complete the quiz honestly without external help."
];
rules.map((val,ind)=>{
  let rule=document.createElement("p");
  rule.classList.add("text-lg","px-2","py-2","font-serif")
  rule.innerText=`${ind+1}. ${val}`;
  rulesblock.appendChild(rule)
})
questionContainer.appendChild(rulesblock)
  maincontainer.appendChild(questionContainer);
  for (let i = 0; i < 10; i++) {
    let navButton = document.createElement("div");
    navButton.innerText = i + 1;
    navButton.classList.add(
      "w-10",
      "h-10",
      "m-1.5",
      "rounded-full",
      "bg-white",
      "border-1",
      "flex",
      "items-center",
      "justify-center",
      "cursor-pointer"
    );
    navButton.addEventListener("click", () => {
      currentQuestionIndex = i;
      questionContainer.innerHTML = "";
      Array.from(navigationContainer.children).map((btn, btnindex) => {
        if (btnindex != 10) {
          btn.classList.remove("bg-gray-500", "text-white");
          btn.classList.add("bg-white");
        }
      });
      navButton.classList.remove("bg-white");
      navButton.classList.add("bg-gray-500", "text-white");
      loadQuestion(i);
    });
    navigationContainer.appendChild(navButton);
    
  }

  let navButton = document.createElement("button");
  navButton.innerText = "Submit";
  navButton.classList.add(
    "w-min-content",
    "h-10",
    "m-2",
    "px-2",
    "rounded-xl",
    "border",
    "bg-[#6B4F44]",
    "text-white"
  );
  navButton.innerText = "Submit";
  navigationContainer.appendChild(navButton);
  // let nav = navigationContainer.children;
navButton.addEventListener("click", () => {
  console.log(userAnswers);
  let score=0;
  Object.keys(userAnswers).map((val)=>{
    console.log(Questions[selectedQuestionIndexs[val]]["question"]);
    console.log("q:",selectedQuestionIndexs[val],"uo:",userAnswers[val],"Ao",Questions[selectedQuestionIndexs[val]]["answer"]);
    if(Questions[selectedQuestionIndexs[val]]["answer"]==userAnswers[val])
    {
      score++
    }
  })
  ResultPage(score);
  console.log("final score:",score);
});
  function loadQuestion(index) {
    let questionblock = document.createElement("h1");
    questionblock.classList.add(
      "text-2xl",
      "text-black",
      "w-full",
      "font-serif",
      "font-semibold"
    );

    questionblock.innerText = ` ${index + 1}) ${
      Questions[selectedQuestionIndexs[index]]["question"]
    }`;
    questionContainer.appendChild(questionblock);
    let optionsContainer = document.createElement("div");
    optionsContainer.classList.add("flex", "flex-col", "gap-3", "w-full");
    let options = Questions[selectedQuestionIndexs[index]]["options"];
    options.forEach((option, optionIndex) => {
      let optionElement = document.createElement("div");
      optionElement.classList.add(
        "border",
        "px-5","py-2",
        "rounded-lg",
        "cursor-pointer",
        "bg-white",
        "hover:bg-gray-200",
        "w-[40%]"
      );
      optionElement.innerText = option;
      if (userAnswers[index] === optionIndex) {
        optionElement.classList.add("bg-green-300", "text-white");
      }
      optionElement.addEventListener("click", () => {
        userAnswers[index] = optionIndex;
        Array.from(optionsContainer.children).forEach((child) => {
          child.classList.remove("bg-green-300", "text-white");
        });
        optionElement.classList.add("bg-green-300", "text-white");
        console.log("starting", index);

        let nav = Array.from(navigationContainer.children);
        Object.keys(userAnswers).map((val) => {
          console.log("changing color");
          nav[val].classList.remove("bg-white");
          nav[val].classList.remove("bg-gray-500");
          nav[val].classList.add("bg-green-300");
        });
        console.log(userAnswers);
      });
      optionsContainer.appendChild(optionElement);
    });
    questionContainer.appendChild(optionsContainer);
  }
}



function ResultPage(score){
maincontainer.innerText=score;
}