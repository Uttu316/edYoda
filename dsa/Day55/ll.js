class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add_AtBeigning(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  add(value) {
    const node = new Node(value);

    // when list is empty
    if (this.head == null) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next != null) {
        curr = curr.next;
      }

      curr.next = node;
    }
  }
  add_AtPosition(pos, value) {
    if (this.head === null && pos !== 0) {
      return null;
    }

    let count = 0;
    let curr = this.head;
    let prev = this.head;

    while (count < pos) {
      count++;
      prev = curr;
      curr = curr.next;
    }

    const node = new Node(value);
    prev.next = node;
    node.next = curr;
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
  }
}

function print(obj) {
  console.log(JSON.stringify(obj));
}

const ll = new LinkedList();

//print(ll)
ll.add(1); // BigO(1)
// print(ll)
ll.add(2);
ll.add(3);
ll.add(4); // BigO(n)
//  print(ll)
ll.add_AtBeigning(0); // BigO(1)
ll.add_AtBeigning(-1); // BigO(1)
ll.add_AtPosition(2, "Utkarsh");

ll.pop();
print(ll);
