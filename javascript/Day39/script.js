const body = document.querySelector("body");
body.addEventListener("mousemove", getCursorPosition);

function getCursorPosition(event) {
  handleEyes(event);
  handleMouth(event);
}

function handleEyes(event) {
  const eyeballs = document.querySelectorAll(".eye-ball");
  eyeballs.forEach(function (eye) {
    let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    var x = event.clientX;
    var y = event.clientY;
    let posX = x - eyeX;
    let posY = y - eyeY;

    if (posX > 0) {
      eye.style.left = `${Math.min(8, posX)}px`;
    }
    if (posX <= 0) {
      eye.style.left = `${Math.max(-8, posX)}px`;
    }
    if (posY > 0) {
      eye.style.top = `${Math.min(8, posY)}px`;
    }
    if (posY <= 0) {
      eye.style.top = `${Math.max(-8, posY)}px`;
    }
  });
}

function handleMouth(event) {
  const mouth = document.querySelector(".mouth");
  let mouthY = mouth.getBoundingClientRect().top + mouth.clientHeight / 2;
  let posY = event.clientY - mouthY;
  if (posY > 15) {
    mouth.style.borderBottomColor = "red";
    mouth.style.borderTopColor = "transparent";
  } else {
    mouth.style.borderTopColor = "orange";
    mouth.style.borderBottomColor = "transparent";
  }
}
