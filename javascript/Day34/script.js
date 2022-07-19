(function () {
  const allUsers = localStorage.getItem("users") || [];
  const parsedUsers = JSON.parse(allUsers);

  generateList(parsedUsers);

  const btn = document.getElementById("add-usr-btn");

  btn.disabled = true; // to disable a btn;
  var array = parsedUsers;

  let userDetails = {
    name: "",
    email: "",
    password: "",
    about: "",
    phone: "",
  };

  const form = document.getElementById("usr-form");

  form.addEventListener("change", (e) => {
    const { name, value } = e.target; // destruct;

    userDetails = { ...userDetails, [name]: value.trim() }; // sread operator

    const validationMessage = validate_userDetails(userDetails);
    const isValidated = typeof validationMessage === "boolean";

    if (!isValidated) {
      const error = document.getElementById("error-message");
      error.classList.replace("d-none", "d-block");
      error.innerHTML = validationMessage;
      btn.disabled = true;
    } else {
      const error = document.getElementById("error-message");
      error.classList.replace("d-block", "d-none");
      error.innerHTML = "";
      btn.disabled = false;
    }
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const validationMessage = validate_userDetails(userDetails);
    const isValidated = typeof validationMessage === "boolean";
    if (isValidated) {
      onSubmitForm();
    }
  });

  function onSubmitForm() {
    array.push(userDetails);

    addCardinList(userDetails);

    store_userDetail(array);

    const inputs = document.querySelectorAll("input,textarea");
    for (const each_input of inputs) {
      each_input.value = "";
    }
  }
})();

function generateList(list = []) {
  list.forEach((user) => {
    addCardinList(user);
  });
}

function validate_userDetails(user) {
  const { name, email, password, phone } = user;
  if (name == "") {
    return "Name can not be empty";
  } else if (email == "" || !email.includes("@") || !email.includes(".")) {
    return "Email is not valid";
  } else if (phone == "" || phone.length != 10) {
    return "Phone is not valid";
  } else if (password == "" || !(password.length > 6)) {
    return "Password should more than 6 character";
  }
  return true;
}

function store_userDetail(user_array) {
  if (typeof user_array === "object") {
    const stringArray = JSON.stringify(user_array);
    localStorage.setItem("users", stringArray);
  }
}
function create_userCard(user) {
  const article = document.createElement("article");

  const nameP = document.createElement("p");
  const label = document.createElement("span");
  const value = document.createElement("span");

  label.innerHTML = "Name: ";
  value.innerHTML = user.name;

  nameP.append(label);
  nameP.append(value);

  const numberP = document.createElement("p");
  const nlabel = document.createElement("span");
  const nvalue = document.createElement("span");

  nlabel.innerHTML = "Mobile: ";
  nvalue.innerHTML = user.phone;

  numberP.append(nlabel);
  numberP.append(nvalue);

  article.append(nameP);
  article.append(numberP);
  return article;
}
function addCardinList(user) {
  const userCard = create_userCard(user);
  const listofUsers = document.getElementById("user-cards");
  listofUsers.append(userCard);
}

{
  /* <article>
  <p>
    <span>Name</span>
    <span>Utkarsh</span>
  </p>
  <p>
    <span>Mobile</span>
    <span>242442324</span>
  </p>
</article>; */
}

// const store_userDetail =(...args)=>{

// }
