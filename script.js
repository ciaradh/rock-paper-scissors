// enum GameOptionsEnum {
//     1 = "rock",
//     2 = "paper",
//     3 = "scissors"
// }

let computerScore = 0;
let playerScore = 0;
game();

function game() {

    //loop until either player reaches 5 points
    for(let i = 1; i <6; i++) {
        let computerSelection = computerPlay();
        let playerSelection = window.prompt('Please insert your choice');
        console.group(i);
        console.log("computer - " + computerSelection);
        console.log("player - " + playerSelection);
        console.log(i + " - " + gameRound(playerSelection, computerSelection));
        console.groupEnd();
    }

    console.log(`Computer score: ${computerScore}`);
    console.log(`Player score: ${playerScore}`);

    if(computerScore > playerScore) {
        console.log("%c Computer wins", 'color: red');
    } else if(playerScore > computerScore) {
        console.log("%c You win", 'color: green')
    } else {
        console.log("%c It's a tie", 'color: orange')
    }
}

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

    if(playerSel === computerSelection) {
        return "It's a tie!"
    }
    else if (
        (playerSel == "rock" && computerSelection == "scissors")||
        (playerSel == "paper" && computerSelection == "rock") ||
        (playerSel == "scissors" && computerSelection == "paper")) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose";
    }
}