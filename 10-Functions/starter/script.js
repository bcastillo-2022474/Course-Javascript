"use strict";

// const books = [];
// /* ES5 WAY
// const createdBooking = (flightNum, numPassengers, price) => {
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   books.push(booking);
// };
// */

// // ES6 WAY

// const createdBooking = (flightNum = "Xz123", numPassengers = 2, price = 199 * numPassengers) => {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   books.push(booking);
// };
// createdBooking("LH123", undefined, 100);
// console.log(books);

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 123456789,
// };

// console.log("jonas", jonas);

// const checkIn = (flightNum, passenger) => {
//   flightNum = "LH9999";
//   passenger.name = `Mr. ${passenger.name}`;

//   if (passenger.passport === 123456789) console.log("Check in");
//   else console.log("");
// };
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// checkIn(flight, jonas);
// console.log(jonas);
// console.log(flight);

/*
const oneWord = (str) => str.replace(/ /g, "").toLowerCase();

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// Higher-order function
const transformer = (str, fn) => {
  console.log(`Original String: ${str}`);
  console.log(`transformed String: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};
transformer("Javascript is the best!", upperFirstWord);
console.log("-----------------");
transformer("Javascript is the best!", oneWord);
*/

// const greet = (greeting) => {
//   return function (name) {
//     console.log(greeting, name);
//   };
// };

// const greeterHey = greet("hey");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("hello")("Jonas");

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(`Index: ${i}, element: ${arr[i]}`);
//     }, 3000);
//   })(i);
// }
/*
const greet = (greeting) => (name) => console.log(greeting, name);

const greeterHey = greet("hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("hello")("Jonas");
*/
/*
const lufthansa = {
  airLine: "lufthansa",
  iataCode: "Lh",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, name` });
  },
};

lufthansa.book(78, "Joao");
console.log(lufthansa);

const euroWings = {
  airLine: "Eurowings",
  iataCode: "Ew",
  bookings: [],
};

const { book } = lufthansa;

// does NOT work, Obviously
// book(23, "jo");

// actually works xd
// euroWings.airLine = "none";
// euroWings.book = book;
// euroWings.book(23, "Sarah Williams");

book.call(euroWings, 23, "Sarah Williams");
book.call(lufthansa, 73, "Xavier");

const flightData = [583, "George Cooper"];
book.apply(euroWings, flightData);
book.call(euroWings, ...flightData);

const bookEw = book.bind(euroWings);

bookEw(...flightData);

const bookEw23 = book.bind(euroWings, 23); // define one argument
bookEw23("Juan");

//  With event Listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes += 1;
  console.log(this.planes);
};
*/
// lufthansa.buyPlane();

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
/*
const addTax = (rate, value) => rate * value + value;

console.log(addTax(0.1, 200));

const addIVA = addTax.bind(null, 0.12);

console.log(addIVA(400));

const addTaxClosure = (rate) =>
  function (value) {
    return rate * value + value;
  };

const addIVA1 = addTaxClosure(0.12);

console.log(addIVA1(100));
*/

// const fns = [];

// let c;
// for (var i = 0; i < 5; i++) {
//   c = i * 2;
//   fns.push(() => c);
// }

// c = 15;

// console.log(fns.map((el) => el()));
/*
const runOnce = function () {
  console.log("This will never run again(Fake)");
};
runOnce();
runOnce();

(function () {
  console.log("This really will never run again");
  var isPrivate = "is Not";
})();

console.log(isPrivate);

(() => console.log("This ALSO really will never run again"))();
*/
/*
let passengerCount = 0;

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount += 1;
    return passengerCount;
  };
};

// Doesnt Update Counter
console.log(secureBooking()());
console.log(secureBooking()());
console.log(secureBooking()());
console.log(secureBooking()());

const book = secureBooking();

console.log("---------------");
console.log(book());
console.log(book());
console.log(book());
console.log(book());
console.log(book());

console.log(passengerCount);

console.dir(book);
console.log(book);
*/
/*
const arr = [];
for (var i = 5; i > 1; i--) {
  arr.push(() => i);
  console.log(arr);
}

const arr1 = [];
for (var e = 5; e > 1; e--) {
  arr1.push((() => e)());
  console.log(arr1);
}

console.log("----------------------------------------------");
console.log(
  "arr",
  arr.map((el) => el)
);
console.log(
  "arr1",
  arr1.map((el) => el)
);

// Note how the first One Has Functions as Values,
// an the second One has "function ejecution Values" as Values, 
// so how you can Guess, the Second One Ejecutes The Function
// at moment, and thats why values stays, and the first One
// has the functions as values, 
// and only when Is called it executes, and when executed, 
// the value has Changed, Thats Because The Variable is Global

*/

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = () => {
  const b = 500;
  f = function () {
    console.log(b / 2);
  };
};

console.log(f);
g();
f();
h();
f();
const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boardin all ${n} passegers`);
    console.log(`There are 3 groups, each with ${perGroup} passegers`);
  }, wait * 1000);

  console.log(`Will start Boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(99, 8);

// let e;
// const arr1 = [];
// for (e = 5; e > 1; e--) {
//   setTimeout(() => {
//     arr1.push(e);
//   }, 8000);
// }

// // console.log(arr1.map((el) => el));

// for (const i of arr1) {
//   console.log(i);
// }

// console.log(arr1);

// setTimeout(() => console.log(arr1), 9000);

const arr = [];
// let i = 0;
// {
//   let i = 0;
//   if (i < 4) {
//     i++;
//     arr.push(() => i);
//   }
//   if (i < 4) {
//     i++;
//     arr.push(() => i);
//   }
//   if (i < 4) {
//     i++;
//     arr.push(() => i);
//   }
//   if (i < 4) {
//     i++;
//     arr.push(() => i);
//   }
//   if (i < 4) {
//     i++;
//     arr.push(() => i);
//   }
//   if (i < 4) {
//     i++;
//     arr.push(() => i);
//   }
// }

// const arr1 = [];
// for (let i = 0; i < 6; i++) {
//   arr1.push(() => i);
// }

// const arr2 = [];
// let i = 0;
// while (i < 6) {
//   arr2.push(() => i);
//   i++;
// }

// const arr3 = [];
// {
//   let i = 0;
//   i = i++;
//   arr3.push(() => i);
//   i = i++;
//   arr3.push(() => i);
//   i = i++;
//   arr3.push(() => i);
//   i = i++;
//   arr3.push(() => i);
//   i = i++;
//   arr3.push(() => i);
// }

// console.log(
//   "arr",
//   arr.map((el) => el())
// );
// console.log(
//   "arr1",
//   arr1.map((el) => el())
// );
// console.log(
//   "arr2",
//   arr2.map((el) => el())
// );
// console.log(
//   "arr3",
//   arr3.map((el) => el())
// );

// const arr = [];
// let i;
// for (i = 0; i < 3; i++) {
//   arr.push(() => i);
// }

// const arr = [];
// {
//   let i = 0;
//   {
//     i++;
//     arr.push(() => i);
//   }
//   {
//     i++;
//     arr.push(() => i);
//   }
//   {
//     i++;
//     arr.push(() => i);
//   }
//   {
//     i++;
//     arr.push(() => i);
//   }
//   {
//     i++;
//     arr.push(() => i);
//   }
// }
// for (var i = 0; i < 3; i++) {
//   ((x) => {
//     setTimeout(() => console.log(x), 5000);
//   })(i);
// }

// // run begin
// let i = 0;
// // if condition → run body and run step
// if (i < 3) {
//   arr.push(() => i);
//   i++;
// }
// // if condition → run body and run step
// if (i < 3) {
//   arr.push(() => i);
//   i++;
// }
// // if condition → run body and run step
// if (i < 3) {
//   arr.push(() => i);
//   i++;
// }
// // ...finish, because now i == 3

// arr.forEach((el) => console.log(el()));
