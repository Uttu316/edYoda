let x = NaN;

try {
  if (x === "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too high";
} catch (err) {
  console.log("Input is " + err);
}

throw {
  name: "",
  message: "",
};
// javascript thow an object like mentioned above, whenever it gets any error.

let z = 5;
try {
  z = y + 1;
} catch (err) {
  switch (err.name) {
    case "ReferenceError":
      console.log("Ref error " + err.message);
      break;
    case "RangeError":
      console.log("Range error " + err.message);
      break;
    case "TypeError":
      console.log("Type error " + err.message);
      break;
  }
}

try {
  throw new Error("Oops", "An Error ocured, come back later!");
} catch (e) {
  console.log(e.name, e.message);
}

try {
  const obj = new Error("An Error ocured, come back later!");
  obj.name = "Oops";
  throw obj;
} catch (x) {
  console.log(x.name, x.message);
}

/*
   
   if(variable is not defined in the context){
   
   throw new Error("ReferenceError error",`${varaiableName} is not defined`)
   
   }
   
 */

const isLoader = false;

function api() {
  isLoader = true;
  try {
    // api
    obj.send(); // error Ocuured
    if (readystate === 3) {
    }
    if (readystate == 4) {
    }
  } catch (x) {
    console.log("Catch");
  } finally {
    isLoader = false;
    console.log("Finally");
  }
}

function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

console.log(doIt());

try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error(ex.message);
}

try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 4000);
}

/*
  
    Memory:{
      i=0
    }
    
    Browser Phase:
      
    
    }
    
    Running Phase
     
     for();
     
     First Iteration: i=0
    
     Second Iteration: i=1
     
     Third Iteration: i=2
     
    ()=>{
       console.log(i) // 0
    }
    ()=>{
       console.log(i) //1
    }
    
    ()=>{
       console.log(i) //2
    }
  
  
  
  
  
  
  */

for (var i = 0; i < 3; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  })(i);
}
