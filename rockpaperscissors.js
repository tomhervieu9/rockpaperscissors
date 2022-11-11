options = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    let selection = Math.floor(Math.random()*3);
    return options[selection];
}

function getOutcome(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    // console.log(`playerselection: ${playerSelection}\ncomputerselection: ${computerSelection}`);

    //this is intentionally implemented in a manual way.
    //Otherwise, would think about this problem in cycles using modulus operator.
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper'){
            return(`You Lose! Paper beats rock :(`);
        } else if (computerSelection == 'scissors') {
            return(`You Win! Rock beats scissors`);
        } else {
            return(`It's a tie!`);
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors'){
            return(`You Lose! Scissors beats paper :(`);
        } else if (computerSelection == 'rock') {
            return(`You Win! Paper beats rock`);
        } else {
            return(`It's a tie!`);
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock'){
            return(`You Lose! Rock beats scissors :(`);
        } else if (computerSelection == 'paper') {
            return(`You Win! Scissors beats paper`);
        } else {
            return(`It's a tie!`);
        }
    }

}

// console.log(getOutcome('scissors',getComputerChoice()));