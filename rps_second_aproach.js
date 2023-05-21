/*
First things first. Variables. Which of them we need
in the general scope? 

In the rock, paper, scissors game there's only two players
so we need to compare both inputs and add the result to their current score.
*/

let possiblePlays = ["ROCK", "PAPER", "SCISSORS"];
let playerPlayRaw = "";
let playerPlay = "";
let playerScore = 0;
let computerScore = 0;
let singleRoundResult; 
let i;
//Now we need a way to generate the computer play to assign to it's correspondent variable.

function getComputerChoice() {
    let guess = Math.floor(Math.random() * possiblePlays.length);
    return computerPlay = possiblePlays[guess]; 
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
            console.log(`You lose! ${computerPlay} beats ${playerPlay}.`)
        break;
        case 1:
            playerScore += 1;
            console.log(`You win! ${playerPlay} beats ${computerPlay}.`)
        break;
        case 2:
            i -= 1
            console.log(`Tie!`);
        break;
        case 3:
            i -= 1;
            console.log(`Invalid play!`);
        break;
    }

    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
}

//The function below let us play the game 5 times in a row. 

function game() {
   
    playerScore = 0;
    computerScore = 0;
    i = 1;

    for (i; i <= 5; i++) {
        if (playerScore === 3) {
            console.log(`Congratulations, you won the match!`)
            i = 6;
        } 
        else if (computerScore === 3) {
            console.log(`Sorry, you lost the match!`)
            i = 6;
        }
        else {
            console.log(`Round ${i}!`);
            let computerPlay = getComputerChoice();
            playerPrompt();
            switch (i) {
                case 1:
                    singleRoundResult = singleRound(playerPlay, computerPlay);
                    scoring();
                    break;
                case 2:
                    singleRoundResult = singleRound(playerPlay, computerPlay);
                    scoring();
                    break;
                case 3:
                    singleRoundResult = singleRound(playerPlay, computerPlay);
                    scoring();
                    break;
                case 4:
                    singleRoundResult = singleRound(playerPlay, computerPlay);
                    scoring();
                    break;
                case 5:
                    singleRoundResult = singleRound(playerPlay, computerPlay);
                    scoring();
                    break;
            }
        }
    }

}
