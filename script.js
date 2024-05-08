let humanScore            = 0 ;
let computerScore         = 0 ;
const container           = document.createElement("div");
document.body.appendChild(container);
container.style.cssText   = " text-align : center;";
const rock                = document.createElement("button");
const paper               = document.createElement("button");
const scissor             = document.createElement("button");
const display             = document.createElement("div");
const result              = document.createElement("div");
const text                = document.createElement("div");
const finalResult         = document.createElement("div");
rock.textContent          = " Rock";
paper.textContent         = " Paper";
scissor.textContent       = " Scissor";
text.textContent          = "let's play rock paper scissor";
container.appendChild(text);
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissor);
container.appendChild(display);
container.appendChild(result);
container.appendChild(finalResult);

// na2sa l annoucement bl a5ir
playGame();
function playGame(){ 
       rock.addEventListener("click",()=> playRound("rock",getComputerChoice()));
       paper.addEventListener("click",()=>playRound("paper",getComputerChoice()));
       scissor.addEventListener("click",()=> playRound("scissor",getComputerChoice()));  
}  

const  getComputerChoice =() => {
    const Randomnum = Math.floor(Math.random()*3);  
    if (Randomnum==0) return "rock";
    else if (Randomnum==1)return "paper";
    else return "scissor";
}  

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        display.textContent       = `HumanScore : ${humanScore} \n ComputerScore : ${computerScore}`;
        return result.textContent="Draw";
    } 
    else if(humanChoice === "rock"){
        if(computerChoice === "scissor") {
            humanScore++;
            display.textContent       = `HumanScore : ${humanScore} \n ComputerScore : ${computerScore}`;
           return result.textContent="you win , rock beat scissor";
           
        }     
        else{
            computerScore++;
            display.textContent       = `HumanScore : ${humanScore} \n ComputerScore : ${computerScore}`;
            return result.textContent="you lose , paper beat rock";
          }     
        
        }    
        else  if(humanChoice === "paper"){
            if(computerChoice === "rock") {
                humanScore++;
                display.textContent       = `HumanScore : ${humanScore} \n ComputerScore : ${computerScore}`;
                return result.textContent="you win , paper beat rock";
            }     
            else{
                computerScore++;
                display.textContent       = `HumanScore : ${humanScore} \n ComputerScore : ${computerScore}`;
                return   result.textContent="you lose , scissor beat paper";
            }     
            
        }    
        else{
            if(computerChoice === "papper") {
                humanScore++;
                display.textContent       = `HumanScore : ${humanScore} \n ComputerScore : ${computerScore}`;
                return    result.textContent="you win , scissor beat paper";
            }          
            else{
                computerScore++;
                display.textContent       = `HumanScore : ${humanScore} \n ComputerScore : ${computerScore}`;
                return    result.textContent="you lose ,rock beat scissor";
            }     
            
        }    
}  

