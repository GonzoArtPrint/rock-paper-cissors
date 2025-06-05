function getHumanChoice() {

    let userAnswer = prompt("Please choose: rock, paper or scissors");
    return userAnswer.toLowerCase ()
}
function getComputerChoice() { const randomValue = Math.floor(Math.random() * 3);

    if (randomValue == 0) { return "rock" }
    if (randomValue == 1) { return "paper" }
    if (randomValue ==2) { return "scissors" }
}
let humanScore = 0;
let computerScore = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
let roundPlayed = 0;

function playGame () { 



function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    roundPlayed++;
    console.log ("You win, rock breaks scissors.");
  }
  else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    roundPlayed++;
    console.log ("You lose, paper covers rock.");
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    roundPlayed++;
    console.log ("You win, paper covers rock.");
  }
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    roundPlayed++;
    console.log ("You lose, scissors cut paper.");
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    roundPlayed++;
    console.log ("You win, scissors cut paper.");
  }
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    roundPlayed++;
    console.log ("You lose, rock breaks scissors.");
  }
  else if (humanChoice === computerChoice) {
    roundPlayed++;
    console.log ("No winner, it's a draw!") 
  }
}

playRound(humanChoice, computerChoice)

console.log ("ROUND :",roundPlayed);
console.log ("Human choice :",humanChoice);
console.log ("Computer choice :",computerChoice);
console.log ("Human score :",humanScore);
console.log ("Computer score :",computerScore);


for (let i=0;i<4;i++) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

console.log ("ROUND :",roundPlayed);
console.log ("Human choice :",humanChoice);
console.log ("Computer choice :",computerChoice);
console.log ("Human score :",humanScore);
console.log ("Computer score :",computerScore);
}

if (roundPlayed === 5 && humanScore === computerScore) {
console.log ("Game over : It's a draw!")
}
else if (roundPlayed === 5 && humanScore > computerScore){
console.log ("Game over : YOU WIN!!")
}
else if (roundPlayed === 5 && humanScore < computerScore){
console.log ("Game over : YOU LOSE!!")
}
}
playGame()
