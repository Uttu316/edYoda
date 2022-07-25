(function () {
  const currentpage = location.pathname;
  const isIndex = currentpage.includes("index");
  const isQuiz = currentpage.includes("quiz");

  if (isIndex) {
    onindexPage();
  } else if (isQuiz) {
    onQuizPage();
  }
})();

function onindexPage() {
  const form = document.getElementById("login-form");

  let credentials = {};
  let isValidate = false;

  form?.addEventListener("input", onFormChange);
  form?.addEventListener("submit", onFormSubmit);

  function onFormChange(event) {
    const { name, value } = event.target;
    isValidate = validateForm(name, value.trim());
  }

  function validateForm(name, value) {
    const nameError = document.getElementById("name-error");
    const passError = document.getElementById("password-error");
    let isValid = false;
    if (name === "username") {
      if (!value) {
        isValid = false;
        nameError.innerHTML = "Please enter name";
        nameError.classList.replace("d-none", "d-block");
      } else if (value.length < 3) {
        isValid = false;
        nameError.innerHTML = "Name should be more than 3 characters";
        nameError.classList.replace("d-none", "d-block");
      } else {
        isValid = true;
        nameError.innerHTML = "";
        nameError.classList.replace("d-block", "d-none");
      }
    }
    if (name === "password") {
      if (!value) {
        isValid = false;
        passError.innerHTML = "Please enter password";
        passError.classList.replace("d-none", "d-block");
      } else if (value.length < 6) {
        isValid = false;
        passError.innerHTML = "Please enter correct password!";
        passError.classList.replace("d-none", "d-block");
      } else {
        isValid = true;
        passError.innerHTML = "";
        passError.classList.replace("d-block", "d-none");
      }
    }
    credentials = { ...credentials, [name]: value.trim() };

    if (!credentials.username || !credentials.password) {
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (isValidate) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", JSON.stringify(credentials));
      location.pathname = location.pathname.replace("index", "quiz"); // redirect to quiz.html

      resetForm();
    } else {
      console.warn("Enter correct credentials");
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("username", "");
    }
  }

  function resetForm() {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((i) => {
      i.value = "";
    });
  }
}

function onQuizPage() {}
