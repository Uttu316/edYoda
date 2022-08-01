$(function () {
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
});

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
      localStorage.setItem("username", credentials.username);
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

function onQuizPage() {
  const correctAnswers = {};
  const givenAnswers = {};
  document.title = localStorage.getItem("username") + " - Quiz App";
  /*

    Step 1: To create a Static Layout

    Step:2: To make a get api call for getting questions from the responses.

    Step 3: Create a dynamic List  of questions;

    Step 3: Convert below template to dom element 

    const {question,id,options} = question_details;
        `<div class="question-box" data-id={id}>
              <p class="question">Q.${index+1} ${question}</p>
              <div class="options">
               
              ${  

                let allOptions = ''
                
                options.foEach((each_option,index)=>{
                     
                 const option =  `<div class="option">
                  <input type="radio" id="question-${index+1}" />
                  <label for="question-${index+1}">${each_option}</label>
                </div>`
                allOptions+=option;

                allOptions
              
              }

                
              }
                
              </div>
            </div>`


        Step 4: Append each question dom element into #quiz-form    


        Step 5: Step 4: Add onchange event on form 

        Step 6: Store you result in an object;

               const correctAnswers = {
                      1:3,
                      2:1,
                      3:3,
                      4:3,
                      5:2
                    }

              
            const givenAnswers = {
                      3:2,
                      1:4,
                      5:1,
                      2:1,
                      4:2
                    }
        
        
      Step 7:  Add click event on Submit Button:
                    Calculate you result from above two objects.
                        show the result in alert,console.

                        const result = calculateResult();
                        if(result!==-1){
                          const allQuestions = Object.keys(correctAnswers);
                            alert(`${result}/${allQuestions.length}`) // result to show
                        }
  */

  /*


  function calculateResult(){

    let result = 0
    const answerskeys = Object.keys(correctAnswers);
    const givenAnswerskeys = Object.keys(givenAnswers);

    if(answerskeys.length===givenAnswerskeys.length){
      
      answerskeys.forEach((i)=>{
        const isCorrect =   correctAnswers[i] === givenAnswers[i];
        if(isCorrect){
          result++;
        }
      })
      return result
    }else{
      alert("Please answer all questions")
      return -1
    }


  }



  */
}
