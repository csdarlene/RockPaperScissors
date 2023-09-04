let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result >p ");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function win() {
    console.log(" YOU WON");
    userScore++
    userScore_span.innerHTML = userScore;
}

function lose() {
    console.log(" YOU LOST");
    computerScore++
    computerScore_span.innerHTML = computerScore
}

function draw() {
    console.log("TIE");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("computer: " + computerChoice);

    const element1 = document.getElementById(userChoice);
    element1.classList.add('hotpink-glow');

    const element2 = document.getElementById(computerChoice);
    element2.classList.add('blue-glow');

    setTimeout(() => {
        element2.classList.remove('blue-glow');
        element1.classList.remove('hotpink-glow');
    }, 1000);

    switch (userChoice + computerChoice) {
        case"pr":
            result_div.innerHTML = "Paper covers rock. You win!🔥";
            win();
            break;
        case"sp":
            result_div.innerHTML = "Scissor cuts paper. You win!🔥";
            win();
            break;
        case"rs":
            result_div.innerHTML = "Rock punches scissor. You win!🔥";
            win();
            break;
        case"rp":
            result_div.innerHTML = "Paper covers rock. You lost!☹️";
            lose();
            break;
        case"ps":
            result_div.innerHTML = "Scissor cuts paper. You lost!☹️";
            lose();
            break;
        case"sr":
            result_div.innerHTML = "Rock punches scissor.  You lost!☹️";
            lose();
            break;
        case"rr":
            result_div.innerHTML = "TIE";
            draw();
            break;
        case"pp":
            result_div.innerHTML = "TIE";
            draw();
            break;
        case"ss":
            result_div.innerHTML = "TIE";
            draw();
            break;
    }
}

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const number = Math.floor(Math.random() * 3);
    return choices[number];
}

function main() {
    rock_div.addEventListener('click', function () {
        console.log("clicked: rock");
        game("r");
    })
    paper_div.addEventListener('click', function () {
        console.log("clicked: paper");
        game("p");
    })
    scissor_div.addEventListener('click', function () {
        console.log("clicked: scissor");
        game("s");
    })
}

main()


