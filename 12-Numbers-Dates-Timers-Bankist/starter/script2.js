/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, "9"));

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.min("1", 2, 3, 4, 5, 6, 7, 8, 9));

console.log(Math.PI * Number.parseFloat("10x") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(randomInt(10, 23));

console.log(
  "Math.trunc",
  Math.trunc(12.1),
  "quita los decimales del numero dado"
);
console.log(
  "Math.trunc",
  Math.trunc(12.9),
  "quita los decimales del numero dado"
);

console.log("Math.round", Math.round(12.1), "aproxima normal");
console.log("Math.round", Math.round(12.9), "aproxima normal");

console.log("Math.ceil", Math.ceil(12.1), "aproxima al mayor");
console.log("Math.ceil", Math.ceil(12.9), "aproxima al mayor");

console.log("Math.floor", Math.floor(12.1), "aproxima al menor");
console.log("Math.floor", Math.floor(12.9), "aproxima al menor");

// Comparacion floor and Trunc

console.log("Math.trunc", Math.trunc(-3.123456));
console.log("Math.floor", Math.floor(-3.123456));

// esto es por lo antes ya explicado

// aproximando decimales
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(0));
console.log((2.72).toFixed(1));
console.log((2.791).toFixed(1));
console.log((2.99399).toFixed(2));
console.log((2.777777).toFixed(3));

// 287,460,000,000
const diameter = 287460000000;
// we can do this using _
const diameter1 = 287_460_000_000;

console.log(diameter1);

const priceCents = 345.999_120;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // Starts losing presition
console.log(2 ** 53 + 2); // calculation with higher numbers are unsafe;
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4, "x");
console.log(2 ** 53 + 5);
console.log(2 ** 53 + 1000000000); // it cant represnt it

console.log(1234567890123456789012345678901234);
console.log(1234567890123456789012345678901234n); // BigInt, look at the N

// console.log(BigInt(1234567890123456789012345678901234)); // is actually not the same
// yo should use BigInt constructor only in small numbers

console.log(1000n + 1000n);
// console.log(1000n + 1000); // error
console.log(20n >= 20);
console.log(20n === 20); // this are different types (primitives)

console.log(typeof 1n);
console.log(20 == 20);

console.log(10n + " is really big");

// MATH METHODS DOESNT WORK

// Division
console.log(10n / -6n); // it works like trunc;
console.log(Math.trunc(10 / -6));

*/
/*
const now = new Date();
console.log(now);

console.log(new Date("2022-04-22T21:01:17.078Z"));
console.log(new Date("Fri Apr 22 2022 15:01:17 GMT-0600"));
console.log(new Date("December 24, 2017"));

console.log(new Date(2037, 10, 19));
console.log(new Date(2037, 10, 33));

console.log(new Date(2022, 10, 19)); // my birthdate

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2142278580000));
console.log(Date.now());

console.log(future.getYear());

future.setFullYear(2040);

console.log(future);
*/

/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

console.log(calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24)));
*/
/*
const num = 3884764.23;

const options = {
  style: "unit",
  unit: "mile-per-hour",
  unit: "celsius",
  style: "percent",
  style: "currency",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syrira", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  "Browser",
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num),
);
*/
// setTimeout(
//   (ing1, ing2) => console.log(`pizza with ${ing1} and ${ing2}`),
//   5000,
//   "Pepperoni",
//   "Cheese",
// );
// console.log("Waiting...");

// const ingredients = ["olive", "cheese", "spinach"];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`pizza with ${ing1} and ${ing2}`),
//   5000,
//   ...ingredients,
// );

// if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval(() => {
//   const now = new Date();
//   const hour = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   console.log(`${hour}:${minutes}:${seconds}`);
// }, 1000);

//////////////////////////////////////
//////////////////////////////////////

const capitalize = (string) => {
  return string.toUpperCase();
};

const modify = (fun, value) => {
  const x = "";

  return (a) => {
    console.dir(fun);
    fun(value + x + a);
  };
};

const variable = modify(capitalize, "hola");
console.dir(variable);

console.log(variable(" JajJaj"));
