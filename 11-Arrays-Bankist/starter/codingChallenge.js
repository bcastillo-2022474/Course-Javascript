// const checkDogs = (firstDogs, SecondDogs) => {
//   const copyFirst = firstDogs.slice(1, -2);
//   const correct = [...copyFirst, ...SecondDogs];
//   correct.forEach((dogAge, i) => {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogAge} years old`,
//       );
//     }
//     if (dogAge < 3) console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const calcAverageHumanAge = (dogsAges) => {
//   const ans = dogsAges
//     .map((dogAge) => (dogAge <= 2 ? dogAge * 2 : dogAge * 4 + 16))
//     .filter((dogAge) => dogAge > 18)
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
//   return ans;
// };

// console.log(calcAverageHumanAge([3, 3, 1, 4]));
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const eatStudy = (obj) => {
  if (
    obj.recFood / 10 + obj.recFood >= obj.curFood &&
    obj.recFood - obj.recFood / 10 <= obj.curFood
  ) {
    return "Is eating Normal";
  }
  if (obj.recFood / 10 + obj.recFood < obj.curFood) return "Is eating too much";
  return "Is eating too little";
};

dogs.forEach((prop) => (prop.recFood = prop.weight ** 0.75 * 28));

// dogs.forEach(
//   (props) => props.owners.includes("Sarah") && console.log(eatStudy(props)),
// );

const dogSarah = dogs.find((prop) => prop.owners.includes("Sarah"));
console.log("dogSarah", eatStudy(dogSarah));

const skinnyDogs = dogs
  .filter((props) => eatStudy(props) === "Is eating too little")
  .flatMap((props) => props.owners);
console.log("skinnyDogs", skinnyDogs);

const fatDogs = dogs
  .filter((props) => eatStudy(props) === "Is eating too much")
  .flatMap((props) => props.owners);
console.log("fatDogs", fatDogs);

// let strFat = "";                       MULAAAAA, RE COMPLICADA TE LA DEJASTE
// fatDogs.forEach((owner) => {
//   if (owner === fatDogs[0]) strFat += `${owner} and`;
//   if (owner === fatDogs.at(-1)) strFat += ` ${owner}'s dogs eat too much`;
//   if (owner !== fatDogs[0] && owner !== fatDogs.at(-1))
//     strFat += ` ${owner} and`;
// });
// console.log(strFat);

// let strSkinny = "";
// skinnyDogs.forEach((owner) => {
//   if (owner === skinnyDogs[0]) strSkinny += `${owner} and`;
//   if (owner === skinnyDogs.at(-1))
//     strSkinny += ` ${owner}'s dogs eat too little`;
//   if (owner !== skinnyDogs[0] && owner !== skinnyDogs.at(-1))
//     strSkinny += `${owner} `;
// });

// console.log(strSkinny);

console.log(`${skinnyDogs.join(" and ")}'s dogs eat too little`);
console.log(`${fatDogs.join(" and ")}'s dogs eat too much`);

// Esto es mucho mas Simple

console.log(dogs.some((props) => props.recFood === props.curFood));
//
console.log(dogs.some((props) => eatStudy(props) === "Is eating Normal"));

const normalDogs = dogs
  .filter((props) => eatStudy(props) === "Is eating Normal")
  .flatMap((props) => props.owners);

console.log("normalDogs", normalDogs);

// const shallowDogs = [...dogs].sort((a, b) => {
//   if (a.recFood > b.recFood) return 1;
//   if (a.recFood < b.recFood) return -1;
//   return 0;
// });

const shallowDogs = [...dogs].sort((a, b) => a.recFood - b.recFood); // Both are the same

console.log("shallowDogs", shallowDogs);
