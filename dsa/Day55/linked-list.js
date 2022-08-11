class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function print(o) {
  console.log(JSON.stringify(o));
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insert(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.length++;
    } else {
      let curr = this.head;

      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;

      this.length++;
    }
  }

  insertAtPos(value, pos) {
    const node = new Node(value);
    if (pos == 0) {
      let prev = this.head;
      node.next = prev;
      this.head = node;
      this.length++;
    } else {
      let count = 0;
      let prev = this.head;
      let curr = this.head;
      while (count < pos) {
        count++;
        prev = curr;
        curr = curr.next;
      }

      const current = prev.next;
      prev.next = node;
      node.next = current;
      this.length++;
    }
  }
  pop() {
    if (!this.head) return null;

    let curr = this.head.next;
    let prev = this.head;

    while (curr.next != null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.length--;
  }
  remove(pos) {
    if (!this.head) return null;
    if (pos == 0) {
      this.head = this.head.next;
    } else {
      let count = 0;
      let prev = this.head;
      let curr = this.head;
      while (count < pos) {
        count++;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this.length--;
  }
  getData(pos) {
    if (!this.head) {
      console.log(null);
      return null;
    }
    let count = 0;
    let curr = this.head;
    while (count < pos) {
      count++;
      curr = curr.next;
    }
    console.log(curr.data);
    return curr.data;
  }
  isCycle() {
    let s = new Set();
    let curr = this.head;
    while (curr != null) {
      if (s.has(curr)) {
        console.log(true);
        return true;
      }

      s.add(curr);

      curr = curr.next;
    }

    console.log(false);
    return false;
  }
}
const l = new LinkedList();
// console.log(l)
l.insert(1);
l.insert(2);
l.insert(3);
l.insert(4);
l.insert(5);
l.insert(6);
l.insertAtPos(0, 0);
l.insertAtPos(-1, 0);
//print(l)
l.insertAtPos("Utkarsh", 2);
// print(l)
l.pop();
// print(l)
l.remove(0);
print(l);
// l.getData(3)
l.isCycle();
