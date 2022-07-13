function createList() {
  const newList = document.createElement("ul");
  const mainBox = document.querySelector("main .box");

  mainBox.appendChild(newList);
}

createList();

const listOfStudents = [
  {
    name: "Utkash",
    age: 23,
  },
  {
    name: "Manohar",
    age: 24,
  },
  {
    name: "Akshay",
    age: 20,
  },
  {
    name: "Arjun",
    age: 30,
  },
  {
    name: "Rushikesh",
    age: 32,
  },
];

var index = 0;

function addListItem() {
  if (index < listOfStudents.length) {
    const listItem = document.createElement("li");

    const text = document.createTextNode(
      `${listOfStudents[index].name}, ${listOfStudents[index].age}`
    );
    listItem.appendChild(text);

    const list = document.querySelector("main .box ul");

    list.appendChild(listItem);

    index++;
  }
}

const btn = document.querySelector("#add_student");

// btn.onclick
// btn.onmouseover

btn.addEventListener("click", (e) => {
  addListItem();
});

function removeElementById(id) {
  const element = document.getElementById(id);

  element.remove();
}

removeElementById("extra");

window.addEventListener("resize", (e) => {
  console.log(window.innerWidth);
});

const plusBtn = document.querySelector("#increase_size_btn");
const minusBtn = document.querySelector("#decrease_size_btn");

plusBtn.addEventListener("click", (e) => {
  onIncreaseSize();
});

minusBtn.addEventListener("click", (e) => {
  onDecreaseSize();
});

function onIncreaseSize() {
  const para = document.querySelector(".text");
  if (para.classList.contains("small")) {
    para.classList.replace("small", "large");
  } else {
    para.classList.add("large");
  }
}

function onDecreaseSize() {
  const para = document.querySelector(".text");
  if (para.classList.contains("large")) {
    para.classList.replace("large", "small");
  } else {
    para.classList.add("small");
  }
}

const firstName = document.getElementById("fname");

const lastname = document.getElementById("lname");
const form = document.querySelector("form");

// firstName.addEventListener("keydown", (e) => {
//   switch (e.keyCode) {
//     case 65:
//       moveUp();
//       break;
//     case 45:
//       jump();
//       break;
//   }
// });

// function jump() {}

// function moveUp() {}

let userDetails = {};

form.addEventListener("change", (e) => {
  userDetails[e.target.name] = e.target.value.trim();
});

firstName.addEventListener("focus", (e) => {
  firstName.style.outline = "1px solid yellow";
});
firstName.addEventListener("blur", (e) => {
  firstName.style.outline = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(userDetails);
});
