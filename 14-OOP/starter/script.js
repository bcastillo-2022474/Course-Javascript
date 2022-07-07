"use strict";
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calc = function () {
  //   return 2022 - this.birthYear;
  // };
};

const jonas = new Person("Jonas", 1991);
const maria = new Person("Maria", 2000);
const joao = new Person("Joao", 2005);
console.log(jonas);
console.log(joao);
console.log(maria);
Person.prototype.calc = function () {
  return 2022 - this.birthYear;
};
console.log(jonas.calc());

const X = function (xd) {
  console.log(xd);
};

const xd = new X("funciona");

console.log(typeof xd, "XDDDDDDDDDD");

console.log(Person.prototype, "prototype");
console.log(jonas.__proto__, "__proto__");
console.log(Person.prototype === jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.__proto__.__proto__ === Object.prototype);
console.log(Person, "obj");
console.log(X, "obj");
console.log(Person.prototype, "prototype");
console.log(Person.__proto__, "__proto__");
console.log(Object.__proto__, "object.__proto__");
console.log(Object.__proto__ === Person.__proto__);
console.log(Object.__proto__);
*/
/*
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  static xd() {
    console.log("it works");
  }
}

const jessica = new Person("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.firstName);

Person.xd();
*/
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2000;
console.log(steven.calcAge());
*/

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.hola = function () {
  return "hola";
};
const xd = new Person("Joao", 2005);
console.log(xd);

Person.prototype = {
  ...Person.prototype,
  calcAge() {
    return 2022 - this.birthYear;
  },

  greet() {
    return "HOlaaaaaaa";
  },

  sumar(num1, num2) {
    return num1 + num2;
  },
};

const joao = new Person("Joao", 2005);
console.log(joao.greet());
console.log(joao.sumar(10, 20));
console.log(joao.calcAge());
console.log(joao);

console.log(joao instanceof Person);
console.log(xd instanceof Person);
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2022 - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // SUPER IMPORTANT
Student.prototype.constructor = Student; // IMPORTANT;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2002, "Computer Science");
console.log(mike);
console.log(mike.calcAge());
mike.introduce();
console.log(mike);
*/

/*
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  static xd() {
    console.log("it works");
  }
}

const jessica = new Person("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.firstName);

Person.xd();

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}

const joao = new Student("Joao", 2005, "Computer Science");

joao.calcAge();
console.log(joao);

Student.xd();
*/

/*
const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const steve = Object.create(StudentProto);
steve.init("Steve", 2000, "Computer Science");
steve.calcAge();
steve.introduce();
console.log(steve);
*/

class Account {
  constructor(owner, currency, pin, movements = []) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Protected
    this._movements = movements;
    // this.locale = navigator.language;
  }

  // Public Interface
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(100);
acc1.withdraw(300);
console.log(acc1);
