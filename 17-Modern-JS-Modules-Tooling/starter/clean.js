const budget = [
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
];

const expendingLimits = {
  jonas: 1500,
  matilda: 100,
};

// const getLimit = (el) => (!expendingLimits[el] ? 0 : expendingLimits[el]);
const getLimit = (el) => expendingLimits?.[el] ?? 0;

const addExpenses = function (value, description, user = "jonas") {
  const userCopy = user.toLowerCase();
  if (value > getLimit(userCopy)) return;
  budget.push({ value: -value, description, user: userCopy });
};

addExpenses(10, "Pizza 🍕");
addExpenses(100, "Going to movies 🍿", "Matilda");
addExpenses(200, "Stuff", "Jay");
console.log({ budget });

const check = () => {
  budget
    .filter(({ user, value }) => getLimit(user) < value)
    .forEach((el) => (el.flag = "limit"));
};
check();
console.log({ budget });

const logBigExpenses = (limit) => {
  // const output = budget.reduce((out, { value, description }) => {
  //   if (-limit < value) return out;
  //   return `${out} ${description.slice(-2)} / `;
  // }, "");

  const output = budget
    .filter(({ value }) => value <= -limit)
    .reduce((str, { description }) => `${str} ${description.slice(-2)} / `, "");

  console.log(output.slice(0, -2)); // Remove last '/ '
};
logBigExpenses(100);
logBigExpenses(400);
