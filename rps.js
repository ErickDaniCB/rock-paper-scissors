//Function that returns a random value (between 1-3)

let computerChoice = getComputerChoice();

function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = "Rock";
    } else 

    if (computerChoice === 2) {
        computerChoice = "Paper";
    } else 

    if (computerChoice === 3) {
        computerChoice = "Scissors";
    }

    return computerChoice;
};

console.log(computerChoice);

function singleRound (playerChoice, computerChoice) {
    
}