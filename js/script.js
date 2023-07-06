const gameDiv = document.querySelector(".game");
const you = document.querySelector(".you")
const computer = document.querySelector(".computer")
const choices = ["rock", "scissors", "paper"];
let info = document.querySelector(".info");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    return new Promise((resolve) => {        
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                resolve(button.className);
            });
        });
    });
}

function getResult(playerSelection, computerSelection) {
    let result;
    if (getWinner(playerSelection, computerSelection) === playerSelection) {
        result = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else if (getWinner(playerSelection, computerSelection) === computerSelection) {
        result = `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    } else {
        result = "Oh it's a Tie!";
    }
    return result;
}

function getWinner(first, second) {
    let choices = ["rock", "scissors", "paper"];
    let indexFirst = choices.indexOf(first);
    let indexSecond = choices.indexOf(second);

    switch (indexFirst - indexSecond) {
        case -1:
        case 2:
            return first;
        case 0:
            return null;
        default:
            return second;
    }
}

function capitalize(word) {
    let firstLetter = word[0].toUpperCase();
    return word.replace(word[0], firstLetter);
}

async function game() {
    console.log("Starting...");
    let playerScoreOnScoreboard = document.querySelector(".player-score");
    let computerScoreOnScoreboard = document.querySelector(".computer-score");
    let info = document.querySelector(".info");
    console.log(info);

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 3; i++) {
        let computerChoice = getComputerChoice();
        console.log(`Computer is ${computerChoice}`);
        let playerChoice = await getPlayerChoice();
        console.log(playerChoice);

        let result = getResult(playerChoice, computerChoice);
        info.innerHTML = result;
        console.log(info.textContent);
        
        if (result.includes("Win")) {
            playerScore += 1;
            playerScoreOnScoreboard.textContent = playerScore;
        } 
        if (result.includes("Lose")) {
            computerScore += 1;
            computerScoreOnScoreboard.textContent = computerScore;
        }

        console.log(playerScore, computerScore)
    }

    let score = playerScore === computerScore
        ? "It's a Tie!"
        : playerScore > computerScore
            ? `You Win ${playerScore}-${computerScore}!`
            : `You Lose ${playerScore}-${computerScore}!`

    console.log(score)

    const finalResult = document.createElement("div");
    finalResult.classList.add("new");
    you.classList.add("new-other");
    computer.classList.add("new-other");
    gameDiv.insertBefore(finalResult, computer);
    finalResult.textContent = score;
    finalResult.style.cssText = "align-self: center; font-size: 40px; color: green"
    console.log(finalResult.innerHTML);
}

game();