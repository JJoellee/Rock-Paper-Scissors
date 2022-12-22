function getComputerChoice(){
    let choice;
    const number = Math.floor(Math.random()*3);
    if(number==0) choice="rock";
    else if(number==1) choice="paper";
    else  choice="scissors";
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result;
    if(playerSelection==computerSelection){result=0; console.log("Tie.");} 
    else if((playerSelection=="rock" && computerSelection=="paper") 
    || (playerSelection=="paper" && computerSelection=="scissors") 
    || (playerSelection=="scissors" && computerSelection=="rock")){
        result=-1;
        console.log("You lose :( "+ computerSelection + " beats " + playerSelection);
    } 
    else {
        result=1;
        console.log("You win!! " +  playerSelection + " beats " + computerSelection);}
    return result;
}

function game(){
    let winner;
    let playerScore=0, computerScore=0;
    for (let i = 0; i < 5; i++) {
       
        let playerSelection = window.prompt("Round " + i +": Rock, paper, or scissors?");
        let result = playRound(playerSelection, getComputerChoice());
        if(result==1) playerScore++;
        else if(result==-1) computerScore++;
     }
     if(playerScore>computerScore) winner="You";
     else winner= "Bot";
     console.log(winner + " won!");
}

game();