const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score1.textContent = 0;
score2.textContent = 0;

const hold = () => {
  if (player1El.classList.contains('player--active')) {
    score2.textContent = Number(score2.textContent) + Number(current1El.textContent);
    current1El.textContent = 0;
    player1El.classList.remove('player--active');

    if (Number(score2.textContent) >= 100) {
      player1El.classList.add('player--winner');
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden');
      diceImage.classList.add('hidden');
    }
    return player0El.classList.add('player--active');
  }

  if (player0El.classList.contains('player--active')) {
    score1.textContent = Number(score1.textContent) + Number(current0El.textContent);
    current0El.textContent = 0;
    player0El.classList.remove('player--active');

    if (Number(score1.textContent) >= 100) {
      player0El.classList.add('player--winner');
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden');
      diceImage.classList.add('hidden');
    }
    return player1El.classList.add('player--active');
  }
};

const randomNumber = () => {
  const num = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `dice-${num}.png`;

  if (player1El.classList.contains('player--active')) {
    current1El.textContent = Number(current1El.textContent) + num;

    if (num === 1) {
      current1El.textContent = 0;
      return hold();
    }
  }

  if (player0El.classList.contains('player--active')) {
    current0El.textContent = Number(current0El.textContent) + num;

    if (num === 1) {
      current0El.textContent = 0;
      return hold();
    }
  }
};

const newGame = () => {
  current1El.textContent = 0;
  current0El.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  diceImage.src = 'dice-5.png';
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  diceImage.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  diceImage.classList.remove('hidden');
};

btnRoll.addEventListener('click', randomNumber);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', newGame);
