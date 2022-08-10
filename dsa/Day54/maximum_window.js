function maximumWindow(array, k) {
  const n = array.length;

  for (let i = 0; i <= n - k; i++) {
    let max = array[i];

    for (let j = 1; j < k; j++) {
      if (max <= array[i + j]) {
        max = array[i + j];
      }
    }
    console.log(max);
  }
}

let array = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let k = 3;
maximumWindow(array, k);
//BigO ((n-k)*k)
// BigO(nk)

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

for (let i = 0; i < array.length; i++) {
  queue.enqueue(array[i]);
}

while (queue.length >= k) {
  const currentWindow = queue.items.slice(0, k);
  console.log(currentWindow);
  const max = Math.max(...currentWindow);

  console.log(max);

  queue.dequeue();
}

//O(n+(n-k)*(k+k+1))
//O(n*k)
//O(n*n)
