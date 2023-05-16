//Function that returns a random value (between 1-3)

function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "Rock";
    } else 

    if (computerChoice === 2) {
        return "Paper";
    } else 

    if (computerChoice === 3) {
        return "Scissors";
    }
};
