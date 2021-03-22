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
    // document.getElementById(`p-${playerSelection}`).classList.remove("is-hidden");
    if(playerSel === computerSelection) {
        return "It's a tie"
    }
    else if (
        (playerSel == "rock" && computerSelection == "scissors")||
        (playerSel == "paper" && computerSelection == "rock") ||
        (playerSel == "scissors" && computerSelection == "paper")) {
        playerScore++;
        document.getElementById("playerScore").innerText = playerScore;
        displayResults();
        return "You win";
    } else {
        computerScore++;
        document.getElementById("computerScore").innerText = computerScore;
        displayResults();
        return "You lose";
    }
}

function displayResults() {
    if(playerScore === 5) {
        document.getElementById("winner").innerText = "You win!";
        document.getElementById("playersChoices").classList.add("is-hidden");
        document.getElementById("roundWrapper").classList.add("is-hidden");
        document.getElementById("winnerWrapper").classList.remove("is-hidden");
        // disablePlayerChoices();
    } else if (computerScore === 5) {
        document.getElementById("winner").innerText = "Computer wins!";
        document.getElementById("playersChoices").classList.add("is-hidden");
        document.getElementById("roundWrapper").classList.add("is-hidden");
        document.getElementById("winnerWrapper").classList.remove("is-hidden");
        // disablePlayerChoices();
    }
}

// function disablePlayerChoices() {
//     let buttons = document.querySelectorAll("#playersChoices button");
//     for(let i =0; i<buttons.length; i++) {
//         buttons[i].disabled = true;
//     }
// }

function getPlayerSelection(button) {
    //hide players selection wrapper and show round wrapper
    document.getElementById("playersChoices").classList.add("is-hidden");
    document.getElementById("roundWrapper").classList.remove("is-hidden");
    
    playerSelection = button.value;
    let round = gameRound(playerSelection, computerPlay());
    roundWinner.innerText = round;
    
}

function resetGame() {
    window.location.reload();
}

function newRound() {
    //TODO show choice wrapper, hide result wrapper
    document.getElementById("playersChoices").classList.remove("is-hidden");
    document.getElementById("roundWrapper").classList.add("is-hidden");
}