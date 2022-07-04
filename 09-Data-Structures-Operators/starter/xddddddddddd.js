// const arr = [1, 2, 3];

// // const [first, second, third] = arr;
// // console.log('first, second, third', first, second, third);

// // const [first, , third] = arr;
// // console.log('first, , third', first, third);

// // let [main, second] = arr;
// // console.log('main, second', main, second);
// // [second, main] = [main, second];
// // console.log('second, main', second, main);



// const arr1 = [1, 3, 4, [1, 3, 6], 4, 5, 7, 9];

// const [a, b, , ...c] = arr1;



// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     return `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
//   },
//   orderPasta(ing1, ing2, ing3) {
//     return `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`;
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     return [mainIngredient, ...otherIngredients].join(' ');
//   },
// }


// const { name, openingHours, categories } = restaurant;
// console.log('name, openingHours, categories', name, openingHours, categories);

// openingHours.fri.open = 1000;

// console.log(openingHours.fri.open, restaurant.openingHours.fri.open);

// console.clear();


// const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) console.log(restaurant.openingHours[day]);

// for (const i of Object.values(openingHours)) console.log(i);
// for (const i of Object.keys(openingHours)) console.log(i);
// for (const i in openingHours) console.log(i);


// // Entries
// const x = ['xd', '12', [10, 15]];
// const entries = [[0, 'xd'], [1, '12']];
// const keys = [0, 1];
// const values = ['xd', '12'];

// console.log([...x.entries()]);
// console.log([...x.keys()]);
// console.log([...x.values()]);


