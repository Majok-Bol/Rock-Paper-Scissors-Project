function rockPaperScissors(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.toLowerCase(); /* playerSelection is made case insensitive to enable the player input choice such as rock,Rock,ROCK,RocK etc */
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win"; //rock beats scissors
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win"; // paper beats rock
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win"; // scissors beats paper
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You lose"; //scissors beats rock
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose"; // paper beats rock
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose"; // scissors beats paper
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It is a draw"; // draw
  } else if (playerSelection === "paper" && computerSelection === "paper") {
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
  // Generate a random number between 0 and 2.
  const randomNum = Math.floor(Math.random() * 3);
  // Assign rock,paper or scissors based on the random number
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  }
  if (randomNum === 2) {
    return "scissors";
  } else {
    return "Invalid selection";
    // something went wrong
  }
}
function game() {
  const playerSelection = prompt("Enter your choice:Rock,Paper,Scissors");
  // Get player's selection
  const computerSelection = getComputerChoice();
  // Get computer's selection
  const roundWinner = rockPaperScissors(playerSelection, computerSelection);
  // Determine won the round
  console.log(roundWinner);
  // Display the results of the round
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
