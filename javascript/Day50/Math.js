const a = [1, 2, 3, 4, 5];

console.log(Math.max(...a));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(...a));
console.log(Math.min(1, 2, 3));
console.log(Math.pow(2, 3));
console.log(Math.floor(Math.random() * 100));
console.log(Math.round(4.2));
console.log(Math.trunc(6.5));

//Print all even numbers from 0 – 10

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

//Print a table containing multiplication tables

var num = 30;
for (i = 1; i <= 10; i++) {
  var table = num * i;
  console.log(table);
}

//Calculate the sum of numbers within an array

let array = [1, -2, -3];

var s = 0;
for (let i = 0; i < array.length; i++) {
  s = array[i] + a;
}
console.log(a);
