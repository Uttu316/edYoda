function abc() {
  console.log(1);
}
function xyz() {
  console.log(2);
}

function asyc_func() {
  setTimeout(() => {
    console.log(3);
  }, 2000);
}

asyc_func(); // execute(wait) in async context(Queue) then after waiting for 2 seconds it will give its result
abc(); // synchronus function

xyz(); // synchronus function

// navaigator
// screen
//location
//history
//documnet

//storage
