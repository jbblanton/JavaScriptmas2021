// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.

const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");

playBtn.addEventListener("click", playMusic);
pauseBtn.addEventListener("click", pauseMusic);
stopBtn.addEventListener("click", stopMusic);

let bells = new Audio("bells.mp3");
let carol = new Audio("carol-melody.mp3");

const bell = document.getElementById("bell");

function playMusic() {
  bells.play();
  bell.className = "jingle-bell";
}

function pauseMusic() {
  bells.pause();
  bell.className = "bell";
}

function stopMusic() {
  bells.load();
  bell.className = "bell";
}
