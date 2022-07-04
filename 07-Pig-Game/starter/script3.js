const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let activePlayer; let currentScore; let scores; let
  playing;

const newGame = () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  diceImage.classList.add('hidden');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner', 'player--active');
};

newGame();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const randomNumber = () => {
  if (playing) {
    diceImage.classList.remove('hidden');
    const num = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `dice-${num}.png`;
    if (num === 1) {
      currentScore = 0;
      return switchPlayer();
    }
    currentScore += num;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
};

const hold = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceImage.classList.add('hidden');
    }
    switchPlayer();
  }
};
btnRoll.addEventListener('click', randomNumber);
btnHold.addEventListener('click', hold);

btnNew.addEventListener('click', newGame);
