function sum(a = 2, b = 5, c = 9) {
  console.log(a, b, c); // 1,2,9
}

sum(1, 2);

function sum(a = 2, b = 5, c = 9) {
  const args = arguments; // it will give array object of all agruments passed while function calling
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

// const sum =(a,b,c)=>{
//   console.log(arguments) // not present in arrow function
// }

sum(1, 2, 3, 3, 2, 4, 45, 5, 6, 7);

const sum = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

console.log(sum(1, 2, 3, 3, 2, 4, 45, 5, 6, 7));

const firstname = "utkarsh";
const secondName = "gupta";
const age = 23;
const city = "Agra";

const result = `Name: ${firstname} ${secondName} Age: ${age}`;

console.log(result);

const person = {
  name: "Sara",
  age: 25,
  gender: "female",
  address: {
    city: "Mumbai",
    state: "Maharashtra",
  },
};

const {
  name,
  age,
  gender,
  address: { city },
} = person; // destructuring

console.log(name, age, gender, city);

const array = [[1, 2], 5, 10, 15];

// array[0] // 1
// array[1] // 2

const [[x, y], b, c] = array;

console.log(b, c, x, y);

function abc() {
  return {
    name: "Utkarsh",
    age: 23,
  };
}

const { name, age } = abc();

console.log(name);

function abc() {
  return ["Utkarsh", 23];
}

const [name, age] = abc();

console.log(name);

function forEach(callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

forEach((each_item, index) => {
  console.log(each_item, index);
});

const array = [
  {
    name: "utkarsh",
    age: 23,
  },
  {
    name: "Lakhan",
    age: 43,
  },
  {
    name: "Nancy",
    age: 25,
  },
  {
    name: "Anas",
    age: 15,
  },
];

array.forEach(({ name, age }, index) => {
  console.log(name, age);
});

const counter = {
  count: 0,
  next: () => ++this.count,
  current: () => this.count,
  getCount: function () {
    return this.count;
  },
};

console.log(counter.next());
console.log(counter.getCount());
