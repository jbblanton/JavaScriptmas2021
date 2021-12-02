// ** 24 days of JavaScriptmas from Scrimba **

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");
const hanukkahBtn = document.getElementById("hanukkah");
const nyeBtn = document.getElementById("nye");

christmasBtn.addEventListener("input", makeXmas);
snowBtn.addEventListener("input", makeSnow);
hanukkahBtn.addEventListener("input", makeHanukkah);
nyeBtn.addEventListener("input", makeNye);

function makeXmas() {
  greeting.innerText = "🎅 Merry Christmas!";
  body.className = "christmas";
}

function makeSnow() {
  greeting.innerText = "❄ Let it SNOW! ❄";
  body.className = "snow";
}

function makeHanukkah() {
  greeting.innerText = "🕯 Happy Hanukkah! 🕯";
  body.className = "hanukkah";
}

function makeNye() {
  greeting.innerText = "🎆 HAPPY NEW YEAR!! 🎆";
  body.className = "nye";
}
