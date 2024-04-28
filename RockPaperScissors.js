const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

//sets up 1 round of play.
function playRound(playerChoice) {
  const computerChoice = Math.floor(Math.random() * choices.length);
  const computer = choices[computerChoice];

  let result = '';

  if (playerChoice === computer) {
    result = 'Its a Tie!';
  } else {
    switch (playerChoice) {
      case 'rock':
        result = computer === 'scissors' ? 'You Win!' : 'You Lose!';
        break;
      case 'paper':
        result = computer === 'rock' ? 'You Win!' : 'You Lose!';
        break;
      case 'scissors':
        result = computer === 'paper' ? 'You Win!' : 'You Lose!';
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computer}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove('greenText', 'redText');

  switch (result) {
    case 'You Win!':
      resultDisplay.classList.add('greenText');
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case 'You Lose!':
      resultDisplay.classList.add('redText');
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}

function reset() {
  playerScore = 0;
  playerScoreDisplay.textContent = playerScore;

  computerScore = 0;
  computerScoreDisplay.textContent = computerScore;
}
