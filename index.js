const items = ["rock", "paper", "scissors"];
const playerChoice = prompt("Choose your weapon").toLowerCase();

const computerChoice = () => items[Math.floor(Math.random() * 3)];

const playRound = () => {
  const current_case = playerChoice + " " + computerChoice();

  const cases = ["rock scissors", "scissors paper", "paper rock"];

  if (
    current_case === cases[0] ||
    current_case === cases[1] ||
    current_case === cases[2]
  ) {
    alert("You won");
    return;
  }

  alert("You lose");
  return;
};

playRound();
