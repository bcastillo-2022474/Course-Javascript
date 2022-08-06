// The Complete JavaScript Course 30
// Asynchronous JavaScript
// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message

const KEY = "bdc_a7c28a4b78664bdf8ce4a8622e236e5b";
const whereAmI = ([lat, lng]) => {
  // const whereAmI = ({ coords: { latitude: lat, longitude: lng } }) => {
  console.log(lat, lng);
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&key=${KEY}`,
  )
    .then((response) => {
      console.log(response.ok, response.url);
      if (response.status === 403) throw new Error("BLA BLA BLA BLA");
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const { countryName, locality } = data;
      displayCountryNeighbour(countryName);
      console.log(`you are in ${locality}, ${countryName}`);
    })
    .catch((error) => console.log(error.message, error));
};

// whereAmI([52.508, 13.381]);
// getPosition().then(({ coords: { latitude: lat, longitude: lng } }) => {
//   whereAmI([lat, lng]);
// });
/*
const displayImage = (src) => {
  const body = document.querySelector("body");
  const html = `<img src="${src}" alt="img">`;
  body.insertAdjacentHTML("beforeend", html);
};

const wait = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, 1000 * seconds));

wait(2)
  .then(() => {
    displayImage("img/img-1.jpg");
    return wait(3);
  })
  .then(() => displayImage("img/img-2.jpg"));
*/

const imgContainer = document.querySelector(".images");

const displayElement = (el, seconds = 2) =>
  new Promise((resolve) => {
    imgContainer.appendChild(el);
    setTimeout(() => {
      el.style.display = "none";
      resolve();
    }, seconds * 1000);
  });

// const displayElement = (el) => {
//   document.querySelector("body").appendChild(el);
// };

const createImage = (src) =>
  new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = src;

    img.addEventListener("load", () => {
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image Error"));
    });
  });

/*
createImage("img/img-1.jpg")
  // .then((html) => {
  //   displayElement(html);
  //   return createImage("img/img-2.jpg");
  // })
  // .then((html) => {
  //   displayElement(html);
  //   return createImage("img/img-3.jpg");
  // })

  .then((html) => displayElement(html))
  .then(() => createImage("img/img-2.jpg"))
  .then((html) => displayElement(html))
  .then(() => createImage("img/img-3.jpg"))
  .then((html) => displayElement(html))
  .catch((err) => console.log(err));
*/
// const images = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
// images
//   .reduce(
//     (acc, curr) =>
//       acc.then((html) => displayElement(html)).then(() => createImage(curr)),
//     createImage(images.shift()),
//   )
//   .then((html) => displayElement(html));

// const whereAmI2 = async ([lat, lng]) => {
//   console.log(lat, lng, "2");
//   const response = await fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&key=${KEY}`,
//   );
//   console.log(response.ok, response.url);
//   if (response.status === 403) throw new Error("BLA BLA BLA BLA");
//   console.log(response);
//   const data = await response.json();

//   console.log(data);
//   const { countryName, locality } = data;
//   displayCountryNeighbour(countryName);
//   console.log(`you are in ${locality}, ${countryName}`);
//   return "ans";
// };

// // getPosition().then(({ coords: { latitude: lat, longitude: lng } }) => {
// //   whereAmI2([lat, lng]);
// // });

// const getCountries = async (...countries) => {
//   const capitals = await countries.map(async (country) => {
//     const [{ capital }] = await createRequest(country);
//     return capital;
//   });

//   countries.forEach(async (country) => {
//     const [{ capital }] = await createRequest(country);
//     console.log(capital);
//   });

//   return capitals;
// };

// console.log(getCountries("guatemala", "mexico", "peru"));

const imagesArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

const displayAllImages = async (images) => {
  const loadedImages = await Promise.all(images.map((img) => createImage(img)));
  loadedImages.forEach((img) => console.log(img));
  /*
  loadedImages.reduce(
    async (prev, curr) =>
      Promise.resolve(prev).then(() => displayElement(curr)),
    displayElement(loadedImages.shift()),
  );
  */

  for (const img of loadedImages) {
    // eslint-disable-next-line no-await-in-loop
    await displayElement(img);
  }
};

displayAllImages(imagesArr);
