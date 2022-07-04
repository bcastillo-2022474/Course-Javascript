"use strict";

const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    return `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  },
  orderPasta(ing1, ing2, ing3) {
    return `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`;
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    return [mainIngredient, ...otherIngredients].join(" ");
  },
};

console.log("a+very+nice+string".split("+").join(" "));

const [firstName, lastName] = "Joao Castillo".split(" ");
console.log(firstName, lastName);

console.log(["Mr.", firstName, lastName.toUpperCase()].join(" "));


const capitalizeName = (name) => {
  const newName = name.toLowerCase().split(" ");
  const x = [];
  for (let i = 0; i < newName.length; i++) {
    x.push(newName[i].replace(newName[i][0], newName[i][0].toUpperCase())); // primer manera
    newName[i] = `${newName[i][0].toUpperCase()}${newName[i].slice(1)}`; // Segundaa manera
  }
  return [newName.join(" "), x.join(" ")];
};
console.log(capitalizeName("brAnDon jOao casTiLlo mUñoz"));

// mask Credit card

const maskCreditCard = (number) => {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(1234567890));
console.log(maskCreditCard("12345678901234567890"));

// Repeat

const message2 = "Bad Weather... All Depatures, Delayed \n";
console.log("message2", message2.repeat(5));

const planesInline = (n) => `There are ${n} planes in line ${"┤".repeat(n)}`;

console.log(planesInline(10));




/*
const airLine = "TAP Air Portugal";
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in Name

const passenger = "jOnaS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log("passengerCorrect", passengerCorrect);
console.log("passengerLower", passengerLower);

// Comparing emails

const email = "hello@jonas.io";
const loginEmail = "  Hello@JonAs.Io   \n";

const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();

console.log("trimEmail", trimEmail === email);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log("normalizedEmail", normalizedEmail === email);
// Replace

const priceGB = "288,97E";
const priceUS = priceGB.replace(",", ".").replace("E", "$");
console.log("priceUS", priceUS);

const announcement = "All passenger come to boarding door 23. Boarding door 23";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("Aib"));
console.log(plane.endsWith("neo"));





if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus Family");
}

const checkBaggage = (items) => {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) return "You are not allowed";
  return "Welcome aboard";
};



console.log(checkBaggage("I have a laptop, some Food and a Pocket Knife"));
console.log(checkBaggage("Socks and camera"));
console.log(checkBaggage("Got some snacks and a gun for protection"));
*/

/*
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B765CF"[0]);

console.log(airLine.length);
console.log("B765CF".length);

console.log(airLine.indexOf("r"));
console.log(airLine.lastIndexOf("r"));
console.log(airLine.indexOf("Portugal"));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(4));
console.log(airLine.slice(0, airLine.indexOf(" ")));
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

console.clear();

const checkMiddleSeat = (seat) => {
  if (seat.indexOf("B") !== -1) return "Middle";
  if (seat.indexOf("E") !== -1) return "Middle";
  return "not Middle";
};

const checkMiddleSeat = (seat) => {
  const ans = seat.slice((-1));
  if (ans === "B" || ans === "E") return "Middle";
  return "not Middle";
};

console.log(checkMiddleSeat("11E"));
console.log(checkMiddleSeat("14A"));
console.log(checkMiddleSeat("3B"));

// Primitives cant have Methods, what Javascript really does, is convert it to a Object then
// called the Method, and String method return a Primitive, we can Watch the convertion in console

console.log(new String("Jonas"));
console.log(typeof new String("Jonas"));
console.log(typeof new String("Jonas").slice(1));

*/
/*
const question = new Map([["question", "What is the best Programming language in the World?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct :D"],
  [false, "Try again!"]]);

console.log(question);

console.log(question.get(true));

// Convert Maps to Objects

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log("openingHours", openingHours);
console.log(hoursMap);

console.clear();
console.log(question.get("question"));
for (const [key, value] of question) {
  typeof key === "number" && console.log(`Answer ${key}: ${value}`);
}

// const ans = Number(prompt("Your Answer"));
const ans = 3;
console.log(question.get(ans === question.get("correct")));

// Convert Map to Object

const arr = [...question];
console.log(arr);

console.log([...question.entries()]); // is equal to [...question], equal to arr
console.log([...question.keys()]);
console.log([...question.values()]);

const x = question.entries();
const y = question.keys();
const z = question.values();
for (const [key, value] of x) console.log(key, value);
for (const key of y) console.log("key", "------", key);
for (const value of z) console.log("value", "---------", value);
*/
/*
// Maps

const rest = new Map();
console.log('rest', rest);

rest.set('name', 'Classico Italiano');
console.log('rest', rest);
rest.set(1, 'Classico Italiano');
console.log('rest', rest);
rest.set(2, 'Classico Italiano');
console.log('rest', rest);

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are Open :D').set(false, 'We are closed')
console.log('rest', rest);

console.log('rest.get', rest.get('categories'));
console.log('rest.get', rest.get(true));

const time = 12;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// rest.set([1, 2], 'hola');
// console.log('rest', rest.get([1, 2])); // Different arryas, Because of reference types

const arr = [1, 2];
rest.set(arr, 'hola');
console.log('rest.get', rest.get(arr));

rest.set(document.querySelector('h1'), 'heading');
console.log('rest', rest);

*/

// Sets
/*
const orderSet = new Set(['pasta', 'pizza', 'pizza', 'Rissoto', 'pasta', 'pizza']);
console.log('orderSet', orderSet);

const staff = ['chef', 'waiter', 'chef', 'manager', 'manager', 'chef'];
const staffUnique = [...new Set(staff)];
console.log('staff', staff);
console.log('staffUnique', staffUnique);
*/
/*
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

for (const day in openingHours) {
  console.log(day);
}

const properties = Object.keys(openingHours);
console.log('properties', properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  if (day === properties[properties.length - 1]) openStr += `${day}.`;
  else openStr += `${day}, `;
}
console.log('openStr', openStr);

const entries = Object.entries(openingHours);
console.log('entries', entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open}, and close at ${close}`);
}

for (const a of entries) console.log(a);
*/

// for (const [thu] in openingHours) console.log(thu);

/*
// DESTRUCTURING
// SPREAD, beacuse on RIGHT side of '='
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST because on the left side;
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Both in Example

const [pizza, rissoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, rissoto, otherFood);

// Objects

const { sat: saturday, ...weekdays } = restaurant.openingHours;
console.log(saturday, weekdays);

// FUNCTIONS

const add = (...num) => num.reduce((a, b) => a + b);

console.log(add(2, 3, 5, 6, 7, 8, 9, 10));
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(add(...x));

console.log(restaurant.orderPizza('Meat', 'Cheese', 'pepperoni', 'Pineaple'));
*/

/*
const arr = [7, 8, 9];

// Bad New array
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

//

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 Arrays

const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu);

// Spre operator works with Iterables = strings, arrays, maps, sets, NOT objects
const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(str);
console.log(letters);

// const ingredients = [prompt('Let\'s make pasta!, Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);

// console.log(restaurant.orderPasta(...ingredients));

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
newRestaurant.name = 'xd';

console.log(restaurant);
console.log(newRestaurant);
*/

/*
// Destructuring Objects
console.log(restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
, prompt['Ingredient 3?']  mainIndex: 2,
  starterIndex: 2,
}));

console.log(restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
}));

const { name, openingHours, categories } = restaurant;
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(name, openingHours, categories);
console.log(restaurantName, hours, tags);

// Default Values
const { menu = 'no hay menu', starterMenu: starters = 'no hay starters' } = restaurant;
console.log(menu, starters);

// Mutating Variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);
console.log(obj);

// Nested Objects

const { fri } = openingHours; // referenciando al objeto
console.log(fri);

const { fri: friday } = openingHours; // referenciando al objeto y cambiandole Nombre a la variable
console.log(friday);

const {
  fri: friday2 = [],
} = openingHours; // referenciando al objeto, cambiando el nombre y cambiandole el valor por defecto
console.log(friday2);

const {
  fri: { open, close },
} = openingHours; // referenciando a los objetos adentro de otro objeto
console.log(open, close);

const {
  fri: { open: op, close: cl },
} = openingHours; // referenciando a los objetos adentro de otro objeto
console.log(op, cl);
*/
/*
// DESTRUCTING ARRAYS

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

// const [first, second] = restaurant.categories;
const [first, , second] = restaurant.categories; // to skip values, just make a hole;
console.log(a, b, c);
console.log(x, y, z);
console.log(first, second);

// Switching Variables
let [main, , secondary] = restaurant.categories; // to skip values, just make a hole;
console.log(main, secondary);

// old way

const temp = main;
main = secondary;
secondary = temp;

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Receive 2 return values form a function;
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
