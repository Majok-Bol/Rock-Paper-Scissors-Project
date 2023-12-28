function rockPaperScissors(playerSelection, computerSelection) {
  // Make playerSelection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // Winning conditions
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win"; // Player wins
  } else if (
    // Losing conditions
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "You lose"; // Computer wins
  } else if (playerSelection === computerSelection) {
    return "It is a draw"; // Draw condition
  } else {
    return "Invalid player selection"; // Invalid selection
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
  } else if (randomNum === 2) {
    return "scissors";
  } else {
    return "Invalid selection";
    // something went wrong
  }
}

let round = 1;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const roundWinner = rockPaperScissors(playerSelection, computerSelection);

  // Display results in the 'results' div
  const resultsDiv = document.getElementById("results");

  // Create a new paragraph element
  const resultParagraph = document.createElement("p");

  // Set the content of the paragraph based on the game result
  resultParagraph.textContent = `Round ${round}: You chose ${playerSelection}, Computer chose ${computerSelection}. Result: ${roundWinner}`;

  // Append the paragraph to the 'results' div
  resultsDiv.appendChild(resultParagraph);

  // Update the round counter
  round++;
  // Update scores based on the round result
  if (roundWinner === "You win") {
    playerScore++;
  } else if (roundWinner === "You lose") {
    computerScore++;
  }

  // Check if all 6 rounds are completed
  if (round > 5) {
    // Display overall results
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = `Game over! Final scores:
    - Player: ${playerScore}
    - Computer: ${computerScore}
  `;

    // Determine and display the overall winner
    const overallWinner =
      playerScore > computerScore
        ? "Player"
        : computerScore > playerScore
        ? "Computer"
        : "It's a tie!";
    resultsDiv.textContent += `\nOverall winner: ${overallWinner}`;

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.onclick = restartGame;
    resultsDiv.appendChild(restartButton);
  }
}
// ... (existing code)

function restartGame() {
  // Reset the round counter
  round = 1;

  // Clear the contents of the 'results' div
  const resultsDiv = document.getElementById("results");
  while (resultsDiv.firstChild) {
    resultsDiv.removeChild(resultsDiv.firstChild);
  }

  // Reset scores for a fresh game
  playerScore = 0;
  computerScore = 0;
}

// ... (existing code)

if (round > 5) {
  //

  restartGame();
}
