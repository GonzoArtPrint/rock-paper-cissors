

function getHumanChoice () { let userAnswer = prompt ("Please choose: ROCK, PAPER or SCISSORS");
    return userAnswer;
}
getHumanChoice()

let x = Math.floor(Math.random()*3);

function getComputerChoice(x) { 

    if (x == 0) { alert ("ROCK")};
    if (x == 1) { alert ("PAPER")};
    if (x == 2) { alert ("SCISSORS")};
    }
    
    getComputerChoice(x)