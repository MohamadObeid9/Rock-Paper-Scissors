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
console.log(getComputerChoice());
// create a function called getHumanChoice
// ask the user for input using prompt
// the answer must be either rock , paper , scissors
function getHumanChoice(){
    let humanchoice = prompt("enter your choice :","rock or paper or scissor");
    return humanchoice ;
}
console.log(getHumanChoice());
let humanScore     = 0 ;
let computerScore  = 0 ;