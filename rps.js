

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
let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore=+1;
    console.log ("You win, rock breaks scissors.");
  }
  else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore=+1;
    console.log ("You lose, paper covers rock.");
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore=+1;
    console.log ("You win, paper covers rock.");
  }
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore=+1;
    console.log ("You lose, scissors cut paper.");
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore=+1;
    console.log ("You win, scissors cut paper.");
  }
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore=+1;
    console.log ("You lose, rock breaks scissors.");
  }
  else if (humanChoice === computerChoice) {
    console.log ("No winner, it's a draw!") 
  }
}

playRound(humanChoice, computerChoice)

console.log (humanChoice);
console.log (computerChoice);
console.log (humanScore);
console.log (computerScore);



