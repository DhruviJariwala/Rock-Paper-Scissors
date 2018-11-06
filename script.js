let playerWin = 0;
let computerWin = 0;
let playerInput = "";
let displayResult = document.querySelector(".display");
const SELECTROCK = document.querySelector(".rock-btn");
SELECTROCK.addEventListener("click", () => {
    playRound("rock",computerPlay());
    });
const SELECTPAPER = document.querySelector(".paper-btn");
SELECTPAPER.addEventListener("click", () => {
    playRound("paper",computerPlay());
    });
const SELECTSCISSORS = document.querySelector(".scissors-btn");
SELECTSCISSORS.addEventListener("click", () => {
    playRound("scissors",computerPlay());
    });
function computerPlay(){
    let generate = Math.floor((Math.random()*3)+1);
    if(generate == 1){
        generate="rock";
    }
    else if(generate == 2){
        generate="paper";
    }
    else{
        generate="scissors";
    }
    return generate;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection=="rock" && computerSelection=="paper")
    {
        computerWin += 1;
        displayResult.innerHTML = "Computer chose: Paper"+"<br/>"+"Your Score : "+playerWin+"<br/>"+"Compter's Score: "+computerWin+"<br/>"+"You Lose! Paper wraps Rock<br/>";
        result();
    }
    else if(playerSelection=="paper" && computerSelection=="scissors"){
        computerWin += 1;
        displayResult.innerHTML = "Computer Chose: Scissors"+"<br/>"+"Your Score: "+playerWin+"<br/>"+"Computer's Score: "+computerWin+"<br/>"+"You Lose! Scissors cuts Paper<br/>";
        result();
    }
    else if(playerSelection=="scissors" && computerSelection=="rock"){
        computerWin += 1;
        displayResult.innerHTML = "Computer Chose: Rock"+"<br/>"+"Your Score: "+playerWin+"<br/>"+"Computer's Score: "+computerWin+"<br/>"+"You Lose! Rock blunts Scissors<br/>";
        result();
    }
    else if(computerSelection=="rock" && playerSelection=="paper"){
        playerWin += 1;
        displayResult.innerHTML = "Computer Chose: Rock"+"<br/>"+"Your Score: "+playerWin+"<br/>"+"Computer's Score: "+computerWin+"<br/>"+"You Win! Paper wraps Rock<br/>";
        result();
    }
    else if(computerSelection=="paper" && playerSelection=="scissors"){
        playerWin += 1;
        displayResult.innerHTML = "Computer Chose: Paper"+"<br/>"+"Your Score: "+playerWin+"<br/>"+"Computer's Score: "+computerWin+"<br/>"+"You Win! Scissors cuts Paper<br/>";
        result();
    }
    else if(computerSelection=="scissors" && playerSelection=="rock"){
        playerWin += 1;
        displayResult.innerHTML = "Computer Chose: Scissors"+"<br/>"+"Your Score: "+playerWin+"<br/>"+"Computer's Score: "+computerWin+"<br/>"+"You Win! Rock blunts Scissors<br/>";
        result();
    }
    else if(computerSelection==playerSelection){
        displayResult.innerHTML = "You both chose same. Select again<br/>";
    }
    else{
        displayResult.innerHTML = "Something's Wrong.... Reload the page..<br/>";
    }
}
function disableButtons(){
    SELECTPAPER.disabled = true;
    SELECTROCK.disabled = true;
    SELECTSCISSORS.disabled = true;
}
function result(){
    if(playerWin == 5){
        displayResult.innerHTML += "<br/>========================"+"<br/>"+"You win! Congratulations"+"<br/>"+"========================";
        disableButtons();
    }
    else if(computerWin == 5){
        displayResult.innerHTML += "<br/>========================"+"<br/>"+"Computer Won!"+"<br/>"+"========================";
        disableButtons();
    }
    else if((computerWin && playerWin) == 5){
        displayResult.innerHTML = "It's a draw!!";
    }
    else {
        return;
    }
}