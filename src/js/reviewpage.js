const reviewpage = (topic,Questions) => {
ReviewPage(topic,Questions);

}

export default reviewpage


let maincontainer = document.querySelector(".maincontainer");
let progressbtn=document.querySelector(".progress");

//Review Page
function ReviewPage(topic, Questions) {

    maincontainer.innerHTML='';
    progressbtn.classList.remove("hidden");
    let reviewSection=document.createElement("div");
    reviewSection.classList.add('flex','flex-col','gap-5','w-full','px-5','pb-10','ml-20');
    let reviewheadding=document.createElement("h1");
    reviewheadding.classList.add('text-3xl','font-bold','capitalize','font-serif','tracking-[5px]','mt-5');
    reviewheadding.innerText=`${topic}:`
    reviewSection.appendChild(reviewheadding);
    Questions.map((question,index)=>{
        let questionSection=document.createElement("div");
        questionSection.classList.add('flex','flex-col','gap-2','w-[65%]','p-3','bg-gray-100','rounded-lg','shadow-md');
        let questionblock=document.createElement("h1");
        questionblock.classList.add('font-semibold','text-lg');
        questionblock.innerText=`${index+1}. ${question.question}`;
        questionSection.appendChild(questionblock);
        let answersection=document.createElement("div");
        answersection.classList.add('flex','flex-col','gap-5');
        questionSection.appendChild(answersection);
        let optionblock=document.createElement("div");
        optionblock.classList.add('flex','flex-col','gap-2');
        question.options.map((option)=>{
            let optionlabel=document.createElement("p");
            optionlabel.classList.add('text-md','font-medium','w-[55%]','px-3','py-1','border','border-gray-300','rounded');
            optionlabel.innerText=option;
            if(question.yourAnswer=="Not Answered" && option===question.correctAnswer){
                optionlabel.classList.add('bg-gray-500','text-white','px-2','py-1','rounded');
            }
            else if(option===question.correctAnswer){
                optionlabel.classList.add('bg-green-500','text-white','px-2','py-1','rounded');
            }
            else if(option===question.yourAnswer && question.yourAnswer!==question.correctAnswer){
                optionlabel.classList.add('bg-red-500','text-white','px-2','py-1','rounded');
            }
            optionblock.appendChild(optionlabel);
        });
        answersection.appendChild(optionblock);
        let scoredvalue=document.createElement("h1");
        scoredvalue.classList.add(`${question.yourAnswer===question.correctAnswer?'text-green-600':'text-red-700'}`,'text-lg','font-semibold','text-center','w-28','bg-gray-200','rounded-md');
        scoredvalue.innerHTML=`Scored:${question.yourAnswer===question.correctAnswer?'+1':'+0'}`;
        answersection.appendChild(scoredvalue);
        reviewSection.appendChild(questionSection);
    })
    maincontainer.appendChild(reviewSection);

}