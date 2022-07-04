/*
// Values and Variables
const js = 'amazing';
// if (js === 'amazing') alert('Javascript is FUN!');
console.log(40 + 8 + 23);

let firstName = 'Jonas';
firstName = 'Joao';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let Jonas&Matilda = illegal;
const PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

console.clear();

*/

/*
// Data types

let number = 23;
let string = 'Joao';
let boolean = true; // false;
let undefine = undefined; // let undefined;
// let null = null;
let bigInt = 100;

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Jonas');
console.log(typeof 23);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

console.clear();

*/

/*
//Var, let and Const

let age = 30;
age = 31;

const birthYear = 2005;
// birthYear = 2006;
// const job;

*/

/*
// Basic Operators

const now = 2037;
const ageJonas = now - 1991;
// const ageJonas = 2037 - 1991;
const ageSarah = now - 2018;
// const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 10; // x = x * 10 = 250
x ++; //x = x + 1
x --; //x = x - 1
x --; //x = x - 1
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);
*/

/*
// Operator Precedence

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/
/*
// Strings and Template Literals

const firstName = 'Joao';
const job = 'Programmer';
const birthYear = 2005;
const year = 2022;

const Joao = 'Im ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job;
console.log(Joao);

const joaoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(joaoNew);
*/

/*
// Taking decisions, If Else statements

const age = 16;

if (age >= 18) console.log('Sarah can start driving');
else console.log(`Sarah cant drive a license, wait another ${18 - age} years`);

let century;
const birthYear = 2005;

if (birthYear <= 2000) { century = 20; } else { century = 21; }

console.log(century);
*/

/*
// Type Conversion and Coercion

// Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number('inputYear') + 18);
console.log(typeof NaN);

console.log(String(23), 23);

// Cohersion

console.log('Im ' + 23 + ' Years old');
console.log('Im ' + '23' + ' Years old');
console.log('Im 23 Years old'); // its the same

console.log('23' - 10 - '3');
console.log(23 - 10 - 3); // Minus (-) converts to Numbers
console.log('23' + 10 + '3'); // Plus (+) converts to Strings

console.log('2' * '5', 10 / '2'); // operates like Numbers
*/

/*
// Truthy and Falsy Values

// 5 Falsy Values: 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Joao'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));

const money = 0;
if (money) {
  console.log('Dont spend it all :)');
} else {
  console.log('You should get a Job!');
}

let height;
if (height) {
  console.log('YAY! height its defined');
} else {
  console.log('Height is UNDEFINED');
}
*/

/*
// Equaility Operartors

const age = 18;

if (age === 18) console.log('you are an adult');
if (age == 18) console.log('you are an adult');

const favourite = Number(prompt('whats your favourite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
  console.log('Cool! 7 is also an amazing number');
} else {
  console.log('Your Number sucks');
}

if (favourite !== 23) {
  console.log('you suck');
}
*/

/*
// Boolean Logic

const age = 20;
if (age >= 20 && age < 30) {
  console.log('noooooooo');
}

if (age >= 20 || age < 30) {
  console.log('xd');
}
*/


/*
// Logical Operators

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense && !hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log('its nice to drive');
} else {
  console.log('Should not drive');
}
*/


/*
// The switch Statement

const day = ('sunday');

switch (day) {
  case 'monday':
    console.log('plan courses sructure');
    console.log('hello');
    break;
  case 'tuesday':
    console.log('prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('write code examples');
    break;
  case 'friday':
    console.log('record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the Weekend');
    break;
  default:
    console.log('not a valid day');
}

const ifDay = (day) => {
  if (day === 'monday') return 'plan courses sructure';
  if (day === 'tuesday') return 'prepare theory videos';
  if (day === 'wednesday' || day === 'thursday') return 'write code examples';
  if (day === 'friday') return 'record videos';
  if (day === 'saturday' || day === 'sunday') return 'enjoy the weekend';
  return 'not a valid day';
};

console.log(ifDay('thursday'));
*/

/*
// ternary Operartos

const age = 20;

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) drink2 = 'wine';
else drink2 = 'water';
console.log(drink2);
// This two makes practically the same thing, but in different ways, IF is an STAMENT and TERNARY OPERATOR is an EXPRESSION 

console.log(`i like to do drink ${age >= 18 ? 'wine' : 'water'}`)
// this works because the Ternary Operator is an EXPRESSION unlike the IF statement
let adrink;

console.log(`i like to drink ${ if (age >= 18) {adrink = 'wine'}; else {adrink = 'water'}}`)
// this doesn't work because IF is an STATEMENT
*/


