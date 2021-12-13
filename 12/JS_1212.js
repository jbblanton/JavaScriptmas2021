// ** 24 days of JavaScriptmas from Scrimba **

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

const input1 = document.getElementById("input");
const input2 = document.getElementById("input2");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const form2 = document.getElementById("form2");
const removeBtn = document.getElementById("rmv-btn");

let guestList = document.getElementById("guest-list");
let guests = [
    "Partner",
    "Nice Relative 1",
    "Nice Relative 2",
    "Evil Relative",
    "Lonely Neighbour",
];
let numGuests = guests.length;
input2.setAttribute("max", numGuests);

form.addEventListener("submit", addGuest);
form2.addEventListener("submit", removeGuest);

function setList() {
    guestList.innerHTML = "";

    for (let guest of guests) {
        let person = document.createElement("li");
        person.innerText = guest;
        guestList.appendChild(person);
    }

    let numGuests = guests.length;
    input2.setAttribute("max", numGuests);
}

function addGuest() {
    event.preventDefault();

    let new_guest = document.forms["guest-list"]["name"].value;
    guests.push(new_guest);
    input.value = "";
    setList();
}

function removeGuest() {
    event.preventDefault();

    let remove = document.forms["remove"]["number"].value - 1;

    guests.splice(remove, 1);
    input2.value = "";
    setList();
}

setList();
