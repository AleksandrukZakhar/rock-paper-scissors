const items = ["rock", "paper", "scissors"];
const playerChoice = prompt("Choose your weapon");

const computerChoice = () => items[Math.floor(Math.random() * 3)];
