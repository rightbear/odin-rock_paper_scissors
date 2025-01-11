// Retrieve the choice of computer in every round
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)]
    choice = choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();  // Turn the first character of every choice to uppercase
    return choice;
}

// Retrieve the choice of player in every round
function getHumanChoice(){
    let choice;

    do {
        choice = prompt(`Please enter your choice. Rock, Paper or Scissors? Spelling needs to be exact, but capitalization doesn't matter`);
        if(choice === null){                //Check whether the "Cancel" button is clicked.
            alert("The game cannot be canceled");
            continue;
        }
        else{
            if(validateInput(choice)){
                choice = choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();  // Turn the first character of every choice to uppercase
                return choice;
            }
            else{
                alert(`Please make sure your input is Rock, Paper or Scissors`);
                continue;
            }
        }
        
    } while(true);
}

// Validate whether user's choice is legal and not empty innitially
function validateInput(choice){
    let choiceLowercase = choice.toLowerCase();
    if(options.includes(choiceLowercase)){    //Check whether the input is Rock, Paper or Scissors.
        return true;
    }
    else{
        return false;
    }
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
function playGame(){
    let humanScore = 0;
    let computerScore  = 0;

    console.log('It\'s the game time');

    for(let round=1 ; round<=5 ; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        //Start every round of the game
        console.log(`Round ${round}: ${playRound(humanSelection, computerSelection)}`);
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

    //Show the result of final winner
    console.log('Game Over');
    console.log(`Human Score is ${humanScore}\nComputer Score is ${computerScore}`);
    if(humanScore > computerScore){
        console.log("Player is the final winner");
    }
    else if(humanScore < computerScore){
        console.log("Computer is the final winner");
    }
    else{
        console.log("We have a tie");
    }
}

playGame();