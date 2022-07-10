// eslint-disable-next-line max-classes-per-file
"use strict";

// prettier-ignore
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
let inputs = [inputDistance, inputDuration, inputCadence, inputElevation];

class Workout {
  date = new Date();
  id = `${Date.now()}`.slice(-10);

  constructor(type, coords, distance, duration, day) {
    this.type = type;
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    this.day = day;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence, day) {
    super("running", coords, distance, duration, day);
    this.cadence = cadence;
    this.pace = this.duration / this.distance;
  }
}
class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain, day) {
    super("cycling", coords, distance, duration, day);
    this.elevationGain = elevationGain;
    this.speed = this.distance / (this.duration / 60);
  }
}

class App {
  #map;
  #mapZoomLevel = 20;
  #mapEvent;
  #workouts = [];

  popUp = {
    maxWidth: 250,
    minWidth: 100,
    autoClose: false,
    closeOnClick: false,
  };

  constructor() {
    this.#getPosition();
    this.#getLocalStorage();
    form.addEventListener("submit", this.#newWorkout.bind(this));
    inputType.addEventListener("change", this.#toggleElevationField);
    containerWorkouts.addEventListener("click", this.#center.bind(this));
  }

  #getPosition() {
    navigator.geolocation.getCurrentPosition(this.#loadMap.bind(this), () =>
      alert("The porgram wont work without this functionality"),
    );
  }

  #loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);
    this.#map.on("click", this.#showForm.bind(this));

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#workouts.forEach((work) => this.#renderWorkoutMarker(work));
  }

  #showForm(e) {
    this.#mapEvent = e;
    inputs.forEach((input) => (input.value = ""));
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  #toggleElevationField(e) {
    if (e.target.value === "cycling") {
      inputCadence.parentNode.classList.add("form__row--hidden");
      inputElevation.parentNode.classList.remove("form__row--hidden");
    }
    if (e.target.value === "running") {
      inputCadence.parentNode.classList.remove("form__row--hidden");
      inputElevation.parentNode.classList.add("form__row--hidden");
    }
  }

  #newWorkout(e) {
    e.preventDefault();
    // Check data
    const type = inputType.value;
    inputs = [inputDistance, inputDuration];

    if (type === "running") inputs.push(inputCadence);
    if (inputs.some((input) => +input.value < 0)) return;

    if (type === "cycling") inputs.push(inputElevation);
    if (inputs.some((input) => !+input.value)) return;

    // Instance Workout class
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    const inputsValue = inputs.map((input) => +input.value);
    if (type === "cycling") workout = new Cycling([lat, lng], ...inputsValue);
    if (type === "running") workout = new Running([lat, lng], ...inputsValue);
    this.#workouts.push(workout);
    // Date Options
    const dateOptions = { month: "long", day: "numeric" };
    workout.day = new Intl.DateTimeFormat("en-US", dateOptions).format(
      new Date(),
    );
    this.popUp.className = `${type}-popup`;

    // render
    this.#renderWorkoutMarker(workout);
    this.#renderList(workout);

    // quit annoying animatio
    form.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);

    // set localStorage
    this.#setLocalStorage();
  }

  #renderWorkoutMarker(workout) {
    const emoji = workout.type === "running" ? "🏃" : "🚴";
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(L.popup(this.popUp))
      .setPopupContent(`${emoji}${workout.type} on ${workout.day}`)
      .openPopup();
  }

  #renderList(workout) {
    const typeUppercase = workout.type[0].toUpperCase() + workout.type.slice(1);
    const emoji = workout.type === "running" ? "🏃" : "🚴";
    let html = `<li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${typeUppercase} on ${workout.day}</h2>
          <div class="workout__details">
            <span class="workout__icon">${emoji}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

    if (workout.type === "cycling") {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>`;
    }

    if (workout.type === "running") {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    }
    form.insertAdjacentHTML("afterend", html);
  }

  #center(e) {
    const list = e.target.closest(".workout");
    if (!list) return;
    const workout = this.#workouts.find((work) => work.id === list.dataset.id);
    const mapOptions = { animate: true, pan: { duration: 1 } };
    this.#map.setView(workout.coords, this.#mapZoomLevel, mapOptions);
  }

  #setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }

  #getLocalStorage() {
    const data = localStorage.getItem("workouts");
    if (!data) return;
    this.#workouts = JSON.parse(data);
    this.#workouts.forEach((work) => this.#renderList(work));
  }

  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

const app = new App();
