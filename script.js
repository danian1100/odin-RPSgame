let humanScore = 0;
let computerScore = 0;

const div = document.querySelector("div");

const h2 = document.createElement("h2");
h2.textContent = `Choose one of the buttons above!`;
div.appendChild(h2);

function getHumanChoice() {
  const rock = document.querySelector(".rock");
  rock.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) playRound("rock");
  });

  const paper = document.querySelector(".paper");
  paper.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) playRound("paper");
  });

  const scissors = document.querySelector(".scissors");
  scissors.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) playRound("scissors");
  });
}

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  if (n === 0) return "rock";
  else if (n === 1) return "paper";
  else return "scissors";
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let result;

  if (
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    humanScore++;
    result = "You win!";
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++;
    result = "Computer wins!";
  } else result = "It's a tie!";

  cleanBoard();

  UpdateDom(humanChoice, computerChoice, result);

  if (humanScore >= 5 || computerScore >= 5) playFinalResult();
}

function playFinalResult() {
  let ftext;

  if (humanScore > computerScore) ftext = "Congratulations, you win the war!";
  else ftext = "Boo, you suck!";

  const divfs = document.createElement("div");
  divfs.classList.add("finalScore");
  document.body.appendChild(divfs);

  const fs = document.querySelector(".finalScore");
  fs.style.display = "block";

  const h3 = document.createElement("h3");
  h3.innerHTML = `Final Score: <br> You - ${humanScore} CPU - ${computerScore}
    <br> ${ftext}`;
  fs.appendChild(h3);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");

  const btnRestart = document.createElement("button");
  btnRestart.classList.add("btnRestart");
  btnRestart.innerText = "Restart";
  btnRestart.addEventListener("click", () => {
    restart();
  });

  // const btnContainer = document.querySelector(".btnContainer");
  // btnContainer.innerHTML = "";
  btnContainer.appendChild(btnRestart);
  document.body.appendChild(btnContainer);
}

function UpdateDom(humanChoice, computerChoice, result) {
  const div = document.querySelector(".message");
  div.style.display = "block";

  const phuman = document.createElement("p");
  phuman.textContent = `You: ${humanChoice}`;
  div.appendChild(phuman);

  const ppc = document.createElement("p");
  ppc.textContent = `Machine: ${computerChoice}`;
  div.appendChild(ppc);

  const round = document.createElement("p");
  round.textContent = `${result}`;
  div.appendChild(round);
}

function cleanBoard() {
  const div = document.querySelector(".message");
  div.innerHTML = "";
}

function restart() {
  humanScore = 0;
  computerScore = 0;

  document.querySelector(".message").innerHTML = "";
  document.querySelector(".finalScore").innerHTML = "";
  document.querySelector(".btnContainer").innerHTML = "";

  document.querySelector(".finalScore").style.display = "none";
  document.querySelector(".message").style.display = "none";
}

getHumanChoice();
