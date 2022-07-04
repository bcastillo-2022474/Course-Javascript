/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
*/

/*
const koalasTeam = [23, 34, 27];
const DolphinsTeam = [85, 54, 41];

const calcAverage = (array) => {
  let value = 0;
  for (const i of array) {
    value += i;
  }
  return (value / (array.length));
};
const checkWinner = (average1, average2) => {
  if ((average1 / 2) > average2) return `Team1 win ${average1} vs ${average2}`;
  if ((average2 / 2) > average1) return `Team2 win ${average1} vs ${average2}`;
  return 'no one wins';
};

console.log(calcAverage(koalasTeam), calcAverage(DolphinsTeam));
console.log(checkWinner(calcAverage(koalasTeam), calcAverage(DolphinsTeam)));
*/

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
*/

// const calcTip = (bill) => {
//   let tip = bill.map((element) => element);
//   const resultado = [];
//   if (typeof bill === 'object') {
//     let contador = 0;
//     for (const i of tip) {
//       if (i >= 50 && i <= 300) tip[contador] = i * 0.2;
//       if (i < 50 || i > 300) tip[contador] = i * 0.15;
//       resultado.push(tip[contador] + i);
//       contador += 1;
//     }
//     return `the bill value was ${bill.join(', ')}, the tip was ${tip.join(', ')} and the total value was ${resultado.join(', ')}`;
//   }
//   if (bill >= 50 && bill <= 300) tip *= 0.20;
//   if (bill < 50 || bill > 300) tip *= 0.15;
//   return `the bill value was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`;
// };

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;
// }

// const calcTip = (bill) => {
//   let tip;
//   const resultado = [];
//   if (typeof bill === 'object') {
//     tip = bill.map((el) => (el >= 50 && el <= 300 ? el * 0.2 : el * 0.15));
//     for (let i = 0; i < bill.length; i += 1) resultado.push(tip[i] + bill[i]);

//     return `the bill value was ${bill.join(', ')}, the tip was ${tip.join(', ')} and the total value was ${resultado.join(', ')}`;
//   }
//   if (typeof bill === 'number') (bill >= 50 && bill <= 300) ? tip = bill * 0.2 : tip = bill * 0.15;
//   return `the bill value was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`;
// };

// console.log(calcTip([100, 200, 350]));


/*
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

*/

/*
const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  },
};

const jhon = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  },
};

const calcHigher = (person, person2) => {
  if (person.calcBMI() > person2.calcBMI()) {
    return `${person.firstName}'s BMI ${person.calcBMI()} is higher than ${person2.firstName}'s ${person2.calcBMI()}!`;
  }
  if (person2.calcBMI() > person.calcBMI()) {
    return `${person2.firstName}'s BMI ${person2.calcBMI()} is higher than ${person.firstName}'s ${person.calcBMI()}!`;
  }
  if (person2.calcBMI() === person.calcBMI()) {
    return `${person.firstName}'s BMI ${person.calcBMI()} is equal than ${person2.firstName}'s ${person2.calcBMI()}!`;
  }
  return 'Put some person valids';
};

console.log(calcHigher(jhon, mark));
*/


// const calculateTip = (bill) => {
//   const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
//   if (typeof bill === 'number') {
//     return `the bill value was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`;
//   }
//   return 'thats not a Number';
// };
// console.log(calculateTip(40));

const calculateTip = (...bill) => {
  const tip = [];
  const resultado = [];
  console.log(bill);
  for (let i = 0; i < bill.length; i += 1) {
    tip.push(bill[i] > 50 && bill[i] < 300 ? bill[i] * 0.2 : bill[i] * 0.15);
    resultado[i] = tip[i] + bill[i];
  }
  if (bill.length === 1) {
    return `the bill value was ${bill.join(', ')}, the tips was ${tip.join(', ')} and the total value was ${resultado.join(', ')}`;
  }
  if (bill.length !== 1) {
    return `the bills values were ${bill.join(', ')}, the tips were ${tip.join(', ')} and the total values were ${resultado.join(', ')}`;
  }
};

const array = [10, 20, 30, 40, 50, 60, 1000, 25, 250, 85, 210];

const calculateTip2 = (...bill) => {
  const tip = [];
  const result = [];
  console.log(bill);
  for (let i = 0; i < bill.length; i += 1) {
    tip.push(bill[i] > 50 && bill[i] < 300 ? bill[i] * 0.2 : bill[i] * 0.15);
    result.push(`the bill value was ${bill[i]}, the tip was ${tip[i]} and the total value was ${tip[i] + bill[i]}`);
  }
  return result.join('\n');
};


const calcAverage = (...array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum / array.length;
};

console.log(calculateTip2(...array));
console.clear();
console.log(calculateTip(...array));
console.log(calculateTip2(10, 20, 30, 40));
console.log(calculateTip2(...array));
console.log(calcAverage(...array), array.length);

