let userScore=0;
let comScore=0;
let msg=document.querySelector("#msg")

let choices=document.querySelectorAll(".choice");
let userkascore=document.querySelector("#userscore")
let compkascore=document.querySelector("#compscore")
let reset=document.querySelector("#reset")


 const playGame=(userChoice) => {

   console.log('userchoice=',userChoice);


   console.log('compchoice=',compChoice);


   if(userChoice===compChoice){
    drawGame();
   }
   else{

    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  
  
 }


 }


 const showWinner=(userWin, userChoice, compChoice) => {
    if(userWin)
    {
        console.log('You Win');
        userScore++;
        userkascore.innerText=userScore;
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";

    }
    else{
        console.log('You lost');
        comScore++;
        compkascore.innerText=comScore;
        msg.innerText=`You lost  ! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red";

        
    }
   
 }
 


 const drawGame=() => {
   console.log('game was draw');
   msg.innerText="Game is DRAW! "
   msg.style.backgroundColor="blue";

   
 }
 

 const gencomputerChoice=() => {
   let options=["rock","paper","scissors"]   // we have indexes 0,1,2 and we have to generate a number b/w 0to2 so any number less than 1 multiplied by 3 will be less than 3 so 
  const randomIdx= Math.floor(Math.random()*3)
   return options[randomIdx]
 }
 const compChoice=gencomputerChoice();
 

choices.forEach((choice) => {
    // console.log('choice',choice); 
  choice.addEventListener("click",() => {
      const userChoice=choice.getAttribute("id")
      console.log('choice was clicked',userChoice);
      playGame(userChoice);
  }
  )
}
)



reset.addEventListener("click",() => {
  console.log('Reset');
  userScore=0;
  comScore=0;
  console.log('user',userScore);
  
  userkascore.innerText=userScore;
  compkascore.innerText=comScore;
  msg.innerText="Play Your Move"
  msg.style.backgroundColor="#2cbbde"
}
)