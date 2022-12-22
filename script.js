//global vars
let playerScore=0;
let computerScore=0;
let winner;

//elements
let result = document.querySelector('#result'); //result for one round
let statement = document.querySelector('#statement'); //statement of one round
let startContainer = document.getElementById("start-container");
let start = document.querySelector('#start');
let gameContainer = document.getElementById("game-container");
let buttons = document.querySelectorAll('.gameBtn');
let endContainer = document.getElementById("end-container");
let end = document.querySelector('#end'); //end result


//get computer choice
function getComputerChoice(){
    let choice;
    const number = Math.floor(Math.random()*3);
    if(number==0) choice="rock";
    else if(number==1) choice="paper";
    else  choice="scissors";
    return choice;
}

// play one round
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==computerSelection){statement.textContent="Tie.";} 
    else if((playerSelection=="rock" && computerSelection=="paper") 
    || (playerSelection=="paper" && computerSelection=="scissors") 
    || (playerSelection=="scissors" && computerSelection=="rock")){
        computerScore++;
        statement.textContent= "You lose :( Computer chose "+ computerSelection + " beating your " + playerSelection;
    } 
    else {
        playerScore++;
        statement.textContent="You win!! You chose " +  playerSelection + " beating the computer's " + computerSelection;
    }
    result.textContent = "You "+ playerScore + " - " + computerScore+ " Bot";
    if (playerScore==5 || computerScore==5){
        if(playerScore>computerScore) winner="You";
        else winner= "Bot";
        end.textContent= winner + " won!";
        hideGame_showEnd();
    }

}

//add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        playRound(button.id, getComputerChoice());
    }
    );
}
)

// hide start div and show game div
start.addEventListener('click', function(){
    playerScore=0; computerScore=0; winner="";
    result.textContent = "You "+ playerScore + " - " + computerScore+" Bot";
    startContainer.style.display='none';
    gameContainer.style.display= 'block';
})

//hide game and show end, called when battle ends
function hideGame_showEnd() {
    gameContainer.style.display= 'none';
    endContainer.style.cssText="display: block; text-align: center; "; 
    let again = document.getElementById('again');
    again.addEventListener('click', ()=>{
        endContainer.style.display= 'none';
        startContainer.style.display='block';
    })
}

