runGame();

function runGame() {
    const showResult = document.querySelector('.show-result');
    const finalResult = document.querySelector('.final-result');
    let gameInfo = {
        gameCounter:0,
        playerWins:0,
        computerWins:0,
        showResult: showResult,
        finalResult: finalResult
    };
    const playerSelection = document.querySelectorAll('button');
    playerSelection.forEach(btn => btn.addEventListener('click',
        () => {playRound(btn.textContent, gameInfo)}));
}

function playRound(playerChoice, gameInfo) {
    //remove display when starting a fresh set of games
    if (gameInfo.gameCounter === 0) {
        gameInfo.finalResult.textContent = '';
    }
    gameInfo.gameCounter++;
    
    const OPTIONS = ['Rock', 'Paper', 'Scissors'];
    const playerSelection = OPTIONS.indexOf(playerChoice);
    const computerSelection = getComputerSelection();

    if (playerSelection === computerSelection) {
        gameInfo.showResult.textContent = `It's a Tie!`;
    } else if ((playerSelection + 1)%3 == computerSelection) {
        gameInfo.computerWins++;
        gameInfo.showResult.textContent = `You Lose!`;
    } else {
        gameInfo.playerWins++;
        gameInfo.showResult.textContent = `You Win!`;
    }

    if(gameInfo.gameCounter === 5) {
        endGameAndReset(gameInfo);
    }
}

function endGameAndReset(gameInfo) {
    if(gameInfo.playerWins > gameInfo.computerWins) {
        gameInfo.finalResult.textContent = 'You have beat the computer!';
    } else if (gameInfo.playerWins < gameInfo.computerWins) {
        gameInfo.finalResult.textContent = 'You have been defeated.';
    } else {
        gameInfo.finalResult.textContent = 'You are evenly matched with the computer';
    }
    gameInfo.gameCounter = 0;
    gameInfo.playerWins = 0;
    gameInfo.computerWins = 0;
}

function getComputerSelection(){
    let selection = Math.floor(Math.random()*3);
    return selection;
}
