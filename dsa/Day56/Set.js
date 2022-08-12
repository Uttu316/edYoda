const s = new Set([4, 5, 6]);

s.add(1);
s.add(2);
s.add(3);

// s.delete(2)

// console.log(s.has(10))
// console.log(s)

const array = [...s];

console.log(array);
