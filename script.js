// enum GameOptionsEnum {
//     1 = "rock",
//     2 = "paper",
//     3 = "scissors"
// }

let computerScore = 0;
let playerScore = 0;
let playerSelection;

//function to return randomly the computer choice
function computerPlay() {
    let randomNumber = random();
    switch(randomNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

//function to return a random number between 1 and 3
function random() {
    return Math.floor(Math.random() * 3) +1;  
}

function gameRound(playerSelection, computerSelection) {
    let playerSel = playerSelection.toLowerCase();
    document.getElementById("computerChoice").innerText = computerSelection;
    document.getElementById("playerChoice").innerText = playerSelection;
    if(playerSel === computerSelection) {
        return "It's a tie!"
    }
    else if (
        (playerSel == "rock" && computerSelection == "scissors")||
        (playerSel == "paper" && computerSelection == "rock") ||
        (playerSel == "scissors" && computerSelection == "paper")) {
        playerScore++;
        document.getElementById("playerScore").innerText = playerScore;
        displayResults();
        return "You win!";
    } else {
        computerScore++;
        document.getElementById("computerScore").innerText = computerScore;
        displayResults();
        return "You lose";
    }
}

function displayResults() {
    if(playerScore === 5) {
        document.getElementById("winner").innerText = "Player";
        disablePlayerChoices();
    } else if (computerScore === 5) {
        document.getElementById("winner").innerText = "Computer";
        disablePlayerChoices();
    }
}

function disablePlayerChoices() {
    let buttons = document.querySelectorAll("#playersChoices button");
    for(let i =0; i<buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function getPlayerSelection(button) {
    playerSelection = button.value;
    let round = gameRound(playerSelection, computerPlay());
    document.getElementById("roundWinner").innerText = round;
}

function resetGame() {
    window.location.reload();
}