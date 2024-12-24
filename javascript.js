let humanScore = 0;
let computerScore = 0;

getHumanChoice();

const div = document.querySelector("div");

const h2 = document.createElement("h2");
h2.textContent = `Choose one of the buttons above!`
div.appendChild(h2);

function getHumanChoice() {
    
    const rock = document.querySelector(".rock");
        rock.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5)
            playRound("rock");
    });

    const paper = document.querySelector(".paper");
        paper.addEventListener("click",  () => {
        if (humanScore < 5 && computerScore < 5)
            playRound("paper");
    });

    const scissors = document.querySelector(".scissors")
        scissors.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5)
            playRound("scissors");
    });
}

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    if (n === 0) 
        return "rock";
    else if (n === 1) 
        return "paper";
    else 
        return "scissors";
}

function playRound(humanChoice){
    computerChoice = getComputerChoice();
    let result;

    if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        result = "You win!";
    } 
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        result = "You win!";
    } 
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++; 
        result = "You win!";
    } 
    else if (humanChoice == "rock" && computerChoice == "paper"){
       computerScore++; 
       result = "Computer wins!";
    } 
    else if (humanChoice == "paper" && computerChoice == "scissors"){
       computerScore++;
        result = "Computer wins!";
    } 
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        result = "Computer wins!";
    } 
    else 
        result = "It's a tie!";

    UpdateDom(humanChoice, computerChoice, result);

    if (humanScore >= 5 || computerScore >= 5)
        playFinalResult(); 
}

function playFinalResult(){
    let ftext;

    if (humanScore > computerScore)
        ftext = "Congratulations, you win the war!"
    else
        ftext = "Boo, you suck!"

    const div = document.querySelector("div");

    const h3 = document.createElement("h3");
    h3.innerHTML = `Final Score:<br>You - ${humanScore} CPU - ${computerScore}
    <br>${ftext}`;
    div.appendChild(h3);

}

function UpdateDom(humanChoice, computerChoice, result) {

    const div = document.querySelector("div");

    const phuman = document.createElement("p");
    phuman.textContent = `You: ${humanChoice}`
    div.appendChild(phuman);

    const ppc = document.createElement("p");
    ppc.textContent = `Machine: ${computerChoice}`;
    div.appendChild(ppc);

    const round = document.createElement("p");
    round.textContent = `${result}`;
    div.appendChild(round);
}