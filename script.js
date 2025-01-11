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
    round++;

    const winner = checkWinner(humanSelection, computerSelection);

    //Update winner's score after eery round
    if(winner == "Player"){
        humanScore++;
    }
    else if (winner == "Computer"){
        computerScore++;
    }

    //Start every round of the game
    return (`Round ${round}: ${playRound(humanSelection, computerSelection)}`);
}

let humanScore = 0;
let computerScore  = 0;
let round= 0;
console.log('It\'s the game time');

const buttons = document.querySelector('#buttons');
const resultMessage = document.querySelector('#textResult');

// Add event listeners buttons 

buttons.addEventListener('click', function ModifySelection(event){
    let target = event.target;
    let playerSelection ;

    // If 'Start' button is clicked, substitued it with option button
    if(target.id == 'start' || target.id == 'next'){
        buttons.removeChild(target);
        
        const rockButton = document.createElement('button');
        rockButton.textContent = "Rock";
        rockButton.setAttribute("id", "rock");

        const paperButton = document.createElement('button');
        paperButton.textContent = "Paper";
        paperButton.setAttribute("id", "paper");

        const sciButton = document.createElement('button');
        sciButton.textContent = "Scissors";
        sciButton.setAttribute("id", "scissors");

        buttons.appendChild(rockButton);
        buttons.appendChild(paperButton);
        buttons.appendChild(sciButton);

        resultMessage.textContent = "Select an option."
    }
    else if(target.id == 'reset'){
        buttons.removeChild(target);
        const startButton = document.createElement('button');
        startButton.textContent = "Start";
        startButton.setAttribute("id", "start");
        buttons.appendChild(startButton);

        resultMessage.textContent = "It's game time!";
    }
    else if(target.id == 'rock' || target.id == 'paper' || target.id == 'scissors'){
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

        // After clicking the option buttons, the game will starts
        resultMessage.innerHTML = `${playGame(playerSelection)}`;

        while (buttons.firstChild) {
            buttons.removeChild(buttons.firstChild);
        }

        if (humanScore == 5 || computerScore == 5){
            resultMessage.innerHTML += '<p>Game Over:</p>';
            resultMessage.innerHTML += `<p>Human Score is ${humanScore}<br>Computer Score is ${computerScore}</p>`;
        
            if(humanScore > computerScore){
                resultMessage.innerHTML +=("<p>Player is the final winner</p>");
            }
            else if(humanScore < computerScore){
                resultMessage.innerHTML +=("<p>Computer is the final winner</p>");
            }
        
            const resetButton = document.createElement('button');
            resetButton.textContent = "Reset";
            resetButton.setAttribute("id", "reset");

            buttons.appendChild(resetButton);
        }
        else{
            const nextButton = document.createElement('button');
            nextButton.textContent = "Next Round";
            nextButton.setAttribute("id", "next");
            buttons.appendChild(nextButton);

            resultMessage.innerHTML += `<p>Human Score is ${humanScore}<br>Computer Score is ${computerScore}</p>`;
        }
    }
});