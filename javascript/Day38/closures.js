/* Question 1 */

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

/* Question 2 */

const fn = () => {
  let a = 1;
  return () => {
    a++;
    return a;
  };
};

console.log(fn()());

const fnRes = fn();

console.log(fnRes());

const nextRes = fn();
console.log(nextRes());

/*
     Memory:
      fnRes= () => {
      a++;
      return a;
    }
    nextRex =() => {
      a++;
      return a;
    }
    
    
    
    Context:
    
      
        
   
    Running Phase:
         
   
    
   */

/* Question 3 */

const sum = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
};

console.log(sum(1)(2)(3));

/* Home Work */

const add = () => {};

console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(3)());
console.log(add(1)(2)(3)(4)());
