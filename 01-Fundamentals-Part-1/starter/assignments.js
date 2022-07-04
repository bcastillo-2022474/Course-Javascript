const country = 'Guatemala';
const continent = 'America';
const countryPopulation = 16.86;

console.log(country);
console.log(continent);
console.log(countryPopulation);

const isIsland = true;
let language;
console.log(isIsland);
console.log(language);
language = 'Español';

// countryPopulation = 17;

console.log(countryPopulation / 2);
console.log(countryPopulation + 1);
const populationFinland = 6;
console.log(countryPopulation > populationFinland);
const averagePopulation = 33;
console.log(countryPopulation < averagePopulation);
const description = 'Guatemala is in America, and its 16.86 million, people speak Spanish';
console.log(description);
const descripcion = `${country} esta en ${continent} y hay ${countryPopulation} millones de personas, se habla ${language}`;
console.log(descripcion);

let answer;
if (countryPopulation > averagePopulation) answer = `${country} population is above average`;
else answer = `${country} population is ${averagePopulation - countryPopulation} million below average`;

console.log(answer);

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (!numNeighbours) {
//   console.log('No borders');
// } else if (numNeighbours === 1) {
//   console.log('Only one Border!');
// } else if (numNeighbours !== 1 && Math.sign(numNeighbours) === 1) {
//   console.log('More than one border');
// } else {
//   console.log('that cant be possible');
// }

if (language === 'English' && countryPopulation < 50 && !isIsland) {
  console.log('You could live here!');
} else {
  console.log('You could not live here');
}

const ifLanguage = (language) => {
  switch (language.toLowerCase()) {
    case 'chinese':
    case 'mandarin':
      return 'MOST number of native speakers';
    case 'spanish':
      return '2nd place in number of native speakers!';
    case 'english':
      return '3rd place in number of native speakers';
    case 'hindi':
      return '4th place in number of native speakers';
    case 'arabic':
      return '5th most spoken language';
    default:
      return 'Great language too';
  }
};

console.log(ifLanguage('english'));

const populationComparison = (country, cPopulation) => `${country}'s population is ${cPopulation >= 30 ? 'above' : 'below'} average`;

// const populationComparison2 = (country, countryPopulation) => countryPopulation >= 33
//   ? `${country}'s population is above average`
//   : `${country}'s population is below average`;

// this 2 are the same!!!

console.log(populationComparison('United States', 300));
// console.log(populationComparison2('United States', 300));
