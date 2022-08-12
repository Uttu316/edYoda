class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }
  print() {
    if (this.head == null) {
      console.log(null);
      return null;
    }
    let values = [];
    let curr = this.head;

    while (curr.next != null) {
      values.push(curr.data);
      curr = curr.next;
    }
    values.push(curr.data);
    console.log(values.join("->"));
  }
}

function compare(firstL, secondL) {
  if (firstL.length !== secondL.length) {
    return 0;
  }

  if (firstL.head === null && secondL.head === null) {
    return 0;
  }

  let fCurr = firstL.head;
  let lCurr = secondL.head;

  while (fCurr.next != null && lCurr.next != null) {
    if (fCurr.data !== lCurr.data) {
      return 0;
    }
    fCurr = fCurr.next;
    lCurr = lCurr.next;
  }
  if (fCurr.data !== lCurr.data) {
    return 0;
  }

  return 1;
}
// O(n)
const l = new LinkedList();
const ll = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(5);
l.add(6);
l.add(7);

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(5);
ll.add(6);
ll.add(7);

l.print();
ll.print();
const isSame = compare(l, ll);
console.log(isSame);
