// Retrieve the choice of computer in every round
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)]
    choice = choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();  // Turn the first character of every choice to uppercase
    return choice;
}


// Receive the choice of player and computer, and generate information of winner in every round
function playRound(humanChoice, computerChoice) {
    const result =  checkWinner(humanChoice, computerChoice);

    if(result == "Player"){
        return (`Player wins! ${humanChoice} beats ${computerChoice}`);
    }
    else if(result == "Computer"){
        return (`Computer wins! ${computerChoice} beats ${humanChoice}`);
    }
    else{
        return (`Player ties Computer! ${computerChoice} ties ${humanChoice}`);
    }
}

// Compare the choice of player and computer, and genereate the winner
function checkWinner(humanChoice, computerChoice){
    if (((humanChoice == "Rock") && (computerChoice == "Scissors")) || (humanChoice == "Scissors") && (computerChoice == "Paper")
        || (humanChoice == "Paper") && (computerChoice == "Rock")){
        return "Player";
    }
    else if (((humanChoice == "Scissors") && (computerChoice == "Rock")) || (humanChoice == "Paper") && (computerChoice == "Scissors")
        || (humanChoice == "Rock") && (computerChoice == "Paper")){
        return "Computer";
    }
    else{
        return "Tie";
    }
}

//Start the game
function playGame(playerSelection){
    
    const humanSelection = playerSelection;
    const computerSelection = getComputerChoice();

    //Start every round of the game
    console.log(`${playRound(humanSelection, computerSelection)}`);
    console.log('------------------------------------------');
    const winner = checkWinner(humanSelection, computerSelection);

    //Update winner's score after eery round
    if(winner == "Player"){
        humanScore++;
    }
    else if (winner == "Computer"){
        computerScore++;
    }
}

let humanScore = 0;
let computerScore  = 0;
console.log('It\'s the game time');

let buttons = document.querySelector('#buttons');

// Add event listeners for three buttons 

optionButtons.addEventListener('click', function ModifySelection(event){
    let target = event.target;
    let playerSelection ;

    // Every button symbol different choice made by player in the game
    switch(target.id) {
        case 'rock':
            playerSelection = "Rock";
            break;
        case 'paper':
            playerSelection = "Paper";
            break;
        case 'scissors':
            playerSelection = "Scissors";
            break;
    }

    // After clicking the buttons, the game will starts
    playGame(playerSelection);

    if (humanScore == 5 || computerScore == 5){
        const gameRegion = document.querySelector("#gameRegion");
    
        const resultMessage = document.createElement("div");
        resultMessage.setAttribute("id", "result");
        resultMessage.innerHTML = '<p>Game Over:</p>';
        resultMessage.innerHTML += `<p>Human Score is ${humanScore}<br>Computer Score is ${computerScore}</p>`;
    
        if(humanScore > computerScore){
            resultMessage.innerHTML +=("<p>Player is the final winner</p>");
        }
        else if(humanScore < computerScore){
            resultMessage.innerHTML +=("<p>Computer is the final winner</p>");
        }
    
        gameRegion.appendChild(resultMessage);
    }
});