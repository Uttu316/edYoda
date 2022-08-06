const obj = {
  name: "Utkarsh",
  age: 23,
};

const isValid = typeof obj === "object" && obj.age < 20 ? "Valid" : "InValid";
const isOrValid = typeof obj === "object" || obj.age < 20 ? "Valid" : "InValid";

console.log(isValid, isOrValid);

const isTypeValid =
  typeof obj === "object" && Boolean(obj["age"])
    ? obj.name.includes("t")
      ? "Valid"
      : "Invalid"
    : "Not valid";

console.log(isTypeValid);

const isConsoleValid =
  console.log("Hello") && Boolean(null) ? "Valid" : "Invalid";

console.log(isConsoleValid);

const isOrConsoleValid =
  console.log("Hello") || console.log("Hey") ? "Valid" : "Invalid";

console.log(isOrConsoleValid);

const checkOr = true || console.log("Hey") ? "Valid" : "Invalid";

console.log(checkOr);

/*Create a function that reverses an array;

 write a function (array)
    return  a new array which the reverse of original array
    
    myReverse([1,2,3,4,5])
    
    
    output = []
    Loop from last
    push current value in new array
        output.push(currentValue)
    return output
    
 
*/

function reverse(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }

  return output;
}
let array = [1, 2, 3, 4, 5];

console.log(reverse(array));

function myReverse() {
  let array = this;
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

Array.prototype.myReverse = myReverse;

console.log(array.myReverse());

/*

H.W

Rotate the array

const array = [1,2,3,4,5];

output: [2,3,4,5,1], [3,4,5,1,2],[4,5,1,2,3]

write a function to rotate an array

    rotate(array,1)


*/

/*
Create a function that filters out negative numbers;
// looping is also known as traversing;

array = [1,-1,2,-10,3,5,-7];
newArray = [1,2,3,5]
*/

function getPositive(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];

    if (currentValue >= 0) {
      result.push(currentValue);
    }
  }
  return result;
}

let allarray = [1, -1, 2, -10, 3, 5, -6];

const positiveNumbers = getPositive(allarray);

console.log(positiveNumbers);

function filterNegatives(array) {
  let result = array.filter((i, index) => i >= 0);
  return result;
}

const numbers = filterNegatives(array);

console.log(numbers);

/* Return a Boolean if a number is divisible by 10
    
    value = 100;
    const isDivisible = divisibleBy10(value)
*/

const divisibleBy10 = (value) => {
  return value % 10 == 0;
};

let value = 1000;
const isDivisible = divisibleBy10(value);
console.log(isDivisible);

/*
Check if a string is a palindrome or not;

string = "NAMAN";

*/

let str = "NAMAN";
let beg = 0;
let end = str.length - 1;

while (beg < str.length && end >= 0) {
  console.log(beg, end, str[beg], str[end]);
  if (beg === end) {
    console.log("is  Palindrome");
    break;
  }
  if (str[beg] === str[end]) {
    beg++;
    end--;
    continue;
  }
  console.log("is Not Palindrome");
  break;
}

let newStr = str + str;

function reverseString(str) {
  var newString = "";

  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
let isPalindrome = newStr == reverseString(newStr);
console.log(isPalindrome);
