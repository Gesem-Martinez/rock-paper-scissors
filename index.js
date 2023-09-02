let playerScore = 0;
let computerScore = 0;

const computerButtons = document.querySelector(".comp-buttons").querySelectorAll("button");
const playerButtons = document.querySelector(".player-buttons").querySelectorAll("button");

playerButtons.forEach((button) => {
    let buttonId = button.id;

    button.addEventListener("click", () => {
        computerButtons.forEach((button) => {
            button.classList.remove('active');
        });

        playerButtons.forEach((button) => {
            button.classList.remove('active');
        })

        playRound(buttonId);

        if(playerScore == 5 || computerScore == 5){
            resetGame();
        }
    });
});



function resetGame(){
    if(playerScore > computerScore){
        document.getElementById('game-result').textContent = "Player Wins!";
    } else {
        document.getElementById('game-result').textContent = "Computer Wins!";
    }

    playerScore = 0;
    computerScore = 0;

    computerButtons.forEach((button) => {
        button.classList.remove('active');
    });

    playerButtons.forEach((button) => {
        button.classList.remove('active');
    });
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}


function getComputerChoice (){
    let options = ["rock", "paper", "scissors"];
    let randomIndex; 
    let computerChoice;

    randomIndex = Math.floor(Math.random() * 3);
    computerChoice = options[randomIndex];

    return computerChoice;
}

function playRound(buttonId){
    let result = "It's a Draw!";
    let playerChoice = buttonId.split('-')[1];
    let computerChoice = getComputerChoice();

    document.getElementById(buttonId).classList.add('active')
    document.getElementById(("comp" + "-" + computerChoice)).classList.add('active');

    switch(playerChoice){
        case 'rock':
            if(computerChoice === 'paper'){
                result = 'You Lose! Paper beats Rock';
                computerScore++;
            } else if(computerChoice === 'scissors'){
                result = 'You Win! Rock beats Scissors';
                playerScore++;
            }
            break;
        case 'paper':
            if(computerChoice === 'rock'){
                result = 'You Win! Paper beats Rock';
                playerScore++;
            } else if(computerChoice === 'scissors'){
                result = 'You Lose! Scissors beat Paper';
                computerScore++;
            }
            break;
        case 'scissors':
            if(computerChoice === 'rock'){
                result = 'You Lose! Rock beats Scissors';
                computerScore++;
            } else if(computerChoice === 'paper'){
                result = 'You Win! Scissors beat Paper';
                playerScore++;
            }
            break;
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

//playRound();