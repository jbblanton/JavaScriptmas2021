// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.

const signText = document.getElementById("sign");
const text = document.getElementById("text-input");
text.addEventListener("input", updateSign);

function updateSign() {
  let newText = text.value;
  if (newText.length > 20) {
    newText = newText.slice(0, 20);
  }

  signText.innerText = newText;
}

let colorRadio = document.querySelectorAll(
  'input[type=radio][name="text-color"]'
);

Array.prototype.forEach.call(colorRadio, function (radio) {
  radio.addEventListener("change", changeTextColor);
});

function changeTextColor(event) {
  console.log(this.value);
  signText.style.color = this.value;
}
