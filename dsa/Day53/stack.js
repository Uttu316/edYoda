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
    };
    this.isEmpty = function () {
      // check the length and if length is 0 return true else return false
    };
  }
}

const stack = new Stack(5);

// stack.print()
stack.push(1);
stack.push(2);
stack.push(3);
// stack.print()
stack.pop();
//stack.print()
stack.pop();
// console.log(stack.pop())
//stack.print()
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

//console.log(stack.peek())
stack.pop();
stack.pop();
stack.pop();
stack.pop();

// console.log(stack.peek())

stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
// console.log(stack.peek())
stack.size();
console.log(stack.peek());
