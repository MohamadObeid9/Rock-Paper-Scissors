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
// console.log(getComputerChoice());
// create a function called getHumanChoice
// ask the user for input using prompt
// the answer must be either rock , paper , scissors
function getHumanChoice(){
    let humanchoice = prompt("enter your choice :","rock or paper or scissor");
    return humanchoice
}
// console.log(getHumanChoice());
let humanScore     = 0 ;
let computerScore  = 0 ;
// create a function called playRound
// make it accept 2 parameters , one from human and one from computer
// make the human one case insentive
// compare the two parameters using this logic
// rock > scissor || scissor > paper || paper > rock
// according to that announce the winner
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock"){
        if(computerChoice =="scissor") {
            humanScore++;
            return alert("you win , rock beat scissor");
        }
        else if (computerChoice == "rock") {
            return alert("Draw");
        }
        else{
            computerScore++;
            return alert("you lose , paper beat rock");
        }
        
    }
    else  if(humanChoice == "paper"){
        if(computerChoice =="rock") {
            humanScore++;
            return alert("you win , paper beat rock");
        }
        else if (computerChoice == "paper") {
            return alert("Draw");
        }
        else{
            computerScore++;
            return alert("you lose , scissor beat paper");
        }
        
    }
    else{
        if(computerChoice =="papper") {
            humanScore++;
            return alert("you win , scissor beat paper");
        }
        else if (computerChoice == "scissor") {
            return alert("Draw");
        }
        else{
            computerScore++;
            return alert("you lose ,rock beat scissor");
        }
        
    }
  }
  playRound(humanSelection, computerSelection);
  console.log("humanscore: "+ humanScore);
  console.log("computerscore: "+ computerScore)