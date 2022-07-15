(function () {
  const btn = document.getElementById("add-usr-btn");

  btn.disabled = true; // to disable a btn;
  var array = [];

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

  //   form.addEventListener("keydown", (e) => {
  //     e.preventDefault();
  //     if (e.keyCode === 13 || e.key === "Enter") {
  //       const validationMessage = validate_userDetails(userDetails);
  //       const isValidated = typeof validationMessage === "boolean";
  //       if (isValidated) {
  //         onSubmitForm();
  //       }
  //     }
  //     return e;
  //   });
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
    console.log(array);

    const inputs = document.querySelectorAll("input,textarea");
    for (const each_input of inputs) {
      each_input.value = "";
    }
  }
})();

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

// function validateEmail(mail)
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
//   {
//     return (true)
//   }
//     return (false)
// }

/*
var i=1;
const interval = setInterval(function(){
  console.log(i+" utkarsh")
  i++;
},1000)

setTimeout(function(){
 clearInterval(interval)
},3000)*/

/*
const arr = [{
    name:'Utkarsh',
    isPassed:true
  },{
    name:'Abhay',
    isPassed:false
  },{
    name:'Akshay',
    isPassed:true
  },{
    name:'Amit',
    isPassed:false
  },{
    name:'Shubham',
    isPassed:true
  },]
  
  
  const pssedStudents = arr.filter(function(each_item){
    return each_item.isPassed;
  })
  console.log(pssedStudents)

  */
