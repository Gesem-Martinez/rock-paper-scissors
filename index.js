function getComputerChoice (){
    let options = ["rock", "paper", "scissors"];
    let randomIndex; 
    let computerChoice;

    randomIndex = Math.floor(Math.random() * 3);
    computerChoice = options[randomIndex];

    return computerChoice;
}

function playRound(computerChoice, playerChoice){
    let result;
    if(computerChoice === playerChoice){
        return result = "Draw";
    }

    switch(playerChoice){
        case 'rock':
            if(computerChoice === 'paper'){
                result = 'You Lose! Paper beats Rock';
            } else if(computerChoice === 'scissors'){
                result = 'You Win! Rock beats Scissors';
            }
            break;
        case 'paper':
            if(computerChoice === 'rock'){
                result = 'You Win! Paper beats Rock';
            } else if(computerChoice === 'scissors'){
                result = 'You Lose! Scissors beat Paper';
            }
            break;
        case 'scissors':
            if(computerChoice === 'rock'){
                result = 'You Lose! Rock beats Scissors';
            } else if(computerChoice === 'paper'){
                result = 'You Win! Scissors beat Paper';
            }
            break;
    }

    return result;
}
