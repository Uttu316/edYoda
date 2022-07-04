let enteredAlphabet = "0";

if (
  enteredAlphabet.charCodeAt(0) >= 65 &&
  enteredAlphabet.charCodeAt(0) <= 90
) {
  console.log("Capital letter");
} else if (
  enteredAlphabet.charCodeAt(0) >= 97 &&
  enteredAlphabet.charCodeAt(0) <= 122
) {
  console.log("Lowercase letter");
} else {
  console.log("Non Alphabet letter");
}

const inputA = prompt("Enter first operand");
const inputB = prompt("Enter second operand");
const inputC = prompt("Enter operator");
console.log(inputA, inputB, inputC);

switch (inputC) {
  case "+":
    console.log(parseInt(inputA) + parseInt(inputB));
}

const sideA = prompt("Enter Side A");
const sideB = prompt("Enter Side B");
const sideC = prompt("Enter Side C");
console.log(inputA, inputB, inputC);

if (inputA == inputB && inputB == inputC) {
  console.log("I am equilateral");
}
