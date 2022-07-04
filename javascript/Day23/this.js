var student = {
  name: "Utkarsh",
  getName: function () {
    console.log(this);
    return this.name;
  },
  parent: {
    name: "Gandhi",
    getName: function () {
      console.log(this);
      return this.name;
    },
  },
};

console.log(student.parent.getName());

let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

console.log(counter.next(), counter);
console.log(counter.next(), counter);

function show() {
  console.log(this === window);
}

show();

var window = {
  show: function () {
    console.log(this === window);
  },
};

window.show();

let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

let getBrand = car.getBrand;

console.log(getBrand());

// Call()
// Apply()
// Bind()

var number = 10;

function getNumber() {
  var number = 20;

  console.log(number); //20
  console.log(this.number); //10
}

getNumber();

//Javascript Engine

/*window:{
     number:10,
     getNumber:function (){
     
     
     var number  = 20;
     console.log(number)
     
     console.log(this.number)
     },
      
     
},




*/

/*Running Phase

window.getNumber()
  
console.log(number)
*/

function getNumber() {
  var number = 20;
  console.log(number); //20
  console.log(this.number); //undefined
}

getNumber();
