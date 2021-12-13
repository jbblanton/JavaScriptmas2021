// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled.const house = document.getElementById("house")

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.

const decorator = document.getElementById("decorator");
decorator.addEventListener("click", deckTheHalls);

function deckTheHalls() {
  const snowSpan = document.createElement("span");
  snowSpan.innerText = "⛄⛄";
  snowSpan.className = "snow-span";

  // Goal: Create an element above the house with the snowflakes spread out evenly, and/or add the animation of falling snow
  // const above = document.createElement("p")
  // above.innerText = '❄   ❄   ❄   ❄   ❄'
  // above.className = "above-house"

  if (decorator.checked == true) {
    house.innerText = "🎄 🏡  ";
    house.insertAdjacentElement("beforeend", snowSpan);
    // house.insertAdjacentElement('beforebegin', above)
  } else {
    house.innerText = "🏡";
    // above.innerText = ''
  }
}
