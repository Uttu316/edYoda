var mObj = [
  { name: "Zoya", score: 98 },
  {
    name: "Alice",
    score: 99,
  },
  {
    name: "Ram",
    score: 98,
  },
  {
    name: "Ram",
    score: 52,
  },
  {
    name: "Johnathan",
    score: 90,
  },
];

function sortAccName(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1; //When value is < 0 then a will come before b
  } else if (nameA > nameB) {
    return 1; //When value is > 0 then a will come after b
  }
  // a must be equal to b
  return 0; //When value is 0 then there will be no change in sequence.
}

mObj.sort(sortAccName);

console.log(mObj);

var mObj = [
  { name: "Zoya", score: 98 },
  {
    name: "Alice",
    score: 99,
  },
  {
    name: "Ram",
    score: 98,
  },
  {
    name: "Ram",
    score: 52,
  },
  {
    name: "Johnathan",
    score: 90,
  },
];

function sortAccName(a, b) {
  return b.score - a.score;
}

mObj.sort(sortAccName);

console.log(mObj);
