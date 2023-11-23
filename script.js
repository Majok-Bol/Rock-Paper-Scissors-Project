function rockPaperScissors(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSeleciton === "scissors") {
    return "You win";
  } else if (playerSelection === "paper" && computerSeleciton === "rock") {
    return "You win";
  } else if (playerSelection === "scissors" && computerSeleciton === "paper") {
    return "You win";
  } else if (playerSelection === "rock" && computerSeleciton === "scissors") {
    return "You lose";
  } else if (playerSelection === "rock" && computerSeleciton === "paper") {
    return "You lose";
  } else if (playerSelection === "paper" && computerSeleciton === "scissors") {
    return "You lose";
  } else if (playerSelection === "rock" && computerSeleciton === "rock") {
    return "It is a draw";
  } else if (playerSelection === "paper" && computerSeleciton === "paper") {
    return "It is a draw";
  } else if (
    playerSelection === "scissors" &&
    computerSeleciton === "scissors"
  ) {
    return "It is a draw";
  } else {
    return "Invalid player selection";
  }
}
