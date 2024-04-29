// create a function called getComputerChoice
// use  Math.random to give a nunber , either 0 or 1 or 2
// if the nunber is 1 return rock
// if the number is 2 return paper 
// if the nunber is 3 return scissors 
function  getComputerChoice() {
    let Randomnum = Math.floor(Math.random()*3);
    if (Randomnum==0) return "rock";
    else if (Randomnum==1)return "paper";
    else return "scissors";
}
// create a function called getHumanChoice
// ask the user for input using prompt
// the answer must be either rock , paper , scissors
function getHumanChoice(){
    let humanchoice = prompt("enter your choice :","rock or paper or scissor");
    return humanchoice
}
let humanScore     = 0 ;
let computerScore  = 0 ;
// create a function called playRound
// make it accept 2 parameters , one from human and one from computer
// make the human one case insentive
// compare the two parameters using this logic
// rock > scissor || scissor > paper || paper > rock
// according to that announce the winner
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock"){
        if(computerChoice === "scissor") {
            humanScore++;
         alert("you win , rock beat scissor");
        }
        else if (computerChoice === "rock") {
             alert("Draw");
        }
        else{
            computerScore++;
             alert("you lose , paper beat rock");
        }
        
    }
    else  if(humanChoice === "paper"){
        if(computerChoice === "rock") {
            humanScore++;
             alert("you win , paper beat rock");
        }
        else if (computerChoice === "paper") {
             alert("Draw");
        }
        else{
            computerScore++;
             alert("you lose , scissor beat paper");
        }
        
    }
    else{
        if(computerChoice === "papper") {
            humanScore++;
             alert("you win , scissor beat paper");
        }
        else if (computerChoice === "scissor") {
             alert("Draw");
        }
        else{
            computerScore++;
             alert("you lose ,rock beat scissor");
        }
        
    }
  }
// create a function called playgame
// you have to repeat the playround function 5 times
// you have to keep the score 
// and finally annouce the winner
function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("humanscore: " + humanScore);
        console.log("computerscore: " + computerScore);    
    }
    if(humanScore>computerScore){
        alert("you win!!");
    }
    else if(humanScore === computerScore){
        alert("Draw");
    }
    else{
        alert("the computer win");
    }
}
playGame();