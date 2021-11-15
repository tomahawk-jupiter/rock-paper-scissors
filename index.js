
// ROCK PAPER Scissors

// 1. A function that returns the computers move.
function computerPlay() {
  const movesArray = ['rock', 'paper', 'scissors'];
  // get a random number between 0 and 3.
  const randomNum = Math.floor(Math.random() * 3);
  return movesArray[randomNum];
}

// 2. A function that plays one round by comparing moves.
function playRound(computerSelection, playerSelection) {
  // Case insensitive
  const c = computerSelection.toLowerCase();
  const p = playerSelection.toLowerCase();
  let result;
  // rock vs Scissors
  if (c === 'rock' && p === 'scissors'){
    result = ["You Lose! Rock beats Scissors.", 1, 0];
  // paper vs Rock
  } else if (c === 'paper' && p === 'rock'){
    result = ["You Lose! Paper beats Rock.", 1, 0];
  // scissors vs Paper
  } else if (c === "scissors" && p === "paper"){
    result = ["You Lose! Scissors beats Paper.", 1, 0];
  // rock vs Paper
} else if (c === "rock" && p === "paper"){
    result = ["You Win! Paper beats Rock.", 0, 1];
  // paper vs scissors
} else if (c === "paper" && p === "scissors"){
    result = ["You Win! Scissors beats Paper.", 0, 1];
  // scissors vs rock
} else if (c === "scissors" && p === "rock"){
    result = ["You Win! Rock beats Scissors.", 0, 1];
  //draw
} else if(c == p){
    result = [`Draw! ${c} draws with ${p}.`, 0, 0];
  }
  // The numbers in the returned array are used to tally scores
  return result;
}

const displayResult = document.querySelector('.result');
let playerScoreCount = 0;
let computerScoreCount = 0;

const handleClick = (e) => {
  const playerMove = e.target.value;
  const computerMove = computerPlay();
  const roundResult = playRound(computerMove, playerMove);
  let playerScore = document.querySelector('.playerScore');
  let computerScore = document.querySelector('.computerScore');

  playerScoreCount += roundResult[2];
  computerScoreCount += roundResult[1];

  displayResult.innerText = roundResult[0];
  playerScore.innerText = playerScoreCount;
  computerScore.innerText = computerScoreCount;

  // End the game when score gets to 5
  // Reset scores to start new game
  if(playerScoreCount >= 5){
    displayResult.innerText = 'You won the game! Click to play again.';
    playerScoreCount = 0;
    computerScoreCount = 0;
  }
  if(computerScoreCount >= 5){
    displayResult.innerText = 'You lost the game! Click to play again.';
    playerScoreCount = 0;
    computerScoreCount = 0;
  }
}

const playButton = document.querySelectorAll('button');
playButton.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
