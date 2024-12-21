function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    if (n === 0) 
        return "rock";
    else if (n === 1) 
        return "paper";
    else 
        return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Choose between rock, paper and scissors").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        return "You win!";
    } 
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return "You win!";
    } 
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++; 
        return "You win!";
    } 
    else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++; 
        return "Computer wins!";
    } 
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        return "Computer wins!";
    } 
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return "Computer wins!";
    } 
    else 
        return "It's a tie!";
}

function playGame(){

    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log("-------------");
    }

    if (humanScore > computerScore)
        return "Congratulations, you win the war!"
    else if (humanScore < computerScore)
        return "Boo, you suck!"
    else
        return "Han, a ... tie?"
}

let humanScore = 0;
let computerScore = 0;

console.log(playGame());