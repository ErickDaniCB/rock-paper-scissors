/*
First things first. Variables. Which of them we need
in the general scope? 

In the rock, paper, scissors game there's only two players
so we need to compare both inputs and add the result to their current score.
*/

let playerPlay;
let round;
let playerScore = 0;
let computerScore = 0;
let singleRoundResult;
//Now we need a way to generate the computer play to assign to it's correspondent variable.

function getComputerChoice() {
    const possiblePlays = ["ROCK", "PAPER", "SCISSORS"];
    const guess = Math.floor(Math.random() * possiblePlays.length);
    const computerPlay = possiblePlays[guess];
    return computerPlay;
};


//Next we need to compare play inputs in order to see who's the winner of the round.

function singleRound(playerPlay, computerPlay) {
    switch(playerPlay){
        case "ROCK":
            if (computerPlay === "SCISSORS") {
                return 1 // Win!
            }
            else if (computerPlay === "PAPER") {
                return 0 // Lose!
            } 
            else return 2 // Tie!
        break;
        case "SCISSORS":
            if (computerPlay === "PAPER") {
                return 1 // 1 = Win!
            }
            else if (computerPlay === "ROCK") {
                return 0 // 0 = Lose!
            } 
            else return 2 // Tie!
        break;
        case "PAPER":
            if (computerPlay === "ROCK") {
                return 1 // 1 = Win!
            }
            else if (computerPlay === "SCISSORS") {
                return 0 // 0 = Lose!
            } 
            else return 2 // Tie!
        break;
    }
};

//We need a function to add score to our opponents!

function scoring (){
    switch (singleRoundResult){
        case 0: 
            computerScore += 1;
            currentPlay.textContent = `You lose! ${computerPlay} beats ${playerPlay}.`;
            break;
        case 1:
            playerScore += 1;
            currentPlay.textContent = `You win! ${playerPlay} beats ${computerPlay}.`;
            break;
        case 2:
            currentPlay.textContent = `Tied round!`;
            break;
    }

    playerScr.textContent = `${playerScore}`;
    computerSrc.textContent = `${computerScore}`;
};

function endChecker (playerScore, computerScore) {
    if(playerScore === 5){
        currentPlay.textContent = `You won the match!`;
        playButtons.forEach(button => {
            button.removeEventListener('click', buttonPlay);
        });
    }
    else if (computerScore === 5){
        currentPlay.textContent = `You lost the match!`;
        playButtons.forEach(button => {
            button.removeEventListener('click', buttonPlay);
        });
    }
};

   
// RPS-UI 

const start = document.querySelector('#start');
const playButtons = document.querySelectorAll('#plays');
const roundNum = document.querySelector('#roundNum');
const playerScr = document.querySelector('#playerScore');
const computerSrc = document.querySelector('#computerScore');
const currentPlay = document.querySelector('#currentPlay');

start.addEventListener('click', game);

function game () {
    round = 1;
    roundNum.textContent = round;
    playerScore = 0;
    playerScr.textContent = playerScore;
    computerScore = 0;
    start.textContent = "Restart Game";
    computerSrc.textContent = computerScore;
    playButtons.forEach(button => {
        button.addEventListener('click', buttonPlay);
    });
};

function buttonPlay () {
    playerPlay = this.name.toUpperCase();
    computerPlay = getComputerChoice();
    singleRoundResult = singleRound(playerPlay, computerPlay);
    if(singleRoundResult !== 2 && round < 9){
        round += 1;
        roundNum.textContent = round;
    };
    scoring();
    endChecker(playerScore, computerScore);
};


