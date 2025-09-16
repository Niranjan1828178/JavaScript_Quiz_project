import ReviewPage from "./reviewpage.js";
const USERS_URL = "http://localhost:5001/Users";
const resultpage = async(topic, Questions, score) => {
  let users = await fetch(USERS_URL)
  let userdata = await users.json();
  let currentuser = userdata.find(user => user.isLoggedIn === true);
  console.log(currentuser);
  let scores ={...currentuser.progress};
  // scores[topic].append({ score: score, questions: Questions });
  if (!scores[topic]) {
    scores[topic] = [];
  }
  scores[topic].push({ score: score, questions: Questions });
  console.log(scores);
  await fetch(`${USERS_URL}/${currentuser.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({progress:scores})
  });
  ResultPage(topic, Questions, score)


}

export default resultpage
let maincontainer = document.querySelector(".maincontainer");

//Result Page
function ResultPage(topic, Questions, score) {
  // maincontainer.innerText = score;
  maincontainer.innerHTML = "";
  let Resultsection = document.createElement("div");
  Resultsection.classList.add('w-full', 'flex', 'flex-col', 'gap-5', 'items-center', 'justify-center')
  let resultHeading = document.createElement("h1");
  resultHeading.classList.add('text-4xl', 'font-extrabold', 'capitalize', 'font-serif', 'tracking-[5px]')
  resultHeading.innerText = `${topic} Result`;
  Resultsection.appendChild(resultHeading);
  let Resulticon = document.createElement('div');
  Resulticon.classList.add(`${score > 4 ? 'bg-green-700' : 'bg-red-700'}`, 'mt-5', 'w-32', 'h-32', 'rounded-full', 'flex', 'items-center', 'justify-center');
  Resulticon.innerHTML = score >= 5 ? '<i class="fa-solid fa-check text-[70px] text-white"></i>' : '<i class="fa-solid fa-xmark text-[70px] text-white"></i>'
  Resultsection.appendChild(Resulticon);
  let resultcomment = document.createElement("h1");
  resultcomment.innerText = score >= 5 ? "Congratulations You cleared this Quiz!" : "Better luck next time!";
  resultcomment.classList.add(`${score > 4 ? 'text-green-700' : 'text-red-700'}`, 'text-2xl', 'font-serif', 'text-center');
  Resultsection.appendChild(resultcomment);

  //score Card
  let scorecard = document.createElement("div");
  scorecard.classList.add('flex', 'flex-col', 'w-96', 'p-2', 'h-60', 'bg-gray-100', 'hover:bg-gray-300', 'transition', 'duration-300', 'shadow-xl', 'shadow-gray-500', 'ring-[#6B4F44]');
  Resultsection.appendChild(scorecard);
  let scorecaedheadding = document.createElement("h1");
  scorecaedheadding.innerText = 'YOUR SCORE';
  scorecaedheadding.classList.add('text-2xl', 'font-bold', 'font-serif', 'text-center');
  scorecard.appendChild(scorecaedheadding);
  let scorevalue = document.createElement("h1");
  scorevalue.classList.add(`${score > 4 ? 'text-green-700' : 'text-red-700'}`, 'font-semibold', 'border-b-4', 'border-b-gray-500', 'flex', 'items-center', 'justify-center', 'text-[70px]', 'w-full', 'h-[65%]');
  scorevalue.innerText = `${score * 10}%`;
  scorecard.appendChild(scorevalue);
  let requiredscore = document.createElement("h1");
  requiredscore.classList.add('text-lg', 'flex', 'items-center', 'justify-center', 'pt-2');
  requiredscore.innerHTML = `<strong>Passing Score:</strong>50%`;
  scorecard.appendChild(requiredscore);

  //Review Button
  let reviewbtn = document.createElement("button");
  reviewbtn.classList.add('reviewbtn', 'bg-[#A37C6A]', 'transition', 'duration-400', 'hover:bg-[#D3C5B8]', 'text-[#F5F0EF]', 'hover:text-stone-700', 'font-serif', 'font-semibold', 'px-3', 'py-2', 'rounded-xl', 'text-lg', 'mt-5');
  reviewbtn.innerText = "Review Answers";
  reviewbtn.addEventListener('click', () => {
    event.preventDefault();
    ReviewPage(topic, Questions);
  })
  Resultsection.appendChild(reviewbtn);
  maincontainer.appendChild(Resultsection);

}
