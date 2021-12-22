// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Write a function to start the countdown timer on the button click
//      and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.

const btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let affirmation = document.getElementById("affirmation");
let timeout;
const contDiv = document.getElementById("container");
const header = document.getElementById("h1");

btn.addEventListener("click", startTimer);

function startTimer() {
    timeout = 15 * 60;
    console.log(timeout);
    let min = 14;
    let sec = 60;

    contDiv.className = "container animated";
    header.className = "animated";
    affirmation.innerText = "Pace your breath to the green rings";
    btn.className = "animated";
    timer.style.fontSize = "50px";

    let breather = setInterval(function () {
        timeout -= 1;
        if (timeout === -1) {
            clearInterval(breather);
            contDiv.className = "container";
            header.className = "";
            btn.className = "";
            affirmation.innerText = "Take a moment to yourself...";
            timer.style.fontSize = "100px";
            timer.innerText = "15:00";
        } else {
            if (sec > 0) {
                sec -= 1;
            } else {
                min -= 1;
                sec = 59;
            }
            if (sec < 10) {
                timer.innerText = min + ":0" + sec;
            } else {
                timer.innerText = min + ":" + sec;
            }
        }
    }, 1000);
}

// CSS Animation credit to: V. Martinez at https://vmar76.medium.com/using-css-animations-to-visualize-breathing-techniques-7a20ee0aed5a
