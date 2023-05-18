/*
First things first. Variables. Which of them we need
in the general scope? 

In the rock, paper, scissors game there's only two players
so we need to compare both inputs and add the result to their current score.
*/

let playerPlayRaw = "Rock";
let playerPlay = playerPlayRaw.toUpperCase();
let computerPlay = "";
let playerScore = 0;
let computerScore = 0;

//Now we need a way to generate the computer play to assign to it's correspondent variable.

function getComputerChoice () {
    let possiblePlays = ["ROCK", "PAPER", "SCISSORS"];
    let guess = Math.floor(Math.random() * possiblePlays.length);
    return computerPlay = possiblePlays[guess]; 
}

console.log(getComputerChoice());
console.log(computerPlay); //Our variable is receiving the random value as intended!

