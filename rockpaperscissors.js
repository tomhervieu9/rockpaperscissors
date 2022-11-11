options = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    let selection = Math.floor(Math.random()*3);
    console.log(selection);
}

getComputerChoice();