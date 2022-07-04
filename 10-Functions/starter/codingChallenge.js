"use strict";
/*
const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section :/
  answers: new Array(4).fill(0),

  displayResults(type = "array") {
    if (type === "string") {
      let results = "Poll results are ";
      // let results = `Poll results are ${this.answers.join(", ")}`; TONTOOOOOOOOOO

      this.answers.forEach((ans) => {
        // Pude haberlo hecho muchisimo mas faacil
        results += `${ans}, `;
      });

      return results;
    }

    return this.answers;
  },

  registerNewAnswer() {
    let str = "";
    // let str = `${this.options.join("\n")}` TONTOOOOOO

    this.options.forEach((opt) => {
      // pude haberlo hecho mas facil
      str += `${opt}\n`;
    });
    const input = prompt(`${this.question}\n${str}`);

    if (input < this.answers.length && input >= 0) this.answers[input] += 1;
    console.log(this.displayResults("string"));

    return this.answers;
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// console.log(poll.displayResults.call([5, 3, 2], "string"));s

console.log(poll.displayResults.call({ answers: [5, 3, 2] }, "string"));
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  const body = document.querySelector("body");

  body.addEventListener("click", () => header.classList.toggle("hidden"));
})();

const xd = function () {
  const x = document.querySelector("h2");
  const body = document.querySelector("body");
  body.addEventListener("click", () => x.classList.toggle("hidden"));
};

xd();
