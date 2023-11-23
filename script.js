function rockPaperScissors(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.toLowerCase(); /* playerSelection is made case insensitive to enable the player input choice such as rock,Rock,ROCK,RocK etc */
  if (playerSelection === "rock" && computerSeleciton === "scissors") {
    return "You win"; //rock beats scissors
  } else if (playerSelection === "paper" && computerSeleciton === "rock") {
    return "You win"; // paper beats rock
  } else if (playerSelection === "scissors" && computerSeleciton === "paper") {
    return "You win"; // scissors beats paper
  } else if (playerSelection === "rock" && computerSeleciton === "scissors") {
    return "You lose"; //scissors beats rock
  } else if (playerSelection === "rock" && computerSeleciton === "paper") {
    return "You lose"; // paper beats rock
  } else if (playerSelection === "paper" && computerSeleciton === "scissors") {
    return "You lose"; // scissors beats paper
  } else if (playerSelection === "rock" && computerSeleciton === "rock") {
    return "It is a draw"; // draw
  } else if (playerSelection === "paper" && computerSeleciton === "paper") {
    return "It is a draw"; // draw
  } else if (
    playerSelection === "scissors" &&
    computerSeleciton === "scissors"
  ) {
    return "It is a draw"; // draw
  } else {
    return "Invalid player selection"; // invalid selection
  }
}
