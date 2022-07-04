'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i += 1) {
  console.log(btnsOpenModal[i].textContent);
}

const OpenModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i += 1) {
  btnsOpenModal[i].addEventListener('click', OpenModal);
}


btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

const escapeModal = (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
};

document.addEventListener('keydown', escapeModal);
