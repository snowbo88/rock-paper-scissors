game();

// computer selects a hand
function computerPlay() {
    const hands = ['rock', 'paper', 'scissors']
    const randomHandsIndex = Math.floor(Math.random() * 3);
    const computerSelection = hands[randomHandsIndex];
    return computerSelection;
}

function playerSelection() {
    let playerSelection = window.prompt("What hand will you play?");
    return playerSelection.toLowerCase();
}

// plays a round with a computer
function playRound(playerSelection, computerSelection) {
    console.log("You: " + playerSelection + ", Computer: " + computerSelection)

    //You draw if
    if (playerSelection === computerSelection) {
        console.log("You draw!");
    }

    // You win if
    else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win!");
    }

    //Else you win
    else {
        console.log("You lose!")
    }
}

// plays five rounds with computer
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        playRound(playerSelection(), computerSelection);
    }
}