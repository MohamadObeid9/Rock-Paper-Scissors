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
let compchoice = getComputerChoice();
console.log(getComputerChoice());