const choices = ["rock", "scissors", "paper"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (getWinner(playerSelection, computerSelection) === playerSelection) {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else if (getWinner(playerSelection, computerSelection) === computerSelection) {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    } else {
        return "Oh it's a Tie!";
    }
}

function getWinner(first, second) {
    let choices = ["rock", "scissors", "paper"];
    let indexFirst = choices.indexOf(first);
    let indexSecond = choices.indexOf(second);

    // if (first === second) {
    //     return null;
    // }

    switch (indexFirst - indexSecond) {
        case -1:
        case 2:
            return first;
        case 0:
            return null;
        default:
            return second;
    }
    // return ((indexFirst - indexSecond === -1) || (indexFirst - indexSecond == 2)) 
    //     ? first
    //     : second;
}

function capitalize(word) {
    let firstLetter = word[0].toUpperCase();
    return word.replace(word[0], firstLetter);
}

function stuff() {
    return 1 < 2 ? "yup" : "nope"
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        console.log(`Computer is ${computerChoice}`);
        let playerChoice = getPlayerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        
        if (result.includes("Win")) {
            playerScore += 1;
        } 
        if (result.includes("Lose")) {
            computerScore += 1;
        }

        console.log(playerScore, computerScore)
    }

    let score = playerScore === computerScore
        ? "It's a tie!"
        : playerScore > computerScore
            ? `You Win ${playerScore}-${computerScore}!`
            : `You Lose ${playerScore}-${computerScore}!`

    console.log(score)
}

game();

// console.log(playRound("rock", "scissors"));
// console.log(playRound("scissors", "rock"));
// console.log(capitalize("jfklsj"));



// console.log(playRound(getPlayerChoice(), computer));