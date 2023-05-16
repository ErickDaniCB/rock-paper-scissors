//Function that returns a random value (between 1-3)

let computerChoice = getComputerChoice();

function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 3) + 1;

    // Next we convert the random number guess to a sting.
    if (computerChoice === 1) {
        computerChoice = "Rock";
    } else 

    if (computerChoice === 2) {
        computerChoice = "Paper";
    } else 

    if (computerChoice === 3) {
        computerChoice = "Scissors";
    }
    
    //return the value to the function.
    return computerChoice;
};

console.log(computerChoice);

function singleRound (playerChoice, computerChoice) {
    
    if (playerChoice === "Rock"){
        if (computerChoice === "Scissors") {
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        } else 
        if (computerChoice === "Paper") {
            return `You lose! ${computerChoice} beats ${playerChoice}.`;
        } else 
            return `It's a tie!`;
    } else 

    if (playerChoice === "Paper"){
        if (computerChoice === "Rock") {
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        } else 
        if (computerChoice === "Scissors") {
            return `You lose! ${computerChoice} beats ${playerChoice}.`;
        } else 
            return `It's a tie!`;
    } else 

    if (playerChoice === "Scissors"){
        if (computerChoice === "Paper") {
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        } else 
        if (computerChoice === "Rock") {
            return `You lose! ${computerChoice} beats ${playerChoice}.`;
        } else 
            return `It's a tie!`;
    } 
}

const playerChoice = "Scissors";

console.log(singleRound(playerChoice, computerChoice));

