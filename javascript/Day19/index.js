//check if it is square or not

var length = 201;
var breadth = 200;

if (length == breadth) {
  console.log("I am a square");
} else {
  console.log("I am not a square");
}

//Grading system

var enteredMarks = 79;

if (enteredMarks < 25) {
  console.log("F");
} else if (enteredMarks >= 25 && enteredMarks < 45) {
  console.log("E");
} else if (enteredMarks >= 45 && enteredMarks < 50) {
  console.log("D");
} else if (enteredMarks >= 50 && enteredMarks < 60) {
  console.log("C");
} else if (enteredMarks >= 60 && enteredMarks < 80) {
  console.log("B");
} else {
  console.log("A");
}

//result stored
var enteredMarks = 62;
var result = "";

if (enteredMarks < 25) {
  result = "F";
} else if (enteredMarks >= 25 && enteredMarks < 45) {
  result = "E";
} else if (enteredMarks >= 45 && enteredMarks < 50) {
  result = "D";
} else if (enteredMarks >= 50 && enteredMarks < 60) {
  result = "C";
} else if (enteredMarks >= 60 && enteredMarks < 80) {
  result = "B";
} else {
  result = "A";
}

console.log("Utkarsh got", enteredMarks, "Grade:", result);

var enteredVowel = "A";

switch (enteredVowel) {
  case "a": {
    console.log("I am a vowel");
    break;
  }
  case "A": {
    console.log("I am a vowel");
    break;
  }

  case "e": {
    console.log("I am a vowel");
    break;
  }

  case "E": {
    console.log("I am a vowel");
    break;
  }

  case "i": {
    console.log("I am a vowel");
    break;
  }
  case "I": {
    console.log("I am a vowel");
    break;
  }
  case "O": {
    console.log("I am a vowel");
    break;
  }
  case "o": {
    console.log("I am a vowel");
    break;
  }

  case "u": {
    console.log("I am a vowel");
    break;
  }
  case "U": {
    console.log("I am a vowel");
    break;
  }

  default:
    console.log("I am a consonant");
}

console.log("The end");

//check if number is even or odd

var number = 3;

if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

var number = 1;

//++number; // preIncrement
//number++; // postIncrement

console.log(number);
console.log(++number);
console.log(number);

var number = 1;

//++number; // preIncrement
//number++; // postIncrement

console.log(number);
console.log(number++);
console.log(number);

var number1 = 1;
var number2 = 1;

//++number; // preIncrement
//number++; // postIncrement

var result = number1 + ++number2;

console.log(result, number2);

var numberA = 1;
var numberB = 1;

//--number; // preDecrement
//number--; // postDecrement

var result = numberA + --numberB;

console.log(result, numberB);
