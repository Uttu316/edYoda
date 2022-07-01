var myName = "Utkarsh";

let number = 2;
//var number=3; gives error Identifier 'number' has already been declared

const myMotherName = "Indira Gandhi";

myMotherName = "Mamta Banarjee";

const obj = {
  name: "utkarsh",
};
obj.name = "Shubham"; // we can change property of any constant variable(object).
console.log(obj);

// what is the difference b/w let,var and const;

Browser;
Javascript;
{
  //Global scope

  var myName = "Utkarsh";

  let number = 2;
  //var number=3; gives error Identifier 'number' has already been declared

  const myMotherName = "Indira Gandhi";

  myMotherName = "Mamta Banarjee";

  const obj = {
    name: "utkarsh",
  };
  obj.name = "Shubham"; // we can change property of any constant variable(object).
  console.log(obj);

  function abc() {
    // Function Scope

    if (condition) {
      // Block Scope
      // code block for If statement
    } else {
      //code block for Else statement
    }
  }
}

var globalVariable = "global";
let globalVariable2 = "letGlobal";

function my_function() {
  console.log(globalVariable, globalVariable2); // global, letGlobal

  var functionVariable = "function";
  let functionVariable2 = "function2";

  if (true) {
    console.log(
      globalVariable,
      globalVariable2,
      functionVariable,
      functionVariable2
    ); // global, letGlobal, function, function2

    var blockVariable = "block";
    let blockVariable2 = "letBlock";
    const blockConstantVaribale = "constValue";

    console.log(blockVariable, blockVariable2, blockConstantVaribale); // block, letblock, constValue
  }

  console.log(blockVariable, blockConstantVaribale);
}

const firstInput = prompt("User First Input"); // "2"->convert result into integer
const secondInput = prompt("User Second Input");
