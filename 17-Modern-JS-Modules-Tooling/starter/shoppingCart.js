// Exporting module
console.log("Exporting Module");

const shippingCost = 10;
export const cart = [];

// Blocking Code
// console.log("Start");
// await fetch("https://jsonplaceholder.typicode.com/posts");
// await fetch("https://jsonplaceholder.typicode.com/posts");
// await fetch("https://jsonplaceholder.typicode.com/posts");
// await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log("Finish");

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
