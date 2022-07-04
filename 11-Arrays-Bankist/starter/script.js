"use strict";

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}$</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
const calcDisplayBalance = (account) => {
  account.balance = account.movements.reduce((acc, value) => acc + value);
  labelBalance.textContent = `${account.balance} EUR`;
};

const calcDisplaySummary = (account) => {
  account.incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${account.incomes}$`;

  account.out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);

  labelSumOut.textContent = `${Math.abs(account.out)}$`;

  const interest = account.movements
    .filter((mov) => mov > 0 && (mov * account.interestRate) / 100 > 1)
    .reduce((acc, int) => acc + (int * account.interestRate) / 100, 0);

  labelSumInterest.textContent = `${interest}$`;
};

const createUsernames = (arr) =>
  arr.forEach((newUser) => {
    newUser.userName = newUser.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word.slice(0, 1))
      .join("");
  });

createUsernames(accounts);
console.clear();
console.log(accounts);

let currentAccount;

const updateUI = (current) => {
  // Display Movements
  displayMovements(current.movements);

  // Display Balance
  calcDisplayBalance(current);

  // Display summary
  calcDisplaySummary(current);
};

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value,
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI Message
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner
      .split(" ")
      .at(0)}`;
    containerApp.style.opacity = 100;

    updateUI(currentAccount);
  }
  // clear Input fields;
  inputLoginUsername.value = "";
  inputLoginPin.value = "";
  inputLoginPin.blur();
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  console.log("amount", amount);

  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value,
  );
  console.log("receiverAcc", receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);

    updateUI(currentAccount);
  }
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
  inputTransferTo.blur();
  inputTransferAmount.blur();

  console.log("receiverAcc", currentAccount.movements);
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    inputLoanAmount.value > 0 &&
    currentAccount.movements.some(
      (deposits) => deposits > 0 && deposits > amount * 0.1,
    )
  ) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex((acc) => acc === currentAccount),
      1,
    );
    containerApp.style.opacity = 0;
    console.log(accounts);

    inputCloseUsername.value = "";
    inputClosePin.value = "";
    inputCloseUsername.blur();
    inputClosePin.blur();
  }
});

let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

/// //////////////////////////////////////////////
/*
let arr = [0, 1, 2, 3, 4];
let arr1 = [0, 1, 2, 3, 4];

// console.log("slice", arr.slice(2, 3)); //Primmer valor Index, Segundo valor Index
// console.log("slice", arr.slice(2, 3 + 2)); // Simulado Splice con Slice be like
// console.log("splice", arr1.splice(2, 3)); // Primer valor Index,
// Segundo valor: Elementos despues del index indicado


// console.log("-----------------");
// console.log("slice", arr);
// console.log("splice", arr1);

console.log(arr1.splice(1, 3, 2, 2, 3)); // Siempre devuelve el elemto eliminado
// se puede agregar multiples argumentos despues del 2,
// que seran el valor que se agregara en el array
console.log(arr1); // agrega el elemento en la Posicion del Primer arguento (index)
*/
/*
// Slice
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(2));

// Splice

// console.log(arr.splice(2));
console.log(arr.slice(0, -1));
const arr2 = [10, 22, 1, 4, 6, 9, 45, 18, 9];
// console.log(arr2.sort());

arr = ["a", "b", "c", "d", "e"];

const arrayConcat = arr.concat(arr2);
console.log(arrayConcat);
console.log([...arr, ...arr2]); // With spread Operator we can Use Concat equal

// Join

console.log(arr.join(" - "));
*/
/*
const arr = [12, 67, 82];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// At method works in Strings too

console.log("Jhon".at(-1));
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 0];

movements.forEach((element) => {
  if (Math.sign(element) === 1) console.log("positive");
  if (Math.sign(element) === 0) console.log("neutro");
  if (Math.sign(element) === -1) console.log("Negative");
});

console.log("---------------------------------------------------------");

for (const element of movements) {
  if (Math.sign(element) === 1) console.log("positive");
  if (Math.sign(element) === 0) console.log("neutro");
  if (Math.sign(element) === -1) console.log("Negative");
}

movements.forEach((e) => console.log(e));

console.log("------------------------------------");
movements.forEach((element) => {
  Math.sign(element) === 1
    ? console.log("positive")
    : Math.sign(element) === 0
    ? console.log("neutro")
    : console.log("Negative");
});

console.log(
  movements.map((element) =>
    Math.sign(element) === 1
      ? "positive"
      : Math.sign(element) === 0
      ? "Neutro"
      : "Negative"
  )
);

*/

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach((value, key, map) => console.log(value, key));

// // Set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, key) => console.log(value, key));

const arr = [1, 20, 3, 40, 15, 6, 70, 8, 9, 10];

console.log(arr.reduce((acc, value) => (value > acc ? value : acc), arr[0]));

labelBalance.addEventListener("click", () => {
  const movementsUI = [...document.querySelectorAll(".movements__value")].map(
    (el) => el.textContent.replace("$", ""),
  );

  const movementsUI2 = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => el.textContent.replace("$", ""),
  );
  console.log("movementsUI, Spread with map", movementsUI);
  console.log("movementsUI2, Array.from", movementsUI2);
});

const bankDepositSum = accounts
  .flatMap((account) => account.movements)
  .reduce((acu, mov) => acu + (mov > 0 ? mov : 0), 0);

// const bankDepositSum = accounts.reduce(
//   (acu, account) =>
//     acu + account.movements.reduce((acc, mov) => acc + (mov > 0 ? mov : 0)),
//   0,
// );

console.log("reduce", bankDepositSum);

const numDeposits1000 = accounts
  .flatMap((account) => account.movements)
  .reduce((acu, mov) => acu + (mov >= 1000 ? 1 : 0), 0);

// const numDeposits1000 = accounts.reduce(
//   (sum, account) =>
//     sum +
//     account.movements.reduce((acc, mov) => acc + (mov >= 1000 ? 1 : 0), 0),
//   0,
// );

console.log("numDeposits1000", numDeposits1000);

// const { deposits, withdrawals } = accounts
//   .flatMap((account) => account.movements)
//   .reduce(
//     (sum, curr) => {
//       curr > 0 ? (sum.deposits += curr) : (sum.withdrawals += curr);
//       return sum;
//     },
//     { deposits: 0, withdrawals: 0 },
//   );

accounts.forEach((acc) => console.log(acc.movements));

const { deposits, withdrawals } = accounts.reduce(
  (sum, account) => {
    account.movements.reduce(
      (acc, mov) => (sum[mov > 0 ? "deposits" : "withdrawals"] += mov),
      0,
    );
    return sum;
  },
  { deposits: 0, withdrawals: 0 },
);

console.log("sums", deposits, withdrawals);

const convertTitleCase = (title) => {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

  const newTitle = title
    .trim()
    .replaceAll("\n", "")
    .split(" ")
    .filter(Boolean)
    .map((w) => {
      exceptions.forEach((e) =>
        e === w ? w.replace(w[0], w[0].toUpperCase()) : w,
      );
      console.log(w);
      return w;
    })
    .join(" ");
};

console.log(convertTitleCase("  this is \n a nice title "));
