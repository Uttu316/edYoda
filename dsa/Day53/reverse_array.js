class Stack {
  constructor(size) {
    this.items = [];
    this.maxSize = size;
    this.length = 0;
    this.push = function (element) {
      const length = this.items.length;
      if (length < this.maxSize) {
        this.items.push(element);
      } else {
        console.log("Stack Overflow");
      }
    };
    this.pop = function () {
      const length = this.items.length;
      if (length) {
        let lastElement = this.items.pop();
        return lastElement;
      } else {
        console.log("Stack Underflow");
      }
    };
    this.peek = function () {
      const length = this.items.length;
      if (length != 0) {
        console.log(this.items[length - 1]);
        return this.items[length - 1];
      } else {
        return -1;
      }
    };
    this.print = function () {
      if (this.items.length != 0) {
        for (let i = 0; i < this.items.length; i++) {
          console.log(this.items[i]);
        }
      } else {
        console.log("Stack is empty");
      }
    };
    this.size = function () {
      console.log(this.items.length);
      return this.items.length;
    };
    this.isEmpty = function () {
      // check the length and if length is 0 return true else return false
    };
  }
}

function reverse(array) {
  const size = array.length;
  const stack = new Stack(size);

  for (let i = 0; i < size; i++) {
    stack.push(array[i]);
  }
  //   stack.print()
  //   stack.peek()

  const stackSize = stack.size();

  for (let i = 0; i < stackSize; i++) {
    const lastElement = stack.pop();
    array[i] = lastElement;
  }
}

let array = [1, 2, 3, 4, 5, 6];

reverse(array);

console.log(array);

// Time Complexity: Big O(n)
