// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.

const inputs = document.querySelectorAll(".controls input");
const eyeColor = document.getElementById("color");
const noseColor = document.getElementById("color3");
const btnColor = document.getElementById("color2");

eyeColor.addEventListener("change", changeEyes);
noseColor.addEventListener("change", changeNose);
btnColor.addEventListener("change", changeButtons);

const hat = document.getElementById("hat-span");
const addHatBtn = document.getElementById("hat-btn");
addHatBtn.addEventListener("click", addHat);

function changeEyes() {
  let eye = document.getElementsByClassName("eye");
  eye[0].style.background = eyeColor.value;
  eye[1].style.background = eyeColor.value;
}

function changeNose() {
  let nose = document.getElementsByClassName("nose");
  nose[0].style.borderColor =
    "transparent transparent transparent " + noseColor.value;
}

function changeButtons() {
  let button = document.getElementsByClassName("button");
  button[0].style.background = btnColor.value;
  button[1].style.background = btnColor.value;
  button[2].style.background = btnColor.value;
}

function addHat() {
  hat.className = "";
}
