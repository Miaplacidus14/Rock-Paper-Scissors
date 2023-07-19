function getComputerChoice () {
    number = Math.floor(Math.random() * 3);
    if (number === 0) {
        console.log("Computer choice's : rock");
        return 'rock';
    } else if (number === 1) {
        console.log("Computer choice's : paper");
        return 'paper';
    } else {
        console.log("Computer choice's : scissors");
        return 'scissors';
    }

}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else {
        return "Equal !"
    }
}

function game () {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please choose between rock, paper and scissors!")
        let round = playRound(playerSelection, getComputerChoice());
        console.log(round)
        if (round.slice(0, 7) === 'You Win') {
            playerScore++
        } else if (round.slice(0, 8) === 'You Lose') {
            computerScore++
        } else {
            computerScore++
            playerScore++
        }
    }
    if (computerScore > playerScore) {
        return 'Computer Win!'
    } else if (computerScore < playerScore) {
        return 'You Win!'
    } else {
        return 'Equal!'
    }
}

console.log(game())