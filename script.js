let playerWin = 0;
let computerWin = 0;
let playerInput = "";
let displayResult = document.querySelector(".display");
const SELECTROCK = document.querySelector(".rock-btn");
const SELECTPAPER = document.querySelector(".paper-btn");
const SELECTSCISSORS = document.querySelector(".scissors-btn");
const PLAYAGAIN = document.querySelector(".play-again");
const PLAYERSCORE = document.querySelector(".your-score");
const COMPUTERSCORE = document.querySelector(".computer-score");
const DIALOGBOX = document.querySelector(".dialog-box");
const CLOSEBUTTON = document.querySelector(".close-button");
const BOX = document.querySelector(".box");
const HEADER = document.querySelector(".header");

PLAYAGAIN.addEventListener("click", () => {location.reload();});
CLOSEBUTTON.addEventListener("click", () => {BOX.style.display = "none"});

window.onclick = function(e){
    if(e.target == BOX){
        BOX.style.display = "none";
    }
}

SELECTROCK.addEventListener("click", () => {
    SELECTROCK.classList.add("button-select");
    playRound("rock",computerPlay());
    });
SELECTPAPER.addEventListener("click", () => {
    SELECTPAPER.classList.add("button-select");
    playRound("paper",computerPlay());
    });
SELECTSCISSORS.addEventListener("click", () => {
    SELECTSCISSORS.classList.add("button-select");
    playRound("scissors",computerPlay());
    });
    function removeeffect(e){
        e.target.classList.remove("button-select");
    }
SELECTROCK.addEventListener("animationend",removeeffect);
SELECTPAPER.addEventListener("animationend",removeeffect);
SELECTSCISSORS.addEventListener("animationend",removeeffect);
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
        COMPUTERSCORE.textContent = computerWin;
        PLAYERSCORE.textContent = playerWin;
        displayResult.innerHTML = "Computer chose: Paper"+"<br/>"+"You Lose! Paper wraps Rock<br/>";
        result();
    }
    else if(playerSelection=="paper" && computerSelection=="scissors"){
        computerWin += 1;
        COMPUTERSCORE.textContent = computerWin;
        PLAYERSCORE.textContent = playerWin;
        displayResult.innerHTML = "Computer Chose: Scissors"+"<br/>"+"You Lose! Scissors cuts Paper<br/>";
        result();
    }
    else if(playerSelection=="scissors" && computerSelection=="rock"){
        computerWin += 1;
        COMPUTERSCORE.textContent = computerWin;
        PLAYERSCORE.textContent = playerWin;
        displayResult.innerHTML = "Computer Chose: Rock"+"<br/>"+"You Lose! Rock blunts Scissors<br/>";
        result();
    }
    else if(computerSelection=="rock" && playerSelection=="paper"){
        playerWin += 1;
        COMPUTERSCORE.textContent = computerWin;
        PLAYERSCORE.textContent = playerWin;
        displayResult.innerHTML = "Computer Chose: Rock"+"<br/>"+"You Win! Paper wraps Rock<br/>";
        result();
    }
    else if(computerSelection=="paper" && playerSelection=="scissors"){
        playerWin += 1;
        COMPUTERSCORE.textContent = computerWin;
        PLAYERSCORE.textContent = playerWin;
        displayResult.innerHTML = "Computer Chose: Paper"+"<br/>"+"You Win! Scissors cuts Paper<br/>";
        result();
    }
    else if(computerSelection=="scissors" && playerSelection=="rock"){
        playerWin += 1;
        COMPUTERSCORE.textContent = computerWin;
        PLAYERSCORE.textContent = playerWin;
        displayResult.innerHTML = "Computer Chose: Scissors"+"<br/>"+"You Win! Rock blunts Scissors<br/>";
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
        DIALOGBOX.innerHTML += "You win! Congratulations";
        disableButtons();
        BOX.style.display = "block";
        HEADER.style.visibility = "hidden";
    }
    else if(computerWin == 5){
        DIALOGBOX.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Won!";
        disableButtons();
        BOX.style.display = "block";
        HEADER.style.visibility = "hidden";
    }
    else if((computerWin && playerWin) == 5){
        DIALOGBOX.innerHTML= "It's a draw!!";
        BOX.style.display = "block";
        HEADER.style.visibility = "hidden";
    }
    else {
        return;
    }
}
