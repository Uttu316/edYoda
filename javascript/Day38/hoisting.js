/* Question 1 */
console.log(typeof foo);

function foo() {
  return "bar";
}

(function () {
  var foo = "bar";
})();

/* Question 2 */

function foo() {
  bar();

  return;

  function bar() {
    console.log("bar");
  }
}

foo();

/*
    
    MEMORY:
    
    
    Context:
      Global Context:
        foo
        Foo Context:
          bar
          Bar Context:
              
  
    Running Phase:
    
    foo():
  
      bar();
  
    return;
  
    function bar() {
      console.log("bar");
    }
    
  */

/* Question 3 */

function foo() {
  let a = (b = 0);
  a++;
  return a;
}

foo();
console.log(typeof a);
console.log(typeof b);
