// Variables
var counter = 0;
let playerWin = 0;
let cpuWin = 0;
let draw = 0;
let error = 0;

//Event Listener
document.addEventListener('DOMContentLoaded', function () {
    // Get all the buttons for Rock, Paper, and Scissors
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorButton = document.querySelector('.scissor');
  
    // Add event listeners to the buttons
    rockButton.addEventListener('click', function () {
      game('Rock'); // Call the game function with the player's choice as 'Rock'
    });
  
    paperButton.addEventListener('click', function () {
      game('Paper'); // Call the game function with the player's choice as 'Paper'
    });
  
    scissorButton.addEventListener('click', function () {
      game('Scissor'); // Call the game function with the player's choice as 'Scissor'
    });
  });


//Game Function

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let choice = getRandomInt(3);

    if (choice == 1){
        return 'Rock';
    } else if (choice == 2){
        return 'Scissor';
    } else {
        return 'Paper';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return 'Its a draw';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissor'){
        return 'You win';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        return 'You win';
    } else if (playerSelection == 'Scissor' && computerSelection == 'Paper'){
        return 'You win';
    } else if (computerSelection == 'Rock' && playerSelection == 'Scissor'){
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock'){
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (computerSelection == 'Scissor' && playerSelection == 'Paper'){
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return 'Error'
    }
}

function game(playerInput){
    
    const playerSelection = playerInput;
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == 'You win'){
        playerWin++;
    } else if (result == 'Its a draw'){
        draw++;
    } else if (result == 'Error'){
        error++;
    }else{
        cpuWin++
    }

    counter++;
    document.querySelector('.round').innerText =  counter;
    document.querySelector('.win').innerText =  playerWin;
    document.querySelector('.lose').innerText =  cpuWin;
    document.querySelector('.draw').innerText =  draw;
    

    if (playerWin >= 5){
        document.querySelector('.mainText').innerText = 'You Won The Game!';
        document.querySelector('.round').innerText =  '5';
        document.querySelector('.win').innerText =  'Win';
        document.querySelector('.lose').innerText =  '';
        document.querySelector('.draw').innerText =  '';
    } else if (cpuWin >= 5){
        document.querySelector('.mainText').innerText = 'You Lost The Game!';
        document.querySelector('.round').innerText =  '5';
        document.querySelector('.win').innerText =  '';
        document.querySelector('.lose').innerText =  'Lost';
        document.querySelector('.draw').innerText =  '';
    } else {
        document.querySelector('.mainText').innerText = result;
    }

    
}
