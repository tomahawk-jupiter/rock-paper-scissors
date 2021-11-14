
// ROCK PAPER Scissors

// 1. A function that returns the computers move.
function computerPlay() {
  // array of possible moves.
  const movesArray = ['rock', 'paper', 'scissors'];
  // get a random number between 0 and 3.
  const randomNum = Math.floor(Math.random() * 3);
  // get a random idex from array.
  return movesArray[randomNum];
}

// 2. A function that plays one round by comparing moves.
function playRound(computerSelection, playerSelection) {
  // Case insensitive
  const c = computerSelection.toLowerCase();
  const p = playerSelection.toLowerCase();

  // I'm sure theres a more elegant way to get the result without chaining so many if/else statements!?
  
  // rock vs Scissors
  if (c === 'rock' && p === 'scissors'){
    return "You Lose! Rock beats Scissors.";
  // paper vs Rock
  } else if (c === 'paper' && p === 'rock'){
    return "You Lose! Paper beats Rock.";
  // scissors vs Paper
  } else if (c === "scissors" && p === "paper"){
    return "You Lose! Scissors beats Paper.";
  // rock vs Paper
} else if (c === "rock" && p === "paper"){
    return "You Win! Paper beats Rock.";
  // paper vs scissors
} else if (c === "paper" && p === "scissors"){
    return "You Win! Scissors beats Paper.";
  // scissors vs rock
} else if (c === "scissors" && p === "rock"){
    return "You Win! Rock beats Scissors.";
  //draw
} else if(c == p){
    return `Draw! ${c} draws with ${p}.`;
  }
}

// 3. A function that plays 5 rounds.
function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let round = 0; round < 5; round ++){
    const compMove = computerPlay();
    const playerMove = prompt("Please enter Rock, Paper, or Scissors:");
    const resultString = playRound(compMove, playerMove);

    // get the result of the round and add a point to the scores
    const winLose = resultString.split(" ")[1];
    if (winLose === 'Win!'){
      playerScore ++;
    } else if (winLose === 'Lose!'){
      computerScore ++;
    }
    // show result of round in the console
    console.log(resultString);
  }

  // Get the game result
  const gameResult =  playerScore > computerScore? "You won the game!"
  : playerScore < computerScore? "You lost the game!"
  : "Game was a draw!";

  // Show result of game in the console
  console.log(gameResult);
}

game();
