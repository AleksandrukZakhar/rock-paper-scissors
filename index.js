const items = ["rock", "paper", "scissors"];
const playerChoice = () => prompt("Choose your weapon").toLowerCase();
const computerChoice = () => items[Math.floor(Math.random() * 3)];
let playerScore = 0;
let computerScore = 0;

const playRound = () => {
  const current_case = playerChoice() + " " + computerChoice();

  const cases = ["rock scissors", "scissors paper", "paper rock"];

  if (
    current_case === cases[0] ||
    current_case === cases[1] ||
    current_case === cases[2]
  ) {
    playerScore += 1;
    alert("You won");
    return;
  }

  alert("You lose");
  computerScore += 1;
  return;
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  playerScore > computerScore
    ? alert(`You won with the score of ${playerScore}`)
    : alert(`Computer won with the score of ${computerScore}`);
};

playGame();
