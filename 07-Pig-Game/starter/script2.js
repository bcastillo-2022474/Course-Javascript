// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
// starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add('hidden');
let playing = true;

const switchPlayer = () => {
  if (playing) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

// Rolling dice functionality
const randomNumber = () => {
  if (playing) {
    const num = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');

    diceImage.src = `dice-${num}.png`;
    if (num !== 1) {
      currentScore += num;
      document.getElementById(
        `current--${activePlayer}`,
      ).textContent = currentScore;
      return currentScore;
    }
    switchPlayer();
  }
};
btnRoll.addEventListener('click', randomNumber);

const hold = () => {
  scores[activePlayer] += currentScore;
  currentScore = 0;

  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  if (scores[activePlayer] >= 10) {
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceImage.classList.add('hidden');
  }
  switchPlayer();
};

btnHold.addEventListener('click', hold);

const newGame = () => {
  currentScore = 0;
  activePlayer = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  diceImage.classList.add('hidden');
  playing = true;
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner', 'player--active');
};

btnNew.addEventListener('click', newGame);


