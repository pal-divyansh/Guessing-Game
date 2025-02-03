let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numguesses = 0;

const btn = document.getElementById("btn");
const input = document.querySelector(".entry input");
const wrng = document.querySelector(".wrong");
const guesses = document.querySelector(".guesses");

btn.addEventListener("click", () => {
    guessNumber();
});

function guessNumber() {
    const userGuess = parseInt(input.value);
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        wrng.innerHTML = "Enter a number between 1 and 100";
    } else {
        numguesses++;
        guesses.innerHTML = "No. of Guesses: " + numguesses;
        if (userGuess > answer) {
            wrng.innerHTML = "You guessed too high!!";
            input.value = "";
        } else if (userGuess < answer) {
            wrng.innerHTML = "You guessed too low!!";
            input.value = "";
        } else {
            wrng.innerHTML = "Congrats! You guessed the right answer";
            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 3000);
        }
    }
}

function resetGame() {
    numguesses = 0;
    answer.Math.floor(Math.random() * 100) + 1;
    input.value = "";
    guesses.innerHTML = "No. of Guess: 0";
    btn.disabled = false;
}