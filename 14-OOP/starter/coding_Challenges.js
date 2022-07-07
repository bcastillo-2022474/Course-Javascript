/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car("BMW", 120);
const mercedez = new Car("Mercedez", 95);

bmw.accelerate();
mercedez.brake();
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  getSpeedUS() {
    return this.speed / 1.6;
  }
}

const ford = new Car("Ford", 120);

console.log(ford.getSpeedUS());
ford.accelerate();
ford.brake();
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const ElectricCar = function (make, speed, battery) {
  Car.call(this, make, speed);
  this.battery = battery;
};

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.battery--;
  console.log(this.speed);
};

const tesla = new ElectricCar("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
console.log(tesla.battery);
tesla.chargeBattery(60);
console.log(tesla.battery);
console.log(tesla);
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

class ElectricCar extends Car {
  constructor(make, speed, battery) {
    super(make, speed);
    this.battery = battery;
  }

  chargeBattery(chargeTo) {
    this.battery = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.battery--;
    console.log(this.speed);
    return this;
  }
}

const tesla = new ElectricCar("Tesla", 120, 23);
tesla.accelerate().brake();
console.log(tesla.battery);
tesla.chargeBattery(60).accelerate();
console.log(tesla.battery);
console.log(tesla);
