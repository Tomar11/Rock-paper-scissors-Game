let userScore = 0;
let AiScore = 0;

const choicesList = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userScoreCount = document.querySelector("#user-score");
const AiScoreCount = document.querySelector("#AI-score");

const genAiChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    message.innerText = "Game was Draw, Try Again!";
    message.style.backgroundColor = "#081b31";
}

const showWinner = (Win,userChoice,AiChoice) => {
    if(Win){
        userScore++;
        message.innerText = `You Win! Your ${userChoice} beats ${AiChoice}`;
        message.style.backgroundColor = "green";
        userScoreCount.innerText = userScore;
    }
    else{
        AiScore++;
        message.innerText = `You lose! ${AiChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        AiScoreCount.innerText = AiScore;

    }

};

const playGame = (userChoice) => {
    let userWin = true;
    console.log("userChoice =",userChoice);
    const AiChoice = genAiChoice();
    console.log("Ai Choice =",AiChoice);

    if(userChoice === AiChoice){
        drawGame();
    }
    else{
        if(userChoice === "rock"){
            userWin = AiChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userWin = AiChoice ==="scissors"? false: true;
        }
        else{
            userWin = AiChoice ==="rock"? false: true;
        }
    
        showWinner(userWin,userChoice,AiChoice);

    }
    
}

choicesList.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});

