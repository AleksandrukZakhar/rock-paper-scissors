const items = ["👊", "✋", "✌️"];
const btn = document.querySelectorAll(".btn");
const playerWeapon = document.querySelector(".player-weapon");
const computerWeapon = document.querySelector(".computer-weapon");
const ruleTitle = document.querySelector(".rule-title");
const playAgainElement = document.querySelector(".play-again");
const win = document.querySelector(".win");
const countdownElement = document.querySelector(".countdown");
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

const playAgain = (text) => {
  let count = 5;
  playAgainElement.classList.replace("hidden", "show");
  win.textContent = text;

  const countdown = setInterval(() => {
    if (count > 0) {
      count -= 1;
      countdownElement.textContent = `Game will restart in ${count}...`;
    } else {
      playAgainElement.classList.replace("show", "hidden");
      count = 5;
      clearInterval(countdown);
    }
  }, 1000);

  playerScore = 0;
  computerScore = 0;
  updateRule("First player that gets 5 points wins");
};

const gameLoop = (playerChoice, computerChoice) => {
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore > computerScore
      ? playAgain(`You won with the score of ${playerScore}`)
      : playAgain(`Computer won with the score of ${computerScore}`);
  } else {
    playGame(playerChoice, computerChoice);
  }
};

btn.forEach((button) =>
  button.addEventListener("click", () =>
    processChoices(button.getAttribute("weapon-data"), getComputerChoice())
  )
);
