function getComputerSelection(){
    let selection = Math.floor(Math.random()*3);
    return selection;
}

function playRound(e){
    const options = ['rock', 'paper', 'scissors'];

    playerSelection = this.textContent;

    // playerInput = e.textContent.toLowerCase();
    // playerSelection = options.indexOf(playerInput);

    // if (playerSelection == computerSelection) {
    //     alert(`It's a tie!\n${options[playerSelection]} ties with ${options[computerSelection]}`);
    //     return('tie');
    // } else if ((playerSelection + 1)%3 == computerSelection) {
    //     alert(`You lose!\n${options[playerSelection]} loses against ${options[computerSelection]}`)
    //     return('loss');
    // } else {
    //     alert(`You win!\n${options[playerSelection]} wins against ${options[computerSelection]}`)
    //     return('win');
    // }

}

function game(){
    const userInput = document.querySelectorAll('button');
    console.log(userInput.length);

    userInput.forEach(btn => btn.addEventListener('click', playRound));
}

game();