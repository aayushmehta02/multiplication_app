const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");


const scorecard = document.getElementById("score");
let scoreEl = JSON.parse(localStorage.getItem("scoreEl"));
if(!scoreEl){
    scoreEl=0;
}

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    
    if(userAns=== correctAns){
        scoreEl++;
        updateLocalstorage();
    }else{
        scoreEl--;
        updateLocalstorage();
    }

})

scorecard.innerText=`Score: ${scoreEl}`;

function updateLocalstorage(){
    localStorage.setItem("scoreEl", JSON.stringify(scoreEl))
}