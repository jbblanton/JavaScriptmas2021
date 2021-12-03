// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Write a function to fix the UI problems with this Christmas message
//    (make it Christmassy!)
// - Run the function when the Fix button is clicked.

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on
//    December 31st.

const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");
const body = document.getElementById("body");

btn.addEventListener("click", fix);

function fix() {
  const xmas = 25;

  let todayFull = new Date().toISOString();
  let today = new Date(todayFull).getDate();

  let thisYear = new Date(todayFull).getFullYear();
  if (thisYear != 2021) {
    greeting.innerText = "The holidays are over. Get back to work!";
    body.className = "work";
    btn.className = "work";
    return;
  }

  if (xmas - today > -1) {
    if (btn.innerText == "fix") {
      greeting.innerText = "🎅 Merry Christmas! 🎄";
      body.className = "right";
      btn.innerText = "break!";
    } else {
      greeting.innerText = "🎃 Merry Christmas! 👻";
      body.className = "wrong";
      btn.innerText = "fix";
    }
  } else {
    if (btn.innerText == "fix") {
      greeting.innerText = "🎆 HAPPY NEW YEAR!! 🎆";
      body.className = "right";
      btn.innerText = "break!";
    } else {
      greeting.innerText = "🎃 Spooky New Year! 👻";
      body.className = "wrong";
      btn.innerText = "fix";
    }
  }
}
