const obj = {
  firstname: "Trishank",
  lastname: "Khatri",
  getName: function () {
    const name = this.firstname + " " + this.lastname;
    return name;
  },
};

const obj2 = {
  firstname: "Shadab",
  lastname: "Raza",
};

// const Name = obj.getName();

const getName = obj.getName.bind(obj2);

const rName = getName();

console.log(rName);
