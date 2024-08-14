const buttonRock = document.querySelector("#rock")
const buttonPaper = document.querySelector("#paper")
const buttonScissors = document.querySelector("#scissors")
const yourPlay = document.querySelector(".your-play")
const iaPlay = document.querySelector(".ia-play")
let yourScore = document.querySelector(".your-score span")
let iaScore = document.querySelector(".ia-score span")
let result = document.querySelector(".result")
let yourScoreValue = 0
let iaScoreValue = 0
let body = document.querySelector("body")
let yourChoice = document.querySelector(".your-choice")
let iaChoice = document.querySelector(".ia-choice")
const mascara = document.querySelector(".mascara-jokempo")
const defaultSymbol = "?"


const playIa = () => {

    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; //const iaChoiceValue = choices[randomNumber];
};
const showChoices = (humanChoiceValue, iaChoiceValue) => {

    setTimeout(() => {
        if (humanChoiceValue === "rock") {
            yourChoice.innerHTML = "&#x1F91C;"
            yourChoice.style.transform = "rotate(0deg)"
        }

        else if (humanChoiceValue === "paper") {
            yourChoice.innerHTML = "&#x1F590;"
            yourChoice.style.display = "inline-block"
            yourChoice.style.transform = "rotate(90deg) scaleX(-1)"
        }

        else if (humanChoiceValue === "scissors") {
            yourChoice.innerHTML = "&#x270C;"
            yourChoice.style.display = "inline-block"
            yourChoice.style.transform = "rotate(90deg) scaleX(-1)"
        }



        if (iaChoiceValue === "rock") {
            iaChoice.innerHTML = "&#x1F91B;"
            iaChoice.style.transform = "rotate(0deg)"
        }

        else if (iaChoiceValue === "paper") {
            iaChoice.innerHTML = "&#x1F590;"
            iaChoice.style.display = "inline-block"
            iaChoice.style.transform = "rotate(-90deg) scaleX(1)"
        }

        else if (iaChoiceValue === "scissors") {
            iaChoice.innerHTML = "&#x270C;"
            iaChoice.style.display = "inline-block"
            iaChoice.style.transform = "rotate(-90deg) scaleX(1)"
        }

    }, 500);
};

const playTheGame = (human, ia) => {
    //console.log("Humano: " + human + " IA: " + ia);

    setTimeout(() => {
        if (human === ia) {
            result.innerHTML = "EMPATE!"
            result.style.color = "transparent";
            result.style.background = "linear-gradient(180deg, #999999 20%, #C2C2C2 50%, #999999 100%)";
            result.style.webkitBackgroundClip = "text";

        }

        else if (
            (human === "rock" && ia === "scissors") ||
            (human === "paper" && ia === "rock") ||
            (human === "scissors" && ia === "paper")
        ) {
            result.innerHTML = "VITORIA!"
            result.style.color = "transparent";
            result.style.backgroundImage = "linear-gradient(180deg, #F3C05B 30%, #ffe729 50%, #d04143 120%)";
            result.style.backgroundClip = "text";
            result.style.webkitBackgroundClip = "text";
            yourScoreValue++
            yourScore.innerHTML = yourScoreValue
        }

        else {
            result.innerHTML = "DERROTA!"
            result.style.color = "transparent";
            result.style.backgroundImage = "linear-gradient(180deg, #ffa003 33%, #fc1212 66%, #252525 100%)";
            result.style.backgroundClip = "text";
            result.style.webkitBackgroundClip = "text";
            iaScoreValue++
            iaScore.innerHTML = iaScoreValue
        }

    }, 500); // Altere 500 para o tempo desejado em milissegundos
};


function humanChoice(click) {
    const clickedButton = click.target;
    let humanEscolha

    if (clickedButton === buttonRock) {
        humanEscolha = "rock"
    }

    else if (clickedButton === buttonPaper) {
        humanEscolha = "paper"
    }

    else if (clickedButton === buttonScissors) {
        humanEscolha = "scissors"
    }




    
    setTimeout(() => {
        const iaChoiceValue = playIa();
        showChoices(humanEscolha, iaChoiceValue);
        playTheGame(humanEscolha, iaChoiceValue);

    }, 500); // Altere 500 para o tempo desejado em milissegundos

    cliqueiNoBotao(); // Pode querer chamar essa função antes do atraso, para uma transição mais suave
}




function cliqueiNoBotao() {
    yourPlay.style.left = "50%"
    yourPlay.style.transform = "translateX(-100%)"

    iaPlay.style.right = "50%"
    iaPlay.style.transform = "translateX(100%)"
    mascara.style.visibility = "visible"
}


function cliqueiNaMascara() {
    mascara.style.visibility = "hidden"
    yourPlay.style.left = "-20px"
    iaPlay.style.right = " -20px"
    yourChoice.innerHTML = defaultSymbol;
    iaChoice.innerHTML = defaultSymbol;
    iaChoice.style.transform = "rotate(0deg)"
    yourChoice.style.transform = "rotate(0deg)"

}


buttonRock.addEventListener("click", humanChoice)
buttonPaper.addEventListener("click", humanChoice)
buttonScissors.addEventListener("click", humanChoice)





