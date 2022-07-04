'use strict';

// const calcAge = (birthYear) => {
//   const age = 2037 - birthYear;

//   const printAge = () => {
//     const output = `${firstName}, you are ${age} born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);
//     }
//     console.log(millenial);
//   };
//   printAge();
//   return age;
// };

// let firstName = 'Jonas';
// console.log(calcAge(1991));

// {
//   {
//     const xd = 0;
//     firstName = 'juan';
//   }
// }

// console.log(firstName);
// console.log(xd)

// console.log(me);
// console.log(job);
// console.log(year);


// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;


// console.log(add(2, 3));
// console.log(add2(2, 3));
// console.log(addArrow(2, 3));

// function add(a, b) {
//   return a + b;
// }

// const add2 = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(this);

// function a(birthYear) {
//   console.log(this);
//   return 2037 - birthYear;
// }


// const b = function(birthYear) {
//   console.log(this);
//   return 2037 - birthYear;
// }

// const c = (birthYear) => {
//   console.log(this);
//   return 2037 - birthYear
// }

// console.log(a(2000));
// console.log(b(2000));
// console.log(c(2000));


// const jonas = {
//   year: 1991,
//   calcAge() {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,

  family: ['Allice', 'Bob'],
};

console.clear();
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jhon');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
