function getComputerChoice (){
    let options = ["rock", "paper", "scissors"];
    let randomIndex; 
    let computerChoice;

    randomIndex = Math.floor(Math.random() * 3);
    computerChoice = options[randomIndex];

    return computerChoice;
}

function playRound(buttonId){
    let result;
    let playerChoice = buttonId;
    let computerChoice = getComputerChoice();

    if(computerChoice === playerChoice){
        result = "It's a Draw!";
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

    console.log(result);
    return result;
}

const playerButtons = document.querySelector(".player-buttons").querySelectorAll("button");
playerButtons.forEach((button) => {
    let buttonId = button.id.split('-')[1];
    button.addEventListener("click", () => playRound(buttonId));
});

/*
function game(){
    let winCounter = 0;
    let loseCounter = 0;

    for(let i = 0; i < 5; i++){
        let roundResult = playRound();
        if(roundResult[4] === 'W'){
            winCounter++;
        } else if (roundResult[4] === 'L'){
            loseCounter++;
        }
    }

    if(winCounter > loseCounter){
        console.log("You Win! Congrats!");
    } else if(winCounter === loseCounter){
        console.log("It's a Draw!");
    } else {
        console.log("You Lose! Good luck next time!");
    }
}

game();*/
//playRound();