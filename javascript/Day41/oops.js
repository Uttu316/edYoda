let person = {
  legs: 2,
  hand: 2,
  canSpeak: true,
  walk: function () {},
  speak: function () {},
};

const male = { ...person };

male.gender = "male";

const female = person;

female.gender = "female";

console.log(male, female);

let car = {
  tires: 4,
  start: function () {},
  stop: function () {},
};

const bmw = { ...car };

bmw.model = "XYZ";
bmw.engine = "1000hp";

const audi = { ...car };

audi.isEV = true;

function Person() {
  this.name = "Utkarsh";
  this.age = 23;
  this.getAge = function () {
    console.log(this.age);
  };
}

const obj = new Person();

obj.name = "Shyam";
obj.age = 32;

console.log(obj);
obj.getAge();

const obj1 = new Person();

obj1.name = "Anil";
obj1.age = 34;

console.log(obj1.name);
obj1.getAge();

function Person(name, gender, age) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getAge = function () {
    console.log(this.age);
  };

  if (this.gender === "Male") {
    this.getPants = function () {
      console.log("I got pants");
    };
  }
  if (this.gender === "Female") {
    this.getSkirt = function () {
      console.log(`${this.name} got skirts`);
    };
  }
}

const mike = new Person("Mike", "Male", 32);
const miley = new Person("Miley", "Female", 23);

console.log(mike);
console.log(miley);
miley.getSkirt();

function Worker(title) {
  this.jobTitle = title;
  this.getRelax = function () {};
  this.gotoWork = function (time) {
    console.log(`${this.jobTitle} go to work at ${time}`);
  };

  this.sleep = function () {};

  this.getDailyRoutine = function () {};
}

const fireFighter = new Worker("Fire Figter");
fireFighter.gotoWork("8:00 AM");
