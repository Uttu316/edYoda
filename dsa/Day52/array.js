function findNumber(array, k) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (array[i] === k) {
      return i;
    }
  }
  return -1;
}

let array = [1, 13, 2, 7, 328, 32, 432, 33, 42, 32, 12];

numberToFind = 1;
const position = findNumber(array, numberToFind);

console.log(position);
// Time complexity: Big O(n)

let array = [1, 2, 3, 4, 5];
let arr = new Array();

console.log(array[0]);
console.log(array[3]);

let twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let threeDArray = [
  [
    [1, 2, 3],
    [2, 3, 4],
    [1, 2, 3],
  ],
];

let newArray = [];

newArray.push(2);
newArray.push(3);
newArray.push(4);

// [2,3,4]

/* Traversing */

/* Searching */

let target = 4;

for (let i = 0; i < array.length; i++) {
  if (array[i] === target) {
    console.log(i);
    break;
  }
}

// indexOf()
// findIndex()
// includes()

const lastElement = array.pop();
const firstElement = array.shift();
array.unshift(10);
console.log(array);
