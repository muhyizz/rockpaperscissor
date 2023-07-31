//set a two variable 1 - user 2 - cpu
//compare the input and return
//get the input

var counter = 0;

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


function normalizeInput(input){
    word = input;
    word_lowerall = word.toLowerCase();
    word_lowerall_first_removed = word_lowerall.slice(1, word_lowerall.length);
    word_first_letter_uppercase =  word_lowerall.charAt(0).toUpperCase();
    word_fixed = word_first_letter_uppercase +   word_lowerall_first_removed;
    return word_fixed;
}

function game(playerInput){
    let playerWin = 0;
    let cpuWin = 0;
    let draw = 0;
    let error = 0;
    let playerSelection = playerInput;

    while (true){
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
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
        document.querySelector('.round').innerHTML =  counter;
    }

    console.log('Player Win: ' + playerWin + ' Computer Win: ' + cpuWin + ' Draw: ' + draw + ' Error: ' + error);
}

game(playerInput)

