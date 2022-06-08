
let computerScore = 0; 
let playerScore = 0; 
let gameOutcome = "";
let playerChoice = ""; 

const container = document.querySelector('#container');

const score = document.createElement('p');
score.classList.add('score');
score.textContent = `Your score: ${playerScore}  Computer's Score: ${computerScore}`; 
container.appendChild(score);



const rock = document.createElement('button');
rock.textContent = "Rock";
rock.classList.add("rock");
container.appendChild(rock);
rock.addEventListener('click', function (e)
{
playerChoice = "rock";

playRound();

});

const paper = document.createElement('button');
paper.textContent = "Paper";
paper.classList.add("paper");
container.appendChild(paper);
paper.addEventListener('click', function (e) {

playerChoice = 'paper';
playRound();

});



const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.classList.add("scissors");
container.appendChild(scissors);
scissors.addEventListener('click', function (e) {
playerChoice = "scissors"; 

playRound();


});

const choicesPicked = document.createElement('p');
choicesPicked.classList.add('choicesPicked');
choicesPicked.textContent = ``; 
container.appendChild(choicesPicked);






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






// playerChoice, computerChoice
function playRound () { 




computerPlay();
console.log(computerChoice);
if (playerChoice === computerChoice) {

    console.log("It was a tie!");
    playerScore++
    computerScore++ }





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

score.textContent = `Your score: ${playerScore}  Computer's Score: ${computerScore}`; 
choicesPicked.textContent = `You picked: ${playerChoice} - The computer picked: ${computerChoice}`; 






if (playerScore === 5 && computerScore === 5)
{
score.textContent = `Wow you both tied! incredible!!!`;
computerScore = 0; 
playerScore = 0;
}

else if (computerScore === 5 ){
 score.textContent = `You lost! The computer won ${computerScore} to ${playerScore}`;
computerScore = 0; 
playerScore = 0;
}

else if (playerScore === 5) {
score.textContent = `Congratulations! You won! ${playerScore} to ${computerScore}`;
computerScore = 0; 
playerScore = 0;
}
 
else

 return playerChoice, computerChoice, gameOutcome, playerScore, computerScore;
 
}















// function game () { 


//     for (let i = 0; i < 5; i++) {
//         playRound(playerChoice, computerChoice)
//     }

//     if (playerScore > computerScore)
//     console.log(` You won! The score was ${playerScore} - ${computerScore} !`)

//     if (playerScore < computerScore)
//     console.log(` You lost! The score was ${playerScore} - ${computerScore} !`)

//     if (playerScore === computerScore) {
//         console.log(`It was a tie! ${playerScore} - ${computerScore}` )
//     }
// }









