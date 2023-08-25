function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  const buttons = document.querySelectorAll('button');
  const resultDiv = document.getElementById('result');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      resultDiv.textContent = roundResult;
  
      // Update scores and display winner after 5 rounds
      // ... (same as previous code)
    });
  });
  
  // Rest of the code remains the same
  