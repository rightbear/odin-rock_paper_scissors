function getComputerChoice(){
    let num = Math.floor(Math.random() * 98) + 1;

    if(num % 3 == 0){
        return ("Rock");
    }
    else if(num % 3 == 1){
        return ("Paper");
    }
    else if(num % 3 == 2){
        return ("Scissors");
    }
}

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

function validateInput(choice){
    choice = choice.toLowerCase();
    if(choice == "rock" || choice == "paper" || choice == "scissors"){    //Check whether the input is Rock, Paper or Scissors.
        return true;
    }
    else{
        return false;
    }
}

function playRound(humanChoice, computerChoice) {
    let winner;

    if (((humanChoice == "Rock") && (computerChoice == "Scissors")) || (humanChoice == "Scissors") && (computerChoice == "Paper")
        || (humanChoice == "Paper") && (computerChoice == "Rock")){
        alert(`You win! ${humanChoice} beats ${computerChoice}.`);
        winner = 0;
    }
    else if (((humanChoice == "Scissors") && (computerChoice == "Rock")) || (humanChoice == "Paper") && (computerChoice == "Scissors")
        || (humanChoice == "Rock") && (computerChoice == "Paper")){
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
        winner = 1;
    }
    else{
        alert(`You tie with me! ${computerChoice} ties ${humanChoice}.`);
        winner = 2;
    }
    return winner;
}


function playGame(){
    let humanScore = 0;
    let computerScore  = 0;

    for(let round=1 ; round<=5 ; round++){
        const humanSelection = getHumanChoice(round);
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);

        if(winner == 0){
            humanScore += 2;
        }
        else if(winner == 1){
            computerScore += 2;
        }
        else{
            humanScore += 1;
            computerScore += 1;
        }
    }

    alert(`Human Score is ${humanScore}.\nComputer Score is ${computerScore}.`);
}

playGame();