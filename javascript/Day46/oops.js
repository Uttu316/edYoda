class Father {
  constructor() {
    this.hairColor = "Brown";
  }
}

class Mother {
  constructor() {
    this.skinColor = "White";
  }
  speak() {
    console.log("Speaking Hindi");
  }
}

class Child extends Mother {
  constructor(name) {
    super();

    this.name = name;
  }
  speak() {
    console.log("Speaking English");
  }
}

// function Child(name) {
//   Father.call(this);
//   Mother.call(this);
//   this.name = name;
// }

const child1 = new Child("Akshay");

console.log(child1);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const obj = new Person("Utakrsh", 23);

console.log(obj);

// new keyword gives you empty object and constructor function/class provides you methods and properties
