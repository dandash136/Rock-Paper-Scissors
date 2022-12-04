var address;

function getComputerChoice() {

      //This function returns Rock Paper or Scissors
      var randomNumber = Math.floor(Math.random() * 3) + 1 ; 
      var computerChoice;
      
      if (randomNumber === 1) {
            computerChoice = "Rock";
            address = "Rock.png"
      }else if (randomNumber === 2){
            computerChoice = "Paper";
            address = "Paper.png"

      }else {
            computerChoice = "Scissor";
            address = "Scissors.png"
      }
      return computerChoice ; 
}

function playRound(playerSelection ,computerSelection){
      // a function that plays a single round of
      // Rock Paper Scissors. The function should 
      //take two parameters - the playerSelection
      // and computerSelection - and then return a 
      //string that declares the winner of the round
      // like so: "You Lose! Paper beats Rock"
      var  whowin;
      
      switch(computerSelection) {
            case "Rock" :
                  if (playerSelection === "Rock") {whowin = "It\' a null";}
                  else if(playerSelection === "Paper") {whowin = "You win! Paper beats Rock"}
                  else {whowin = "You lose! Rock beats Scissors"}
                  break;
            case "Paper":
                  if (playerSelection === "Rock") {whowin = "You lose! Paper beats Rock"}
                  else if(playerSelection === "Paper") {whowin = "It\' a null"}
                  else {whowin = "You win! Scissors beats Paper"}
                  break;
            case "Scissors" :
                  if (playerSelection === "Rock") {whowin = "You win! Rock beats Scissors"}
                  else if(playerSelection === "Paper") {whowin = "You lose! Scissors beats Paper"}
                  else {whowin = "It\'s a null"}
                  break;
            default :
                  whowin = "Opps , Something went wrong ,Retry";

      
      }
      return whowin;
}

/*
function game(){
      let round = 0;
      for (let i = 0 ; i < 5 ; i++) {
            round += 1 ; 
            const computerChoice = getComputerChoice();
            const playerChoice = prompt("Rock , Paper , Scissors : ");
            console.log(`RESULT ROUND ${round}`)
            playRound(playerChoice , computerChoice);
      }
}
*/


//console.log(game());
let score ; 
const result = document.querySelector("#result");
result.textContent = "Good luck";

let player = document.querySelector("#player");
player.src = "";


let computer = document.querySelector("#computer");
computer.src = "";

const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
     button.addEventListener('click' , () => {
     const winner =  playRound(button.id , getComputerChoice());
     //result.style.color = "red";
     player.src = button.name ;
     computer.src = address;




     result.textContent= winner;

     }) ;
});




