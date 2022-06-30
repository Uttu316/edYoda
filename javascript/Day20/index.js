// Falsy values
"";
0;
undefined;
null;
false;

// My Car

// {
//     owner:'Utkarsh',
//     model:'Santro',
//     year:2022,
//     mielage:20,
//     state:"Uttar Pradesh",
//     country:'India'

// }

// My result

// {
//     math:20,
//     science:30,
//     gk:80,
//     computer:100,
// }

var result = {
  math: 20,
  science: 30,
  gk: 80,
  computer: 100,
  isPassed: false,
};

var student = {
  name: "Utkarsh", // property
  class: "B.tech",
  age: 23,
  isVaccinated: true,
  subjects: ["CSE", "Math", "English"],
  bloodGroup: "B+",
  family: {
    motherName: "Mother Name",
    fatherName: "",
    houseAddress: "",
  },
  getGrade: (value) => {
    return String(value); // Object method/function
  },
};

student.name; // this is how we access any property
student["name"]; // this is how we access any property
student.getGrade(); // this is how we call any object method

//Nested Property
//Student-->family-->motherName

// Method 1 to create Object
var obj1 = new Object();

obj1.name = "Utkarsh";
obj1.age = 23;
obj1.city = "Agra";

console.log(obj1.name);

var result = {
  math: 20,
  science: 30,
  gk: 80,
  computer: 100,
  isPassed: false,
};

var newObj = Object.create(result);

console.log(newObj);

var student = {
  name: "Utkarsh",
  class: "B.tech",
  age: 23,
  isVaccinated: true,
  subjects: ["CSE", "Math", "English"],
  bloodGroup: "B+",
  family: {
    motherName: "Mother Name",
    fatherName: "",
    houseAddress: "",
  },
};

console.log(student);

Object.freeze(student); // to freeze any object

student.age = 24;
delete student.bloodGroup;

console.log(student);

var allValues = Object.values(student);
var allKeys = Object.keys(student);

console.log(allKeys);
