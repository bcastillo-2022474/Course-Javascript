/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

/*
let markWeight = 78;
let markheight = 1.69;

let johnWeight = 92;
let jonhHeight = 1.95;

const bmi = (weight, height) => weight / (height ** 2);

console.log(bmi(markWeight, markheight) > bmi(johnWeight, jonhHeight));

if (bmi(markWeight, markheight) > bmi(johnWeight, jonhHeight)) {
  console.log(`Mark BMI is higher, Mark its ${bmi(markWeight, markheight)} and Jonh its ${bmi(johnWeight, jonhHeight)}`);
} else if (bmi(markWeight, markheight) === bmi(johnWeight, jonhHeight)) {
  console.log('Mark and Jonh BMI are the same');
} else {
  console.log(`Jonh BMI is Higher, Jonh its ${bmi(johnWeight, jonhHeight)} and Mark its ${bmi(markWeight, markheight)}`);
}

markWeight = 95;
markheight = 1.88;

johnWeight = 85;
jonhHeight = 1.76;

console.log(bmi(markWeight, markheight) > bmi(johnWeight, jonhHeight));

if (bmi(markWeight, markheight) > bmi(johnWeight, jonhHeight)) {
  console.log(`Mark BMI is higher, Mark its ${bmi(markWeight, markheight)} and Jonh its ${bmi(johnWeight, jonhHeight)}`);
} else if (bmi(markWeight, markheight) === bmi(johnWeight, jonhHeight)) {
  console.log('Mark and Jonh BMI are the same');
} else {
  console.log(`Jonh BMI is Higher, Jonh its ${bmi(johnWeight, jonhHeight)} and Mark its ${bmi(markWeight, markheight)}`);
}
*/
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
*/

/*
let dolphinsScoreArray = [96, 108, 89];
let koalasScoreArray = [88, 91, 110];

const averageScore = (array) => {
  let suma = 0;
  let i = 0;
  while (i < array.length) {
    suma += array[i];
    if (i >= array.length) break;
    i += 1;
  }
  return suma / array.length;
};
console.log(averageScore(dolphinsScoreArray));
console.log(averageScore(koalasScoreArray));

const teamWinner = (arr1, arr2) => {
  if (averageScore(arr1) > averageScore(arr2) && averageScore(arr1) >= 100) {
    return `Team 1 is higher, it has ${averageScore(arr1)} average, and team 2 ${averageScore(arr2)}`;
  }
  if (averageScore(arr1) < averageScore(arr2) && averageScore(arr2) >= 100) {
    return `Team 2 is higher, it has ${averageScore(arr2)} average, and team 1 ${averageScore(arr1)}`;
  }
  if (averageScore(arr1) === averageScore(arr2) && averageScore(arr1) >= 100) {
    return `it is a draw! team 1 average score was ${averageScore(arr1)} the same of team 2 ${averageScore(arr2)}`;
  }
  return 'none of them won';
};

dolphinsScoreArray = [880, 110, 91];
koalasScoreArray = [880, 91, 110];

console.log(teamWinner(dolphinsScoreArray, koalasScoreArray));

*/

/*
The Complete JavaScript Course 8
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430

*/

const calculateTip = (bill) => {
  const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
  if (typeof bill === 'number') {
    return `the bill value was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`;
  }
  return 'thats not a Number';
};
console.log(calculateTip(40));
