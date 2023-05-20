/*
First things first. Variables. Which of them we need
in the general scope? 

In the rock, paper, scissors game there's only two players
so we need to compare both inputs and add the result to their current score.
*/

let possiblePlays = ["ROCK", "PAPER", "SCISSORS"];
let playerPlayRaw = "";
let playerPlay = "";
//let computerPlay = ""
//let playerScore = 0;
//let computerScore = 0;

//Now we need a way to generate the computer play to assign to it's correspondent variable.

function getComputerChoice(){
    let guess = Math.floor(Math.random() * possiblePlays.length);
    return computerPlay = possiblePlays[guess]; 
}

function playerPrompt() {
    playerPlayRaw = prompt("Make your play");
    console.log(`Your play is ${playerPlayRaw}!`)
    return playerPlay = playerPlayRaw.toUpperCase()
}

//Next we need to compare play inputs in order to see who's the winner of the round.

function singleRound(playerPlay, computerPlay){
    
    if (playerPlay === "ROCK"){
        if (computerPlay === "SCISSORS"){
            return `You win! ${playerPlay} beats ${computerPlay}.`;
        }
        else if (computerPlay === "PAPER"){
            return `You lose! ${computerPlay} beats ${playerPlay}.`;
        } 
        else return `It's a tie!`;
    }
    
    else if (playerPlay === "PAPER"){
        if (computerPlay === "ROCK"){
            return `You win! ${playerPlay} beats ${computerPlay}.`;
        }
        else if (computerPlay === "SCISSORS"){
            return `You lose! ${computerPlay} beats ${playerPlay}.`;
        }
        else return `It's a tie!`;
    }

    else if (playerPlay === "SCISSORS"){
        if (computerPlay === "PAPER"){
            return `You win! ${playerPlay} beats ${computerPlay}.`;
        }
        else if (computerPlay === "ROCK"){
            return `You lose! ${computerPlay} beats ${playerPlay}.`;
        }
        else return `It's a tie!`;
    } else alert("Invalid play!");
    
}

//The function below let us play the game 5 times in a row. 

function game(){
    for (let i = 1; i <= 5; i++){
        console.log(`Round ${i}!`);
        let computerPlay = getComputerChoice();
        playerPrompt();
        switch (i) {
            case 1:
                console.log(singleRound(playerPlay, computerPlay));
                break;
            case 2:
                console.log(singleRound(playerPlay, computerPlay));
                break;
            case 3:
                console.log(singleRound(playerPlay, computerPlay));
                break;
            case 4:
                console.log(singleRound(playerPlay, computerPlay));
                break;
            case 5:
                console.log(singleRound(playerPlay, computerPlay));
                break;
        }
    }
}
