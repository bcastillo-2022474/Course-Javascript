'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = (message) => document.querySelector('.message').textContent = message;
let score = 20;

let highScore = 0;

const check = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) console.log(document.querySelector('.message').textContent = 'No Number!');
  // when there is no input

  if (guess === secretNumber) {
    displayMessage('Correct Number!');

    document.querySelector('body').style.backgroundColor = '#73E341';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when the player wins

  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you Loose the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too High!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('you Loose the game');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when the Number is Greater


  // if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too Low!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('you Loose the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when the Number is lower
};



document.querySelector('.check').addEventListener('click', check);


const again = () => {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}
document.querySelector('.again').addEventListener('click', again);


