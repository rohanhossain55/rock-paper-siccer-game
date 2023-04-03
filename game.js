const readline = require('readline');
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;

  if (playerChoice === computerChoice) {
    result = "Tie!";
  } else if (playerChoice === "rock") {
    result = computerChoice === "paper" ? "You lose!" : "You win!";
  } else if (playerChoice === "paper") {
    result = computerChoice === "scissors" ? "You lose!" : "You win!";
  } else if (playerChoice === "scissors") {
    result = computerChoice === "rock" ? "You lose!" : "You win!";
  }

  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }

  console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`);
}

function game() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let roundsPlayed = 0;
  rl.question(`Enter 'rock', 'paper', or 'scissors' to start playing: `, (playerChoice) => {
    const choice = playerChoice.trim().toLowerCase();
    if (choices.includes(choice)) {
      playRound(choice);
      roundsPlayed++;
    } else {
      console.log(`Invalid choice, please choose 'rock', 'paper', or 'scissors'`);
    }

    if (roundsPlayed < 5) {
      game();
    } else {
      console.log(`Final Score: Player ${playerScore} - ${computerScore} Computer`);
      rl.close();
    }
  });
}

game();
