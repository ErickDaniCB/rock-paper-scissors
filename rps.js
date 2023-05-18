//Function that returns a random value (between 1-3)

let computerChoice = getComputerChoice();

function getComputerChoice () {

    let computerPlay = Math.floor(Math.random() * 3) + 1;

    // Next we convert the random number guess to a sting.
    if (computerPlay === 1) {
        computerPlay = "Rock";
    } else 

    if (computerPlay === 2) {
        computerPlay = "Paper";
    } else 

    if (computerPlay === 3) {
        computerPlay = "Scissors";
    }
    
    //return the value to the function.
    return computerPlay;
};

//Place your guess inside the quotation marks below
let playerPlay = "paper";
//Your guess goes here ^
let playerChoice = playerPlay.toUpperCase();

let playerScore = 0;
let computerScore = 0;

function singleRound (playerChoice, computerChoice) {

    if (playerChoice === "ROCK"){
        if (computerChoice === "Scissors") {
            playerScore += 1;
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        } else 
        if (computerChoice === "Paper") {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${playerChoice}.`;
        } else 
            return `It's a tie!`;
    } else 

    if (playerChoice === "PAPER"){
        if (computerChoice === "Rock") {
            playerScore += 1;
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        } else 
        if (computerChoice === "Scissors") {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${playerChoice}.`;
        } else 
            return `It's a tie!`;
    } else 

    if (playerChoice === "SCISSORS"){
        if (computerChoice === "Paper") {
            playerScore += 1;
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        } else 
        if (computerChoice === "Rock") {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${playerChoice}.`;
        } else 
            return `It's a tie!`;
    } 
    
}

console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
console.log(singleRound(playerChoice, computerChoice));



//Need two variables for the player and computer scores respectively. 
//Need to console.log the result in each iteration (round). 
//In each iteration the code has to wait the player to enter his/her move. 

getComputerChoice();
console.log(computerChoice);
