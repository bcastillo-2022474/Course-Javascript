"use strict";

// const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// // CREATE REQUEST
// const createRequest = (type, country, URLtype = "name") => {
//   const request = new XMLHttpRequest();
//   request.open(
//     `${type}`,
//     `https://restcountries.com/v3.1/${URLtype}/${country}`,
//   );
//   request.send();
//   return request;
// };

// RENDER
const renderCountry = (data, className = "") => {
  const [language] = Object.values(data.languages);
  const [currencies] = Object.values(data.currencies);

  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currencies.name}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const displayCountry = (country, URLtype = "name") => {
//   const request = createRequest("GET", country, URLtype);
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.response);
//     renderCountry(data);
//   });
// };

// const displayNeighbor = (data) => {
//   const neighbor = data.borders;
//   if (!neighbor.length) return;
//   neighbor.forEach((countryCode) => {
//     const request = createRequest("GET", countryCode, "alpha");
//     request.addEventListener("load", function () {
//       const [neighborData] = JSON.parse(this.response);
//       renderCountry(neighborData, "neighbour");
//     });
//   });
// };

// // DISPLAY COUNTRY AND NEIGHBOUR
// const displayCountryNeighbour = (country, URLtype = "name") => {
//   createRequest("GET", country, URLtype).addEventListener("load", function () {
//     const [data] = JSON.parse(this.response);
//     renderCountry(data);
//     displayNeighbor(data);
//   });
// };

// const displayNeighbor = (countries) => {
//   if (!countries.length) return;
//   countries.forEach((countryCode) =>
//     createRequest(countryCode, "alpha").then(([data]) =>
//       renderCountry(data, "neighbour"),
//     ),
//   );
// };

const createRequest = (country, URLtype = "name") =>
  fetch(`https://restcountries.com/v3.1/${URLtype}/${country}`).then(
    (response) => {
      if (!response.ok) throw new Error(`country not found ${response.status}`);
      return response.json();
    },
  );

const displayCountries = (countries, className, URLtype) => {
  if (!countries || !countries.length) return;

  const callback = (previous, current) =>
    previous.then(([data]) => {
      renderCountry(data, className);
      return createRequest(current, URLtype);
    });
  countries
    .reduce(callback, createRequest(countries.shift(), URLtype))
    .then(([data]) => renderCountry(data, className))
    .catch((err) => console.log(err.message));
};

// prettier-ignore
const displayNeighbor = (...countries) => displayCountries(countries, "neighbour", "alpha");
// prettier-ignore
// const displayCountriesByCode = (...countries) => displayCountries(countries, "", "alpha");
// prettier-ignore
const displayCountriesByName = (...countries) => displayCountries(countries, "", "name");

const displayCountryNeighbour = (country, URLtype = "name") => {
  createRequest(country, URLtype)
    .then(([data]) => {
      renderCountry(data);
      if (!data.borders) throw new Error("Borders not Found!");
      displayNeighbor(...data.borders);
    })
    .catch((err) => console.log(err.message, "ERRRRRRRRRORRRRRRRRR"));
};

// displayCountryNeighbour("guatemala");
// displayCountriesByName("usa", "germany", "portugal");

/*
setTimeout(() => console.log("TIMEOUT"), 0);
Promise.resolve("PROMISE").then((ans) => {
  console.log(ans, "JAJA");
  setTimeout(() => console.log(ans), 0);
});

const lotteryPromise = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) resolve("You Win");
  else reject(new Error("You lost your money"));
});

// console.log(lotteryPromise);
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

console.clear();

// const wait = (seconds) =>
//   new Promise((resolve) => {
//     console.log("JUJU 1");
//     for (let i = 0; i < 7; i++) resolve();
//     console.log("JUJU 2");
//     setTimeout(resolve, seconds * 1000);
//   });

wait(7).then(() => console.log("hola como estas?"));
setTimeout(() => setTimeout(() => console.log("setTimeout"), 2 * 1000), 2000);

// (() => console.log("callback"))();
console.log((() => "callback")());
console.log("NO PROMISEEEEEEEEEEEEE");
////////////////////////////
new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) resolve();
  else reject();
}).then(
  () => console.log("accepted"),
  () => console.log("rejected"),
);

const promise = new Promise((resolve, reject) => {
  console.log("nooo, now Im first");
  setTimeout(() => {
    resolve("WORKED");
  }, 2000);
});

promise.then((ans) => console.log(ans));

console.log("im first?");

console.clear();
const wait = (seconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds);
  });
*/

const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

// getPosition()
//   .then((pos) => console.log(pos))
//   .catch((err) => console.error(err));
/*
const createRequest2 = (country) =>
  fetch(
    `https://api.bigdatacloud.net/data/country-info?code=${country}&localityLanguage=en&key=bdc_a7c28a4b78664bdf8ce4a8622e236e5b`,
  ).then((response) => {
    if (!response.ok) throw new Error(`country not found ${response.status}`);
    return response.json();
  });

// RENDER
const renderCountry2 = (data, className = "") => {
  const {
    isoAdminLanguages: [{ nativeName: language }],
  } = data;
  const {
    currency: { name: currencies },
  } = data;

  const {
    continents: [{ continent }],
  } = data;

  console.log(data);

  const html = `
        <article class="country ${className}">
          <div class="country__img1" >${data.countryFlagEmoji}</div>
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.unRegion}</h4>
            <p class="country__row"><span>👫</span>${"dont know"}million people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

createRequest2("SV").then((data) => {
  console.log(data);
  renderCountry2(data);
});
*/

// const asyncFunn = async () => {
//   const data = await Promise.all([
//     Promise.resolve("succes"),
//     Promise.resolve("succes"),
//     Promise.resolve("succes"),
//   ]);
//   Promise.resolve("yes").then((val) => console.log(val));
//   console.log(data);
// };

// Promise.allSettled([
//   Promise.resolve("succes"),
//   Promise.resolve("succes"),
//   Promise.resolve("succes"),
// ]).then((arr) =>
//   arr.forEach(({ status, value }) => console.log(status, value)),
// );
// asyncFunn();

// const timeout = (sec) =>
//   new Promise((_, reject) => {
//     // eslint-disable-next-line prefer-promise-reject-errors
//     setTimeout(() => reject(new Error("Too damn Slow!")), sec * 1000);
//   });

// Promise.race([createRequest("mexico"), timeout(1)])
//   .then(([ans]) => console.log(ans?.name.common))
//   .catch((err) => console.error(err));
