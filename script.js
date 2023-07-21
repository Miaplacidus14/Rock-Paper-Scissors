const container = document.querySelector('.results');
const results = document.querySelector
const paragraph = document.createElement('p');
const computerChoice = document.createElement('p')
container.appendChild(computerChoice);
container.appendChild(paragraph);
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    number = Math.floor(Math.random() * 3);
    if (number === 0) {
        computerChoice.textContent = "Computer choice : rock";
        return 'rock';
    } else if (number === 1) {
        computerChoice.textContent = "Computer choice : paper";
        return 'paper';
    } else {
        computerChoice.textContent = "Computer choice : scissors";
        return 'scissors';
    }

}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        paragraph.textContent =  'You Win! Rock beats Scissors';
        document.querySelector('.player-score').textContent = `Player : ${++playerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        paragraph.textContent = 'You Win! Paper beats Rock';
        document.querySelector('.player-score').textContent = `Player : ${++playerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        paragraph.textContent = 'You Win! Scissors beats Paper';
        document.querySelector('.player-score').textContent = `Player : ${++playerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        paragraph.textContent = 'You Lose! Rock beats Scissors';
        document.querySelector('.computer-score').textContent = `Computer : ${++computerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        paragraph.textContent = 'You Lose! Paper beats Rock';
        document.querySelector('.computer-score').textContent = `Computer : ${++computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        paragraph.textContent = 'You Lose! Scissors beats Paper';
        document.querySelector('.computer-score').textContent = `Computer : ${++computerScore}`;
    } else {
        paragraph.textContent = "Equal !";
    }
    if (computerScore === 5) {
        paragraph.textContent = 'Stop !, You Lose, Computer haves 5 points';
        computerScore = 0
        playerScore = 0
        document.querySelector('.computer-score').textContent = `Computer : ${computerScore}`;
        document.querySelector('.player-score').textContent = `Player : ${playerScore}`;
    } else if (playerScore === 5) {
        paragraph.textContent = 'Stop !, You Win, You have 5 points';
        computerScore = 0
        playerScore = 0
        document.querySelector('.computer-score').textContent = `Computer : ${computerScore}`;
        document.querySelector('.player-score').textContent = `Player : ${playerScore}`;
    }
}

