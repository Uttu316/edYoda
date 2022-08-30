var x;
let y;
const z = 2;

console.log(x, y, z);

const abc = function () {};

// person //abc //(parameters)
function abc(x, y, z) {
  // function body
  console.log(x, y, z);
}

abc(2, 3, 4);

// Arrow funcitons

const add = (x) => {
  return (y) => {
    return x + y;
  };
};

const value = add(5)(10);
console.log(value);

// Arrow funcitons

/* Write an arrow function named arrayAverage that accepts an 
  array of numbers and returns the average of those numbers.*/

const arrayAverage = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    //i = 5
    sum += numbers[i];
  }
  // sum  = 15
  return sum / numbers.length;
};

let numbers = [1, 2, 3, 4, 5];

let avg = arrayAverage(numbers);
console.log(avg);

const multiplication = (a, b) => a * b;

console.log(multiplication(2, 3));

const name = "Utkarsh";

const str = `Hello ${name}`;

console.log(str);

let x = {
  name: "utkarsh",
};

let y = { ...x };

y.name = "Suresh";

console.log(x);

const abc = (x, y, ...args) => {
  console.log(x, y, args);
};

abc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let array = [1, 2, 3, 4, 5];

let [x, y, z, last] = array;

console.log(x, y, z, last);

let obj = {
  name: "Manohar",
  age: 32,
  salary: 1000000,
};

const name = "Utkarsh";
let { age, name: Fname, salary } = obj;

console.log(name);

const fullName = "Utkarsh";

const str = `Hello ${fullName}`;
