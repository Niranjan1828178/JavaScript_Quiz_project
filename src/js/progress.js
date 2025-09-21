import ReviewPage from "./reviewpage.js";
const USERS_URL = "http://localhost:5001/Users";

const progress = () => {
    ProgressPage();
}

export default progress

let maincontainer = document.querySelector(".maincontainer");
let homebtn = document.querySelector(".home");

async function ProgressPage() {
    let currentuser = localStorage.getItem("currentuser");
    homebtn.classList.remove("hidden");
    let response = await fetch(USERS_URL);
    let users = await response.json();
    let userdata = users.find(user => user.username === currentuser);
    maincontainer.innerHTML = '';
    let progressContainer = document.createElement("div");
    progressContainer.classList.add("w-full", "h-full", "flex", "flex-col", "items-center", "pt-5");
    maincontainer.appendChild(progressContainer);
    let progressHeading = document.createElement("h1");
    progressHeading.innerText = "Your Progress:";
    progressHeading.classList.add(
        "text-xl",
        "font-bold",
        "font-serif",
        "pl-5",
        "pt-8",
        "text-[#6B4F44]"
    );
    progressContainer.appendChild(progressHeading);
    let progresslisttilte = document.createElement("div");
    progresslisttilte.classList.add("w-full","bg-gray-100", "grid","grid-cols-3", "justify-center", "items-center","sticky","top-0","bg-gray-100","pb-4","pt-4");
    let title = document.createElement("div");
    title.innerText = "Topic";
    title.classList.add("text-md", "font-bold", "text-[#420803]");
    let scoretitle = document.createElement("div");
    scoretitle.innerText = "Score";
    scoretitle.classList.add("text-md", "font-bold", "text-[#420803]");
    let review=document.createElement("div");
    review.innerText="Review";
    review.classList.add("text-md", "font-bold", "text-[#420803]");
    progresslisttilte.appendChild(title);
    progresslisttilte.appendChild(scoretitle);
    progresslisttilte.appendChild(review);
    let progressList = document.createElement("div");
    progressList.classList.add("w-[70%]", "h-[600px]", "flex", "flex-col", "items-start", "mt-5", "space-y-4", "overflow-y-auto", "mb-5", "pb-5", "bg-gray-100", "p-4","pt-0", "rounded-lg");
    progressList.appendChild(progresslisttilte);
    if (Object.keys(userdata.progress).length>0) {
        Object.keys(userdata.progress).forEach(topic => {
            userdata.progress[topic].map((t) => {
                    let topicDiv = document.createElement("div");
                    topicDiv.classList.add("w-full","grid","grid-cols-3","justify-center","items-center", "border", "border-gray-300", "rounded-lg", "p-4", "bg-white", "shadow-md");
                    let topicTitle = document.createElement("h2");
                    topicTitle.innerText = `${topic}`;
                    topicTitle.classList.add("text-lg", "font-semibold", "mb-2", "text-[#420803]");
                    topicDiv.appendChild(topicTitle);
                    let score = document.createElement("p");
                    score.innerText = `Score: ${t.score}`;
                    score.classList.add("text-md", "font-medium", "mb-2", "text-[#6B4F44]");
                    topicDiv.appendChild(score);
                    let reviewBtn = document.createElement("button");
                    reviewBtn.innerText = "Review Answers";
                    reviewBtn.classList.add("w-40","bg-[#A37C6A]", "hover:bg-[#D3C5B8]", "text-white", "hover:text-stone-700", "font-serif", "font-semibold", "px-3", "py-2", "rounded-lg", "transition", "duration-300");

                    reviewBtn.addEventListener("click", () => {
                        ReviewPage(topic, t.questions);
                    });
                    topicDiv.appendChild(reviewBtn);
                    progressList.appendChild(topicDiv);
                
            });
        });
        progressContainer.appendChild(progressList);
    }
    else{
        let noData=document.createElement("h1");
        noData.innerText="No Progress Data Available";
        noData.classList.add("text-xl","font-semibold","text-red-600","mt-10");
        progressContainer.appendChild(noData);
    }

}
