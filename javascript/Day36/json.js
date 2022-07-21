const obj = {
  name: "Utkarsh",
  age: 23,
};

// console.log(obj.toString())

const jsonObj = JSON.stringify(obj);

const parsedObj = JSON.parse(jsonObj);

console.log(parsedObj);

// can not pass any key with undefined valuue or function as value.
