// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 0];

// const eurToUsd = 1.1;

// const eurValues = movements.map((mov) => mov * eurToUsd);
// eurValues.forEach((e) => console.log(e));

// const deposits = movements.filter((mov) => mov > 0);
// const withdrawal = movements.filter((mov) => mov < 0);
// console.log("deposits", deposits);
// console.log("withdrawal", withdrawal);

// const reduce = movements.reduce((acc, e) => acc + e);
// console.log(deposits.reduce((acc, e) => acc + e));
// console.log(withdrawal.reduce((acc, e) => acc + e));
// console.log("reduce", reduce);

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log("firstWithdrawal", firstWithdrawal);
// console.log(movements);

// // Includes
// console.log(movements.includes(-138)); // Revisa si alguno de los elemntos es igual al valor dado
// console.log(movements.some((mov) => mov === -138)); // Es lo mismo que ejemplo de arriba

// // Some
// console.log(movements.some((mov) => mov > 0)); // Revisa si uno de los elementos Cumple con la Condition;

// console.log(movements.every((mov) => mov > 0)); // Revisa si todo los elemntos del array dado cumple con la condition

// const arrDeep = [[1, 2, 3], 4, 5, 6, [7, 8, 9], [[[10, 11, [[12]]]]]];
// console.log(arrDeep.flat(5)); // GREAT, Can Flat NESTED ARRAYS

// const accountMovements = accounts.map((acc) => acc.movements).flat(); // Not so bad, and yo can go multiple leves deeper
// console.log("accountMovements", accountMovements);

// // FlatMap Method
// const accountMovementsFlatMap = accounts.flatMap((acc) => acc.movements); // Better Performance but just go 1 level deeper
// console.log("accountMovementsFlatMap", accountMovementsFlatMap);

// // Sort

// // letters
// const letters = ["b", "c", "a", "d", "e"]; // Mutates array; BETTER AVOID
// console.log("letters", letters.sort());

// // numbers

// console.log([2, 1].sort((a, b) => a - b));

// const arr = new Array(9).fill("hola", 2);
// console.log(arr);

// const arrFill = Array.from({ length: 7 }, (_, i) => (i + 1) * 2);
// console.log("arrFill", arrFill);

// console.log(
//   Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1),
// );

const convertTitleCase = (title) => {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

  return title
    .toLowerCase()
    .replaceAll("\n", "")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((w) =>
      exceptions.includes(w) ? w : w.replace(w[0], w[0].toUpperCase()),
    )
    .join(" ");
};

console.log(convertTitleCase("  this is \n a nice title "));
