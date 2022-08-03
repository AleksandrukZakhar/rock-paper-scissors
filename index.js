const items = ["👊", "✋", "✌️"];
const btn = document.querySelectorAll(".btn");
const playerWeapon = document.querySelector(".player-weapon");
const computerWeapon = document.querySelector(".computer-weapon");
let currentPlayerChoice = null;
let currentComputerChoice = null;
let playerScore = 0;
let computerScore = 0;

const getPlayerChoice = (data) => {
  const choice = data;
  currentPlayerChoice = choice;
  playerWeapon.textContent = choice;
  console.log(`Players choice ${choice}`);

  getComputerChoice();

  return choice;
};

const getComputerChoice = () => {
  const choice = items[Math.floor(Math.random() * 3)];
  currentComputerChoice = choice;
  computerWeapon.textContent = choice;
  console.log(`Computers choice ${choice}`);

  return choice;
};

btn.forEach((button) =>
  button.addEventListener("click", () =>
    getPlayerChoice(button.getAttribute("weapon-data"))
  )
);

const nullChoices = () => {
  currentPlayerChoice = null;
  currentComputerChoice = null;
  playerWeapon.textContent = "❔";
  computerWeapon.textContent = "❔";
};

const decideWin = () => {
  const current_case = currentPlayerChoice + " " + currentComputerChoice;

  const cases = ["👊 ✌️", "✌️ ✋", "✋ 👊"];

  if (
    current_case === cases[0] ||
    current_case === cases[1] ||
    current_case === cases[2]
  ) {
    playerScore += 1;
    alert(`${playerScore} ${computerScore}`);
    nullChoices();
    return;
  }

  if (currentPlayerChoice === currentComputerChoice) {
    playerScore += 0.5;
    computerScore += 0.5;
    alert(`${playerScore} ${computerScore}`);
    nullChoices();
    return;
  }

  computerScore += 1;
  alert(`${playerScore} ${computerScore}`);
  nullChoices();
  return;
};

const playRound = () => {
  console.log(currentPlayerChoice !== null);
  console.log(currentComputerChoice !== null);
  if (!currentPlayerChoice && !currentComputerChoice) {
    console.log(`Hello ${currentPlayerChoice}`);
    console.log(`Hello ${currentComputerChoice}`);
    setTimeout(() => playRound(), 100);
  }
  console.log(currentPlayerChoice !== null);
  console.log(currentComputerChoice !== null);
  if (currentPlayerChoice !== null && currentComputerChoice !== null) {
    console.log("there is player choice");
    decideWin();
  }
};

const playGame = () => {
  console.log(playerScore >= 5);
  console.log(computerScore >= 5);
  if (playerScore >= 5 || computerScore >= 5) {
    alert("Someone won");
    playerScore > computerScore
      ? alert(`You won with the score of ${playerScore}`)
      : alert(`Computer won with the score of ${computerScore}`);

    return;
  } else {
    playRound();
    playGame();
  }
};

playGame();
