
let computerScore = 0; 
let playerScore = 0; 
let gameOutcome = "";
let playerChoice = ""; 

// Generates a random number between 1-3 that will represent the computers choice 
function computerPlay () { 
computerChoice = Math.floor(Math.random() * 3 + 1)

// The number 1 will be represented by rock 
if (computerChoice === 1) { 
    computerChoice = "rock"; 
} 
// The number 2 will be represented by paper 
if (computerChoice === 2) { 
    computerChoice = "paper"; 

}
// The number 3 will be represented by scissors 
if (computerChoice === 3) { 
    computerChoice = "scissors"; 
    
}
 return computerChoice
}



function playRound (playerChoice, computerChoice) { 


playerSelection = prompt("Enter rock, paper, or scissors.");

playerChoice = playerSelection.toLowerCase();


if (playerChoice === computerChoice) {

    console.log("It was a tie!");
    playerScore++
    computerScore++
}






// outcomes if player picks rock 

if (playerChoice === "rock" && computerChoice === "paper")
{
    gameOutcome =  console.log(`You lost! the computer picked ${computerChoice}`);
    computerScore++

}

if (playerChoice === "rock" && computerChoice === "scissors")
{  
    gameOutcome =    console.log(`You win! computer picked ${computerChoice}`);
    playerScore++
}


//outcomes if player picks paper 
if (playerChoice === "paper" && computerChoice === "scissors")
{ 
    gameOutcome =   console.log(`You lost! the computer picked ${computerChoice}`);
    computerScore++
}

if (playerChoice === "paper" && computerChoice === "rock")
{  
    gameOutcome =  console.log(`You win! computer picked ${computerChoice}`);
    playerScore++
}


//Outcomes if player picks scissors

if (playerChoice === "scissors" && computerChoice === "rock")
{ 
    gameOutcome =   console.log(`You lost! the computer picked ${computerChoice}`);
    computerScore++
}

if (playerChoice === "scissors" && computerChoice === "paper")
{  
    gameOutcome =  console.log(`You win! computer picked ${computerChoice}`);
    playerScore++
}
 return playerChoice, computerChoice, gameOutcome;
}


function game () { 


    for (let i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice)
    }

    if (playerScore > computerScore)
    console.log(` You won! The score was ${playerScore} - ${computerScore} !`)

    if (playerScore < computerScore)
    console.log(` You lost! The score was ${playerScore} - ${computerScore} !`)

    if (playerScore === computerScore) {
        console.log(`It was a tie! ${playerScore} - ${computerScore}` )
    }
}









