let playerScore = 0;
let computerScore = 0;
const playerScore_div = document.getElementById("player-score");
const computerScore_div = document.getElementById("computer-score");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const result_div = document.querySelector(".result");

function getComputerchoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function capitalizeWord(letter){
    if(letter == "rock")return "Rock";
    if (letter == "paper")return "Paper";
    return "Scissors";
}

function win(playerChoice, computerChoice){
playerScore++;
playerScore_div.innerHTML = playerScore;
computerScore_div.innerHTML = computerScore;
result_div.innerHTML = capitalizeWord(playerChoice) + " beats " + computerChoice + ". You win!";
document.getElementById(playerChoice).classList.add("green-glow");
document.getElementById(computerChoice).classList.add("red-glow");
setTimeout(function(){document.getElementById(playerChoice).classList.remove("green-glow")}, 500)
setTimeout(function(){document.getElementById(computerChoice).classList.remove("red-glow")}, 500)
}


function lose(playerChoice, computerChoice){
    computerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    result_div.innerHTML = capitalizeWord(playerChoice) + " cannot beat " + computerChoice + ". You lose!";
    document.getElementById(playerChoice).classList.add("green-glow");
    document.getElementById(computerChoice).classList.add("red-glow");
    setTimeout(function(){document.getElementById(playerChoice).classList.remove("green-glow")}, 500)
    setTimeout(function(){document.getElementById(computerChoice).classList.remove("red-glow")}, 500)
}

function draw(playerChoice, computerChoice){
    result_div.innerHTML = "It's a draw!";
    document.getElementById(computerChoice).classList.add("gray-glow");
    setTimeout(function(){document.getElementById(playerChoice).classList.remove("gray-glow")}, 500)
    }

function game(playerChoice){
    const computerChoice = getComputerchoice();
    switch(playerChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, computerChoice);
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw(playerChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
    })
    
    paper_div.addEventListener('click', function(){
        game("paper");
    })
    
    scissors_div.addEventListener('click', function(){
        game("scissors");
    })    
}

main();










