// Importing module
// eslint-disable-next-line import/no-import-module-exports
import cloneDeep from "lodash-es\\cloneDeep.js";
import "stable";
// import "./shoppingCart.js";
// eslint-disable-next-line import/no-import-module-exports
import {
  cart,
  addToCart,
  totalPrice,
  totalQuantity as tq,
} from "./shoppingCart";
import add from "./shoppingCart";

console.log("Importing Module");

addToCart("bread", 5);

console.log({ tq, totalPrice });
add("pizza", 2);
add("pizza", 2);

console.log(cart);

console.log("Start Fetching");

const getLastPot = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  console.log("Something");

  const { title, body } = data.at(-1);
  return { title, body };
};
getLastPot().then((obj) => console.log(obj));

const state = {
  cart: [
    { product: "bread", quantity: 55 },
    { product: "bread", quantity: 55 },
    { product: "pizza", quantity: 55 },
    { product: "bread", quantity: 55 },
    { product: "bread", quantity: 55 },
    { product: "bread", quantity: 55 },
  ],
};

console.log(state);
const newState = cloneDeep(state);
console.log({ newState });

newState.cart[0].quantity = 1;
state.cart[0].quantity = 400;
console.log({ newState, state });

console.log("hello");
console.log("yisus");
console.log("hola");
console.log("holaaaaaaaa");
console.log("how you been?");

if (module.hot) {
  module.hot.accept();
}
