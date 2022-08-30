let array = [1, 2, 3, 4, 5, 6];

let sum = 0;

array.forEach((each_item, index) => {
  sum += each_item;
});

console.log(sum);

let data = [
  {
    name: "Utkarsh",
    age: 23,
  },
  {
    name: "Abhay",
    age: 24,
  },
  {
    name: "Samir",
    age: 25,
  },
];

const students = data.map((each_item) => {
  return each_item.name;
});

console.log(students);

const my_map = function (callback) {
  let array = [];
  let original = this;

  for (let i = 0; i < original.length; i++) {
    const value = callback(original[i], i, original);
    array.push(value);
  }
  return array;
};

Array.prototype.my_map = my_map;

const names = data.my_map((each_item) => {
  return each_item.name;
});

let list = [
  {
    name: "Utkarsh",
    age: 23,
  },
  {
    name: "Abhay",
    age: 24,
  },
  {
    name: "Samir",
    age: 35,
  },
  {
    name: "Harshini",
    age: 18,
  },
  { name: "Nancy", age: 15 },
  { name: "Akshay", age: 45 },
];

const eligibles = list.filter((i) => i.age >= 18);

console.log(eligibles);

const index = list.find((each_item) => {
  return each_item.age === 18;
});

console.log(index);

let numbers = [1, 2, 3, 4];

let intialValue = 0;

const value = numbers.reduce((prev_value, current_value) => {
  return prev_value + current_value;
}, intialValue);

console.log(value);

const promise = new Promise((resolve, reject) => {
  // asynchronous call
  // resolve()
  // reject()
  setTimeout(() => {
    reject("Hello");
  }, 500);
});

promise
  .then((data) => {
    console.log(data);
    return data + "Utkarsh";
  })
  .catch((data) => {
    console.log("catch");
    console.log(data);
  })
  .finally(() => {
    console.log("Final");
  });
