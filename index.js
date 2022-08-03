const items = ["👊", "✋", "✌️"];
const btn = document.querySelectorAll(".btn");
const playerWeapon = document.querySelector(".player-weapon");
const computerWeapon = document.querySelector(".computer-weapon");
const ruleTitle = document.querySelector(".rule-title");
let playerScore = 0;
let computerScore = 0;

const updateWeapons = (playerChoice, computerChoice) => {
  playerWeapon.textContent = playerChoice;
  computerWeapon.textContent = computerChoice;
};

const getComputerChoice = () => items[Math.floor(Math.random() * 3)];

const processChoices = (playerChoice, computerChoice) => {
  updateWeapons(playerChoice, computerChoice);
  gameLoop(playerChoice, computerChoice);
};

const updateRule = (str) => {
  ruleTitle.textContent = str;
};

const playGame = (playerChoice, computerChoice) => {
  const current_case = playerChoice + " " + computerChoice;
  const cases = ["👊 ✌️", "✌️ ✋", "✋ 👊"];

  if (
    current_case === cases[0] ||
    current_case === cases[1] ||
    current_case === cases[2]
  ) {
    playerScore += 1;
    updateRule(`Your score ${playerScore} computer ${computerScore}`);
  } else if (playerChoice === computerChoice) {
    playerScore += 0.5;
    computerScore += 0.5;
    updateRule(`Your score ${playerScore} computer ${computerScore}`);
  } else {
    computerScore += 1;
    updateRule(`Your score ${playerScore} computer ${computerScore}`);
  }
};

const gameLoop = (playerChoice, computerChoice) => {
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore > computerScore
      ? updateRule(`You won with the score of ${playerScore}`)
      : updateRule(`Computer won with the score of ${computerScore}`);
  } else {
    playGame(playerChoice, computerChoice);
  }
};

btn.forEach((button) =>
  button.addEventListener("click", () =>
    processChoices(button.getAttribute("weapon-data"), getComputerChoice())
  )
);
