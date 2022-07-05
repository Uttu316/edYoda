var array = [1, 2, 3, 4, 5, 6];

var listOfFruits = ["Apple", "Mango"];

var data = [
  "Utkarsh",
  23,
  false,
  {
    motherName: "Indira",
  },
  [0, 1, 23, 3],
];

const obj = {
  name: "Utkarsh",
};

obj["name"]; //Utkarsh

array[0]; // 1
listOfFruits[0]; // Apple
data[3].motherName; // Indira
data[4][1]; //1

var data = [
  "Utkarsh",
  23,
  false,
  {
    motherName: "Indira",
  },
  [0, 1, 23, 100],
  function abc() {
    console.log("i am array function");
  },
];

const twoDArray = [
  [0, 1, 2],
  [3, 4, 5],
];

// const motherName = data[3].motherName;
// console.log(motherName)

// const lastNumber = data[4][3];
// console.log(lastNumber)

//console.log(twoDArray[1][0])

// data[5]()

// let array = ["Utkarsh","Rahul","Manohar","Aanchal","Rushi"]

// console.log(array);

// array[2] ="Harsh";

// array[10] = "Anas"
// array[6] = true;

// console.log(array);

const emptyArray = [];

emptyArray[5] = "IIT";

console.log(emptyArray);

const listOfColleges = ["IIT", "LPU", "NIT"];

const lastIndex = listOfColleges.length - 1;

listOfColleges[lastIndex] = "BITS";

console.log(listOfColleges);

let array = [];

array.push(0);

array.push(1);

let insertion = array.push("Utkarsh"); // returns length
let insertionAgain = array.push("Shyam"); // returns length

console.log(array);

array.pop(); // remove last element;
let popReturnedValue = array.pop();
console.log(popReturnedValue);

let array = [1, 3, 2];

let array2 = ["Utkarsh", "Gupta"];

// let sortedArray = array.sort(function(a,b) {
//    return b-a
// });

// array.reverse()

// const newArray = array.concat(array2)

// let returnValue = array.splice(3,2)
// console.log(returnValue,array)

// array.splice(3,2,"Utkarsh","Reshu","Rahul")

//array.toString()

//array.join("*")

// array.shift();// remove from begining

//array.unshift(100);// add in the begining

// delete array[0];

// const newArray = array.slice(0,2) do not update original array just return a part of array

console.log(array);

// var count = [1,,3];

// var arr = new Array(10)

// console.log(arr)

function compare(a, b) {
  var nameA = a.toUpperCase(); // ignore upper and lowercase
  var nameB = b.toUpperCase(); // ignore upper and lowercase

  console.log(nameA, nameB);

  if (nameA < nameB) {
    return -1; //When value is < 0 then a will come before b
  } else if (nameA > nameB) {
    return 1; //When value is > 0 then a will come after b
  }
  // a must be equal to b
  return 0; //When value is 0 then there will be no change in sequence.
}

let mArr = ["Utkarsh", "Rahul", "Abhishek", "Arjun", "Harsh", "Zyan"];
let numArr = [10, 2, 3, 1];
mArr.sort(compare);

console.log(mArr);

var arr = [1, 2, 3, 4, undefined, "Utkarsh"];

const isPresent = arr.includes(undefined);
if (isPresent) {
  var index = arr.indexOf(undefined);
}

arr[index] = "Shyam";

console.log(arr);
