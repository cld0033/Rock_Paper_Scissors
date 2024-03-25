//allows the computer to randomly make a choice.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    let opponentMove = choices[random]
    return opponentMove;
    }


//sets up 1 round of play.
function playRound(playerSelection, computerSelection) {

   if (playerSelection === computerSelection) {
        return "Tie!";
    } 
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win! " + playerSelection + " Beats " + computerSelection;
    } 
    else {
        return "You Lose! " + computerSelection + " Beats " + playerSelection;
    }
}

//Sets up a game of 5 rounds.
function playGame() {

    for (let i = 1; i <= 5; i++) {
        const playerChoice = prompt("Rock, Paper, Scissors?");
        const playerSelection = playerChoice.toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        alert("Round " + i + "\n" + result);
    }
}

playGame();