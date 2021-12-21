// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
btn.addEventListener("click", sortList);

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

function sortList() {
  for (let child of sorteesArr) {
    if (child.hasBeenGood) {
      let niceChild = document.createElement("li");
      niceChild.innerText = "🍬 " + child.name;
      niceList.appendChild(niceChild);
    } else {
      let naughtyChild = document.createElement("li");
      naughtyChild.innerText = "💩 " + child.name;
      naughtyList.appendChild(naughtyChild);
    }
  }
}

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

const form = document.getElementById("add-child");
form.addEventListener("submit", addChild);
const input = document.getElementById("child");

function addChild() {
  event.preventDefault();

  let name = document.forms["add-child"]["child"].value;
  let hasBeenGood = document.forms["add-child"]["goodness-selector"].value;

  if (hasBeenGood === "nice") {
    hasBeenGood = true;
  } else {
    hasBeenGood = false;
  }

  let newKid = { name: name, hasBeenGood: hasBeenGood };
  console.log(newKid);

  sorteesArr.push(newKid);
  input.value = "";
  niceList.innerHTML = "";
  naughtyList.innerHTML = "";
  sortList();
}
