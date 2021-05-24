'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};
const displayHigh = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input number
  if (!guess) {
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct Number!');
    displayColor('#60b347');
    displayWidth('30rem');

    if (score > highScore) {
      highScore = score;
      displayHigh(highScore);
    }

    // When is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
      displayColor('#222');
      displayWidth('15rem');
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayNumber('?');
  displayGuess('');
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayColor('#222');
  displayWidth('15rem');
});
