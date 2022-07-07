function addTwoNumber(a, b) {
  var first = a;
  var second = b;

  var result = first + second;
  console.log(result);
  return result;
}

let result = addTwoNumber(3, 4);

console.log("result: " + result);

// addTwoNumber(5,6)
// addTwoNumber(10,20)

function getMyName(firstName, lastname) {
  return function () {
    return firstName + " " + lastname;
  };
}

const result_function = getMyName("Utkarsh", "Gupta");

// console.log(result_function) //  Utkarsh Gupta
// console.log(typeof result_function) // string

const name = result_function();

console.log(name);

/*
  
  Running phase
  
    result_function = function (){
      return firstName+lastname;
    }
  
    
    name = result_function();
    
    
    name // Utkarsh Gupta
    
  */

function add() {
  var counter = 0;

  return function () {
    counter += 1;
    return counter;
  };
}

let counter = add();

console.log(counter());
console.log(counter());

/*
      
        Running Phase;
        
        
       let counter  = function(){
          counter+=1;
          return counter;
        }
        
      
      */

function add(inital_value) {
  var counter = inital_value;

  return function (number) {
    counter += number;
    return counter;
  };
}

let add_counter = add(5);

console.log(add_counter(10));
console.log(add_counter(20));

function abc() {
  // { Hoisted
  //   name:undefined,
  //    function (){
  //     console.log()
  //   },
  //     function (){
  //     x++
  //   }

  console.log(name); //undefined

  var name = "Utkarsh";

  console.log(name); // utkarsh
}
abc();

// Hoisting

// var variables and function(){} are hoisted in js.

// hoisted function
function abc() {
  console.log(name); //undefined

  var name = "Utkarsh";

  console.log(name); // utkarsh
}

// my_function: undefined;

my_function(); // error

var my_function = function () {
  console.log(name); //undefined

  var name = "Utkarsh";

  console.log(name); // utkarsh
};

var x = 10;
function test() {
  var x = 20;
  console.log(x);
}

test();
console.log(x);

const functionName = () => {
  // fat arrow function ES6
};
