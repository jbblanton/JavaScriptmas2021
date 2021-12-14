// Task:
// - Write a function to duplicate the elf when the button is clicked.

// Stretch goals:
// Limit the number of elves to 6 per row. */
// Make sure that the elves stay in the elf hangout zone, no matter how many there are. */

// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.

let elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const elfZone = document.getElementById("elf-zone");

btn.addEventListener("click", duplicateElf);

const elfOptions = ["🧝‍♀️", "🧝‍♂️", "🧝🏼‍♀️", "🧝🏼‍♂️", "🧝🏽‍♀️", "🧝🏽‍♂️", "🧝🏾‍♀️", "🧝🏾‍♂️"];
let width = 1;
let rows = 1;
let totalElves = 1;

function duplicateElf() {
    let index = Math.floor(Math.random() * elfOptions.length);

    if (totalElves == 100) {
        alert("We're full!! No more!!");
        return;
    }
    if (width < 6) {
        let extraElf = document.createElement("span");
        extraElf.innerText = elfOptions[index];
        let workingDiv = elfZone.lastElementChild;
        workingDiv.appendChild(extraElf);
        width += 1;
        totalElves += 1;
    } else {
        let moreElves = document.createElement("div");
        let rowId = "elf-" + rows.toString();
        moreElves.setAttribute("id", rowId);
        moreElves.className = "elf";
        let extraElf = document.createElement("span");
        extraElf.innerText = elfOptions[index];
        moreElves.appendChild(extraElf);
        elfZone.appendChild(moreElves);
        width = 1;
        rows += 1;
        totalElves += 1;
    }
}
