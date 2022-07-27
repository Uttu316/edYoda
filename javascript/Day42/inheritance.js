function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

const student1 = new Student("Phani", 23);
const student2 = new Student("Utkarsh", 50);
const student3 = new Student("Ajay", 20);
const student4 = new Student("Muskan", 12);
const student5 = new Student("Rahul", 43);
const student6 = new Student("Shivam", 24);

student1.isPlayer = false;
student2.isPainter = true;

console.log(student1, student2);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    console.log(this.name);
  };
}

const firstPerson = new Person("Utkarsh", 23);

// firstPerson-->Person-->Object-->null

let arr = new Array(); // []

// arr-->Array-->Object-->null

arr.__proto__;
// Array()
arr.__proto__.__proto__;
// Object()
arr.__proto__.__proto__.__proto__;

// null

Array.prototype.getEvenNumbers = function () {
  const currentArray = this;
  for (let i = 0; i < currentArray.length; i++) {
    if (currentArray[i] % 2 === 0) {
      console.log(currentArray[i]);
    }
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.__proto__

numbers.getEvenNumbers();

function Car(name, model, doM) {
  this.name = name;
  this.model = model;
  this.doM = doM;

  this.start = function () {
    console.log("Start");
  };
  this.stop = function () {
    console.log("Stop");
  };
}

function Company(name, model, doM, companyName, audioSystem) {
  Car.call(this, name, model);

  this.audioSystem = audioSystem;
  this.companyName = companyName;

  this.getService = function () {
    console.log("Servicing");
  };
}

const car = new Company("i10", "Maruti", "2021", "Nexa", "JBL");
//console.log(car)
car.start();
car.stop();
car.getService();

const allNumbers = [1, 2, 3, 4, 5, 6];

const number = allNumbers.filter(fiterArray).find(findMorethanThree);

console.log(number);

function fiterArray(item, index) {
  return item % 2 == 0;
}

function findMorethanThree(item, index) {
  return item > 3;
}

class Parent {
  constructor(children) {
    this.eyeColor = "Black";
    this.height = "Tall";
    this.hairColor = "Brown";
    this.origin = "Asian";
    this.children = children;
  }

  speak() {
    console.log("Speak Hindi");
  }
}

class Child extends Parent {
  constructor(siblings, parentName, name) {
    super(siblings + 1);

    this.parentName = parentName;
    this.name = name;
  }

  speak() {
    console.log("Speaking English");
  }
}

const child = new Child(1, "Manohar", "Suryavanshi");

console.log(child);
child.speak(); //
