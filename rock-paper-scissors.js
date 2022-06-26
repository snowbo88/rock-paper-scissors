let playerScore = 0;
let computerScore = 0;

const playerSelections = document.querySelectorAll('.handShapes');
playerSelections.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        keepScore();
        displayResults(playerSelection, computerSelection, '#handShapes');
        displayResults(playerScore, computerScore, '#score');
    })
})

// computer selects a hand
function computerPlay() {
    const hands = ['rock', 'paper', 'scissors']
    const randomHandsIndex = Math.floor(Math.random() * 3);
    const computerSelection = hands[randomHandsIndex];
    return computerSelection;
}

// plays a round with a computer
function playRound(playerSelection, computerSelection) {
    // console.log("You: " + playerSelection + ", Computer: " + computerSelection)

    //You draw if
    if (playerSelection === computerSelection) {
        textContent("#round", "You draw this round!")
    }

    // You win if
    else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        textContent("#round", "You win this round!")
    }

    //Else you win
    else {
        computerScore += 1;
        textContent("#round", "You lose this round!")
    }
}



function displayResults(playerSelection, computerSelection, selector) {
    const result = document.querySelector(selector);
    result.textContent = 'You: ' + playerSelection + ', Computer: ' + computerSelection;
}

function keepScore() {
    const result = document.querySelector("#result")

    if (playerScore == 5) {
        result.textContent = "You win!"
        resetGame();
    }

    if (computerScore == 5) {
        result.textContent = "You lose!"
        resetGame();
    }
}

function resetGame() {
    const buttons = document.querySelectorAll(".handShapes");
    buttons.forEach((button) => button.disabled = true)

    const container = document.querySelector('#container');

    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'button');
    resetButton.setAttribute('id', 'resetButton');
    resetButton.textContent = "Reset Game"

    container.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        buttons.forEach((button) => button.disabled = false)

        textContent("#result", "");

        displayResults(playerSelection, computerSelection, '#handShapes');
        displayResults(playerScore, computerScore, '#score');

        container.removeChild(resetButton)
    })
}

function textContent(selector, text) {
    const element = document.querySelector(selector);
    result.textContent = text;
}