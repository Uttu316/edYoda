class Dequeue {
  constructor() {
    this.items = [];
    this.length = 0;
    this.enqueue = function (value) {
      this.items.push(value);
      this.length++;
    };
    this.dequeue = function () {
      this.items.shift();
      this.length--;
    };
    this.pop = function () {
      this.items.pop();
      this.length--;
    };
    this.push_front = function (element) {
      this.items.unshift(element);
      this.length++;
    };
    this.front = function () {
      if (this.length) {
        const frontElement = this.items[0];
        console.log(frontElement);
        return frontElement;
      } else {
        console.log("Queue is empty!");
        return -1;
      }
    };
    this.rear = function () {
      if (this.length) {
        const lastElement = this.items[this.length - 1];
        console.log(lastElement);
        return lastElement;
      } else {
        console.log("Queue is empty!");
        return -1;
      }
    };
  }
}

const dequeue = new Dequeue();
