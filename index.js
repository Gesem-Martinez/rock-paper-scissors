function getComputerChoice (){
    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex; 
    let computerChoice;

    randomIndex = Math.floor(Math.random() * 3);
    computerChoice = options[randomIndex];

    console.log(computerChoice);
}