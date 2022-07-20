const obj = {
  name: "utkarsh",
  age: 55,
  abc: function () {
    console.log(this);
    console.log(this.name);
  },
};

const obj1 = {
  name: "Anil",
  age: 32,
  getAge: function () {
    console.log(this.age);
  },
};

// call
// apply
// bind

obj1.getAge.call(obj);
obj1.getAge.apply(obj);
const getName = obj.abc.bind(obj1);

getName();
