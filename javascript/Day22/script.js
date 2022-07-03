var A = window.prompt("Enter input - 1");
var B = window.prompt("Enter input - 2");
var C = window.prompt("Enter input - 3");

A = "2";
B = "2";
C = "2";

if (A == B && B == C) {
  console.log("IT is true!");
} else if (A == B || B == C || A == C) {
  console.log("It is false!");
} else {
  console.log("all ok");
}

function sayHi() {
  console.log(name);
  // console.log(age);
  var name = "Lydia";
  let age = 21;
  console.log(age);
}

sayHi();

//Browser

// Memory:{
//      sayHi{
//        name-->'Lydia',
//          age--->21;
//      },

// }//Map

// Running Phase

/*
  
  
  */
