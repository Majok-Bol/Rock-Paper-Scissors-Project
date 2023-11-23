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
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  }
  if (randomNum === 2) {
    return "scissors";
  } else {
    return "Invalid selection";
  }
}
function game() {
  const playerSelection = prompt("Enter your choice:Rock,Paper,Scissors");
  const computerSelection = getComputerChoice();
  const roundWinner = rockPaperScissors(playerSelection, computerSelection);
  console.log(roundWinner);
  if (roundWinner === "You win") {
    console.log("You won the round");
  } else if (roundWinner === "You lose") {
    console.log("You lost the round");
  } else if (roundWinner === "It is a draw") {
    console.log("The game is a draw");
  } else {
    console.log("Invalid move");
  }
}
game();
