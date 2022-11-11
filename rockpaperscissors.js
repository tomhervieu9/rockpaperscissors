function getComputerSelection(){
    let selection = Math.floor(Math.random()*3);
    return selection;
}

function playRound(playerSelection, computerSelection){
    const options = ['rock', 'paper', 'scissors'];

    if (playerSelection == null) {
        return;
    }

    playerInput = playerSelection.toLowerCase();
    playerSelection = options.indexOf(playerInput);

    if (playerSelection == computerSelection) {
        alert(`It's a tie!\n${options[playerSelection]} ties with ${options[computerSelection]}`);
        return('tie');
    } else if ((playerSelection + 1)%3 == computerSelection) {
        alert(`You lose!\n${options[playerSelection]} loses against ${options[computerSelection]}`)
        return('loss');
    } else {
        alert(`You win!\n${options[playerSelection]} wins against ${options[computerSelection]}`)
        return('win');
    }

}

function game(){
    let playerScore=0;
    let computerScore=0;


    for (let i = 0; i<5; i++) {
        let playerSelection = prompt('Input your choice: rock, paper, or scissors.','');
        
        let result = playRound(playerSelection, getComputerSelection());

        if (result == 'win') {
            playerScore++;
        } else if (result == 'loss') {
            computerScore++;
        }
    }

    let winner = playerScore > computerScore ? 'You are the winner :)' :
    playerScore == computerScore ? `It's a tie!` : 'The computer has won :(';

    alert(winner);
}

game();