'use strict';

/*

// Strict mode
const hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can Drive');
*/

/*
// Functions

function logger() {
  console.log('My name is Jonas');
}
// calling the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function Declaration vs Expressions

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(2005));

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge2(1991));
*/

/*
// Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
// Functions calling other functions

const cutFruitProcessor = (fruit) => fruit * 4;

const fruitProcessor = (apples, oranges) => {
  const applePieces = cutFruitProcessor(apples);
  const orangePieces = cutFruitProcessor(oranges);
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
};

console.log(fruitProcessor(2, 3));
*/

/*
// Reviewing Functions

const age = (year, birthYear) => year - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const retirement = 65 - age(2037, birthYear);
  if (retirement <= 0) return `${firstName} is already retired`;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2005, 'Joao'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
console.log(yearsUntilRetirement(1970, 'Jose'));
*/

/*
// Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0], friends[1], friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Joao';
const joao = [firstName, 'Castillo', 2037 - 2005, 'teacher', friends];
console.log(joao);

const yearss = [1991, 1200, 2002, 2030, 1999];

const calcAge = (array) => {
  let result = [];
  for (let i of array) {
    i = 2037 - i;
    result.push(i);
  }
  return result;
};

console.log(calcAge(yearss));
*/

/*
// Basic Array Operations (Methods)

// Adding Elements

const friends = ['michael', 'Steven', 'Peter'];

friends.push('Jay');
console.log(friends);

friends.unshift('Jhon');
console.log(friends);

// Removing elements

console.clear();
console.log(friends.pop());
console.log(friends);
friends.pop();
console.log(friends.pop());
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Michael'));

console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
  console.log('you have a friend called Peter');
} else console.log('false');

if (friends.indexOf('Peter') !== -1) {
  console.log('you have a friend called Peter');
} else console.log('falseee');
*/

/*
// Introduction to Objects
const jonasArray = {
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
}

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven']
}
*/

/*
// Dot vs Bracket Notation

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

// console.log(jonas.last+nameKey);

const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends');
// console.log(jonas.interestedIn);
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else console.log('wrong request!');

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

*/

/*
// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLicense: true,

  // calcAge: (birthYear) => 2037 - birthYear,

  // calcAge: function a() { return 2037 - this.birthYear; },
  calcAge: function a() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function a() {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and ${this.hasDriverLicense
      ? 'he has a driver\'s license' : 'he hasn\'t a driver license'}`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
// console.log(jonas['calcAge'](1991));
*/

/*
// loops

for (let i = 1; i <= 10; i += 1) {
  console.log(`rep number ${i}`);
}
*/

/*
// Looping Arrays, Breaking and continue

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = [];

for (let i = 0; i <= jonasArray.length - 1; i += 1) {
  console.log(jonasArray[i]);
  types.push(typeof jonasArray[i]);
}

for (let i = jonasArray.length - 1; i >= 0; i -= 1) {
  console.log(jonasArray[i]);
}

// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

let rep = 0;
while (rep < years.length) {
  ages.push(2037 - years[rep]);
  if ((rep >= years.length)) break;
  rep += 1;
}

console.log(ages);


// continue, Break

let types2 = [];

console.log('-------------STRINGS----------------');
for (let i = 0; i < jonasArray.length; i += 1) {
  if (typeof jonasArray[i] !== 'string') continue;
  types2.push(typeof jonasArray[i]);
  // console.log(jonasArray[i], typeof jonasArray[i]);
}

// console.log('------------------------------------------------------------------------------------------');
console.log(types2);
console.log(jonasArray.length);

let types3 = [];
console.log('-------------BREAK----------------');
for (let i = 0; i < jonasArray.length; i += 1) {
  if (typeof jonasArray[i] === 'object') break;
  types3.push(typeof jonasArray[i]);
  // console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(types3);
*/


/*
// looping backwards and loops inside loops

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

for (let i = jonasArray.length - 1; i >= 0; i -= 1) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise += 1) {
  console.log(`------------------Starting Exercise ${exercise}--------------------`);

  for (let rep = 1; rep < 6; rep += 1) {
    console.log(`exercise ${exercise}: lift weight repetition ${rep}`);
  }
}
*/



// The while Loop



let rep = 1;

while (rep < 10) {
  console.log(`While: lifting weigths repetition ${rep}`);
  rep += 1;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);


while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
