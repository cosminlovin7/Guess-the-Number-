'use strict';

let valueToBeGuessed = Math.floor(Math.random() * 20) + 1;
let score = 0;
let highscore = 0;
let chances = 3;

document.getElementsByClassName('score')[0].innerHTML = score;
document.getElementsByClassName('highscore')[0].innerHTML = highscore;

console.log(valueToBeGuessed);

document.getElementsByClassName('btn check')[0].onclick = function() {
    let guessedNumber = document.getElementsByClassName('guess')[0].value;

    if (chances == 0) {
        if (score > highscore) { 
            highscore = score;
            document.getElementsByClassName('message')[0].innerHTML = 'New highscore set!';
            document.getElementsByClassName('highscore')[0].innerHTML = highscore;
        } else {
            document.getElementsByClassName('message')[0].innerHTML = 'Game Over! Press Again! to start another...';
        }
        return;
    }

    if (guessedNumber == valueToBeGuessed) {
        score += 20;
        valueToBeGuessed = Math.floor(Math.random() * 20) + 1;
        document.getElementsByClassName('message')[0].innerHTML = 'You guessed the number!!! Heheee <3';
    } else {
        chances--;

        if (guessedNumber < valueToBeGuessed)
            document.getElementsByClassName('message')[0].innerHTML = 'Number is too low... :(';
        else
            document.getElementsByClassName('message')[0].innerHTML = 'Number is too high... :(';
    }

    document.getElementsByClassName('chances')[0].innerHTML = chances;
    document.getElementsByClassName('score')[0].innerHTML = score;
    console.log(guessedNumber);
};

document.getElementsByClassName('btn again')[0].onclick = function() {
    chances = 3;
    score = 0;
    valueToBeGuessed = Math.floor(Math.random() * 20) + 1;

    document.getElementsByClassName('message')[0].innerHTML = 'Enter your guess...';
    document.getElementsByClassName('chances')[0].innerHTML = chances;
    document.getElementsByClassName('score')[0].innerHTML = score;
}
