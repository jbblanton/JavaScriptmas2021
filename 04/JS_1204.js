// ** 24 days of JavaScriptmas from Scrimba **

const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");
const itemInput = document.getElementById("add-item");
const addBtn = document.getElementById("add-item-btn");
//itemInput.addEventListener("input", addToList)
addBtn.addEventListener("click", addToList);
console.log(items);

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.
function addToList() {
    console.log(itemInput.value);
}

function makeList(items) {
    for (let item of items) {
        console.log(item);
        let newDiv = document.createElement("div");
        newDiv.className = "checklist-item";

        let newCheck = document.createElement("input");
        newCheck.type = "checkbox";
        newCheck.name = item;
        newCheck.value = item;
        newDiv.append(newCheck);

        let newLabel = document.createElement("label");
        newLabel.innerHTML = item;
        newLabel.htmlFor = item;
        newDiv.append(newLabel);

        let description = document.createTextNode(item);
        console.log(newDiv);
        console.log(newCheck);
        console.log(newLabel);

        // newLabel.htmlFor = item
        newLabel.innerText = item;
        newLabel.append(newCheck);
        checklist.appendChild(newDiv);
    }
}

//makeList(items)
