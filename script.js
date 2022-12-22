let playerScore=0;
let computerScore=0;
let winner;

function getComputerChoice(){
    let choice;
    const number = Math.floor(Math.random()*3);
    if(number==0) choice="rock";
    else if(number==1) choice="paper";
    else  choice="scissors";
    return choice;
}

function playRound(playerSelection, computerSelection){
    let result = document.querySelector('#result');
    let end = document.querySelector('#end');
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==computerSelection){result.textContent = "You "+ playerScore + " - " + computerScore+" Bot"+ " \nTie.";} 
    else if((playerSelection=="rock" && computerSelection=="paper") 
    || (playerSelection=="paper" && computerSelection=="scissors") 
    || (playerSelection=="scissors" && computerSelection=="rock")){
        computerScore++;
        result.textContent = "You "+ playerScore + " - " + computerScore+" Bot"+ " \nYou lose :( "+ computerSelection + " beats " + playerSelection;
    } 
    else {
        playerScore++;
        result.textContent = "You "+ playerScore + " - " + computerScore+" Bot"+ " \nYou win!! " +  playerSelection + " beats " + computerSelection;
    }
    if (playerScore==5 || computerScore==5){
        if(playerScore>computerScore) winner="You";
        else winner= "Bot";
        end.textContent= winner + " won!";
    }

}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        playRound(button.textContent, getComputerChoice());
    }
    );
}
)

