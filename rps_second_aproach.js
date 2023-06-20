/*
First things first. Variables. Which of them we need
in the general scope? 

In the rock, paper, scissors game there's only two players
so we need to compare both inputs and add the result to their current score.
*/

let playerPlayRaw;
let playerPlay;
let round;
let playerScore = 0;
let computerScore = 0;
let singleRoundResult;
let i;
//Now we need a way to generate the computer play to assign to it's correspondent variable.

function getComputerChoice() {
    const possiblePlays = ["ROCK", "PAPER", "SCISSORS"];
    const guess = Math.floor(Math.random() * possiblePlays.length);
    const computerPlay = possiblePlays[guess];
    return computerPlay;
}

function playerPrompt() {
    playerPlayRaw = prompt("Make your play");
    console.log(`Your play is ${playerPlayRaw}!`)
    return playerPlay = playerPlayRaw.toUpperCase()
}

//Next we need to compare play inputs in order to see who's the winner of the round.

function singleRound(playerPlay, computerPlay) {

    if (playerPlay !== "ROCK" && playerPlay !== "PAPER" && playerPlay !== "SCISSORS"){
        return 3 // 3 = Invalid!
    }
    
    else if (playerPlay === "ROCK") {
        if (computerPlay === "SCISSORS") {
            return 1 // 1 = Win!
        }
        else if (computerPlay === "PAPER") {
            return 0 // 0 = Lose!
        } 
        else return 2 // 2 = Tie!;
    }
    
    else if (playerPlay === "PAPER") {
        if (computerPlay === "ROCK") {
            return 1 // 1 = Win!
        }
        else if (computerPlay === "SCISSORS") {
            return 0 // 0 = Lose!
        }
        else return 2 // 2 = Tie!;
    }

    else if (playerPlay === "SCISSORS") {
        if (computerPlay === "PAPER") {
            return 1 // 1 = Win!
        }
        else if (computerPlay === "ROCK") {
            return 0 // 0 = Lose!
        }
        else return 2 // 2 = Tie!;
    } 
    
}

//We need a function to add score to our opponents!

function scoring (){
    switch (singleRoundResult){
        case 0: 
            computerScore += 1;
            currentPlay.innerHTML = `<p>You lose! ${computerPlay} beats ${playerPlay}.</p>`;
            break;
        case 1:
            playerScore += 1;
            currentPlay.innerHTML = `<p>You win! ${playerPlay} beats ${computerPlay}.</p>`;
            break;
        case 2:
            i -= 1
            currentPlay.innerHTML = `<p>Tied round!</p>`;
            break;
    }

    playerScr.textContent = `${playerScore}`
    computerSrc.textContent = `${computerScore}`;
}

//The function below let us play a best-of-five match!

function game() {

    start.textContent = "Restart Game";
    round = 1;
    roundNum.textContent = round;
    playerScore = 0;
    playerScr.textContent = `${playerScore}`;
    computerScore = 0;
    computerSrc.textContent = `${computerScore}`;

    play.forEach((item) => {
        item.addEventListener('click', () => {
            round += 1;
            roundNum.textContent = round;
            playerPlay = item.name.toUpperCase();
            computerPlay = getComputerChoice();
            singleRoundResult = singleRound(playerPlay, computerPlay);
            scoring();
        });
    });
}
          
// RPS-UI 

const start = document.querySelector('#start');
const play = document.querySelectorAll('#plays');
const roundNum = document.querySelector('#roundNum');
const playerScr = document.querySelector('#playerScore');
const computerSrc = document.querySelector('#computerScore');
const currentPlay = document.querySelector('#currentPlay');
const buttons = document.querySelector('#buttons');


start.addEventListener('click', game);

function scoreCount()