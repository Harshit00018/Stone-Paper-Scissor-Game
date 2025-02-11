let userScore=0;
let compScore=0;
 const choices= document.querySelectorAll(".choice");
 const msg= document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 const genCompChoice=()=>{
  const options =["paper","scissor","stone"];
  const randIdx= Math.floor(Math.random()*3);
  return options[randIdx];
 }

 const drawGame=()=>{
  console.log("Game draw")
  msg.innerText = " Draw!";
  msg.style.backgroundColor="#081b31";
 }

 const showWinner=( userwin, userChoice, compChoice)=>{
  if(userwin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `yow win! ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor="green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = ` You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
  }
 }


 const playGame= (userChoice)=>{
  console.log("user choice=", userChoice);
  const compChoice= genCompChoice();
  console.log("computer choice=", compChoice);
  if(userChoice==compChoice){
    drawGame();
  }
else{
  let userwin = true;
  if(userChoice==="rock"){
    // scissor, paper
    userwin = compChoice==="paper"? false:true;
  }
  else if (userChoice==="paper"){
  userwin= compChoice==="scissor"? false:true;
  }
  else{
    // rock, paper
    userwin=compChoice==="rock"? false:true;
  }
  showWinner(userwin, userChoice, compChoice);
}



 };

 choices.forEach((choice)=>{
  console.log(choice)
  choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
  }
 
);
 });