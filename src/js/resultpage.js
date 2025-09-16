
const resultpage = (val) => {
 ResultPage(val)
}

export default resultpage
let maincontainer = document.querySelector(".maincontainer");

//Result Page
function ResultPage(score) {
  maincontainer.innerText = score;
}
