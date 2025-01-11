// Retrieve the choice of computer in every round
function getComputerChoice(){
    const option = ['Rock', 'Paper', 'Scissors'];
    const choice = option[Math.floor(Math.random() * option.length)]
    return choice;
}

// Retrieve the choice of player in every round
function getHumanChoice(round){
    let choice;
    let check;

    do {
        choice = prompt(`Round ${round}: Please enter your choice. Rock, Paper or Scissors? Spelling needs to be exact, but capitalization doesn't matter.`);
        if(choice === null){                //Check whether the "Cancel" button is clicked.
            alert("The game cannot be canceled.");
        }
        else{
            check = validateInput(choice);

            if(check){
                choice = choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();
                return choice;
            }
            else{
                alert(`Please make sure your input is Rock, Paper or Scissors.`); 
            }
        }
        
    } while(true);
}

// Validate whether user's choice is legal innitially
function validateInput(choice){
    choice = choice.toLowerCase();
    if(choice == "rock" || choice == "paper" || choice == "scissors"){    //Check whether the input is Rock, Paper or Scissors.
        return true;
    }
    else{
        return false;
    }
}

// Receive the choice of player and computer
function playRound(humanChoice, computerChoice) {
    const result =  checkWinner(humanChoice, computerChoice);

    if(result == "Player"){
        return (`Player wins! ${humanChoice} beats ${computerChoice}.`);
    }
    else if(result == "Computer"){
        return (`Computer wins! ${computerChoice} beats ${humanChoice}.`);
    }
    else{
        return (`Player ties Computer! ${computerChoice} ties ${humanChoice}.`);
    }
}

// Compare the choice of player and computer
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
function playGame(){
    let humanScore = 0;
    let computerScore  = 0;

    for(let round=1 ; round<=1 ; round++){
        const humanSelection = getHumanChoice(round);
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }

    alert(`Human Score is ${humanScore}.\nComputer Score is ${computerScore}.`);
}

playGame();