const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const [players1, players2] = game.players;

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// const allPlayers = [...players1, ...players2];

// const Players1Final = [...players1, ...['Thiago', 'Coutinho', 'Perisic']];

// const { team1, x: draw, team2 } = game.odds;
/*
const printGoals = (...players) => {
  const a = (team1 < team2 && 'team 1 wins') || (team1 > team2 && 'team 2 wins') || (draw && 'draw')
  return [...players, ` Goals = ${players.length}`, a];
};
*/
// console.clear();
// console.log(printGoals(...game.scored));
// console.log(printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'));

// console.log('players1');
// console.log(players1);
// console.log('players2');
// console.log(players2);
// console.log('gk1, gk2');
// console.log(gk1, gk2);
// console.log('fieldPlayers1, fieldPlayers2');
// console.log(fieldPlayers1, fieldPlayers2);
// console.log('allPlayers');
// console.log(allPlayers);
// console.log('Players1Final');
// console.log(Players1Final);
/*
// Goleadores  y sus Goles
const goals = Object.entries(game.scored);
for (const [goal, player] of goals) console.log(`${player} did goal number ${Number(goal) + 1}`);

// destructuring
const odds = { ...game.odds };
// odds.team1 = [game.team1, odds.team1];
// odds.team2 = [game.team2, odds.team2];
// odds.x = ['draw', odds.x];

// finding average
let a = 0;
for (let i = 0; i < Object.keys(odds).length; i += 1) {
  a += Object.values(odds)[i];
  i === Object.keys(odds).length - 1 && console.log(a / (i + 1));
} */
// Writting nice String
// for (const [i, el] of Object.values(odds)) console.log(`odd of victory ${i}: ${el}`);

// for (const [i, el] of Object.entries(odds)) {
//   console.log(`odd of victory ${i === "x" ? "draw" : game[i]}: ${el}`);
// }

// const scorers = {};

// for (const [, el] of Object.entries(game.scored)) {
//   scorers[el] ? scorers[el] += 1 : scorers[el] = 1;
// }

// console.log(scorers);

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// console.clear();
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log("gameEvents", gameEvents);
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// for (const [min, value] of gameEvents) {
//   if (min <= 45) console.log(`[FIRST HALF] ${min}: ${value}`);
//   if (min >= 45.1) console.log(`[SECOND HALF] ${min}: ${value}`);
// }
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea");
const button = document.querySelector("button");

text.value = "underscore_case\n first_name\nSome_Variable  \n   \n    calculate_AGE\ndelayed_departure";

// Replacing first letter with Upper Case Letter
const capitalize = (str) => str.map((el) => el.replace(el[0], el[0].toUpperCase())).join("");

const camelCase = () => {
  if (text.value === "") return "";

  const ans = [];
  // eliminating Enters, and Splitting by Spaces
  let strings = new Set(text.value.toLowerCase().trim().replaceAll("\n", " ").split(" "));
  // Deleting Empty string (that's why is a Set)
  strings.delete("");
  strings = [...strings];

  // Replacing "_" with Spaces, Then, Eliminating spaces, and Splitting again, and calling function
  strings.map((str) => ans.push(capitalize(str.replace("_", " ").trim().split(" "))));

  return ans.forEach((el, ind) => { console.log(`${el.padEnd(20, " ")}${"✅".repeat(ind + 1)}`); });
};

button.addEventListener("click", camelCase);
*/

const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const NiceFormatFlights = (flightsReceived) => {
//   const separateSentences = flightsReceived.split("+");
//   const separateFlights = [];

//   separateSentences.forEach((sentence) => {
//     separateFlights.push(sentence.replaceAll(";", " ").trim().split(" "));
//   });

//   const flightsArr = [];
//   let timeArr = [];

//   for (const fly of separateFlights) {
//     timeArr.push(fly[fly.length - 1].split(";")); // adding Last String (hour) to timeArr
//     flightsArr.push(
//       fly.map((description) => description
//         .replaceAll("_", " ")
//         .trim()
//         .replace(/[0-9:]/g, "")),
//     );
//   }

//   timeArr = timeArr.map((hour) => hour[0].split(":"));
//   flightsArr.forEach((fly) => {
//     fly.pop();
//     fly.push(timeArr.shift());
//   });

//   flightsArr.map(([status, start, destination, time]) => console.log(
//     `${
//       status.includes("Delayed") ? `🔴 ${status}` : status
//     }, from ${start.toUpperCase()} to ${destination.toUpperCase()} (${
//       time[0]
//     }h${time[1]})`.padStart(50),
//   ));
// };

// NiceFormatFlights(flights);

const replaceNumUpper = (str) => str.replace(/[0-9]/g, "").toUpperCase();

const niceFormatFlights = (flightsReceived) => {
  const separateSentences = flightsReceived.split("+");

  separateSentences.forEach((sentence) => {
    const [status, start, destination, time] = sentence
      .replaceAll(";", " ")
      .trim()
      .split(" ");

    console.log(
      `${status.includes("_Delayed") ? "🔴" : ""} ${status
        .replaceAll("_", " ")
        .trim()} ${replaceNumUpper(start)} ${replaceNumUpper(
        destination,
      )} ${time.replace(":", "h")}`.padStart(35),
    );
  });
};

niceFormatFlights(flights);
