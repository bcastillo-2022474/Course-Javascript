'use strict'

// const describeCountry = (country, population, capitalCity) => `${country} has ${population} million people and its capital city is ${capitalCity}`;
// console.log(describeCountry('Guatemala', 16.37, 'Guatemala'));

// const percentageOfWorld = (...population) => `this Country represents the ${population / 79}%`;

// console.log(percentageOfWorld(1441));

// const populations = [16.37, 300, 1441, 6];
// console.log(populations.length === 4);

// console.log(percentageOfWorld(populations[0]));

// const neighbours = ['Salvador', 'Belice', 'Mexico', 'Honduras'];
// neighbours.push('Utopia');
// neighbours.pop('Utopia');
// neighbours.push('Germany');
// neighbours.pop('Germany');
// neighbours.push('Nicaragua');
// // let resultado;
// // for (let i = 0; i < neighbours.length; i += 1) {
// //   resultado = 'Probably not a central European country :D';
// //   if (neighbours[i] === 'Germany') { resultado = 'European'; break; }
// // }
// // console.log(resultado);
// if (!neighbours.includes('Germany')) console.log('Probably not a central European country :D');
// else console.log('European');
// console.log(neighbours);

// console.log(neighbours.indexOf('Nicaragua'));
// neighbours[neighbours.indexOf('Nicaragua')] = 'Suecia';
// // neighbours[4] = 'suecia';
// console.log(neighbours);

const myCountry = {
  country: 'Guatemala',
  capital: 'Guatemala, Guatemala',
  language: 'Spanish',
  population: 16.37,
  neighbours: ['Salvador', 'Belice', 'Mexico', 'Honduras'],

  describe() {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
and a capital called ${this.capital}`;
  },

  checkIsland() {
    this.isIsland = (this.neighbours === undefined || this.neighbours.length === 0);
    return this.isIsland;
  },
};

// console.log(myCountry);
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
// and a capital called ${myCountry.capital}`);
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);

for (let i = 1; i < 51; i += 1) {
  console.log(`Voter number ${i} is currently voting`);
}

const populations = [16.37, 300, 1441, 6];

const percentages2 = [];
for (let i = 0; i < populations.length; i += 1) {
  percentages2.push(`this Country represents the ${populations[i] / 79}%`);
}

console.log(percentages2);
console.clear();

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = listOfNeighbours.length - 1; i >= 0; i -= 1) {
  for (let a = 0; a < listOfNeighbours[i].length; a += 1) {
    console.log(`neighbours: ${listOfNeighbours[i][a]}`);
  }
}

console.log('-----------------------------------------------------------------------------');
for (let i = listOfNeighbours.length - 1; i >= 0; i -= 1) {
  for (let a = listOfNeighbours[i].length - 1; a >= 0; a -= 1) {
    console.log(`neighbours: ${listOfNeighbours[i][a]}`);
  }
}

console.log('-----------------------------------------------------------------------------');
for (let i = 0; i < listOfNeighbours.length; i += 1) {
  for (let a = listOfNeighbours[i].length - 1; a >= 0; a -= 1) {
    console.log(`neighbours: ${listOfNeighbours[i][a]}`);
  }
}

console.log('----------------------------------------------------------------------------');
for (let i = 0; i < listOfNeighbours.length; i += 1) {
  for (let a = 0; a < listOfNeighbours[i].length; a += 1) {
    console.log(`neighbours: ${listOfNeighbours[i][a]}`);
  }
}

console.clear()

/*
const percentages2 = [];
for (let i = 0; i < populations.length; i += 1) {
  percentages2.push(`this Country represents the ${populations[i] / 79}%`);
}
*/


const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(`this Country represents the ${populations[i] / 79}%`);
  i += 1;
}
console.log(percentages3);
