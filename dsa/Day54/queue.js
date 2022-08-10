class Queue {
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
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
// queue.front()
queue.dequeue();

// queue.front()

queue.enqueue("Utkarsh");
queue.enqueue("Anand");
queue.enqueue("Akshay");
queue.enqueue("Rushikesh");
queue.enqueue("Tina");

//  queue.front()

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.front();
console.log(queue.length);

//deque
