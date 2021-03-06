// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.

const meter = document.getElementById("meter");
const body = document.getElementById("body");
const container = document.getElementById("container");
const label = document.getElementById("label");
const newDiv = document.createElement("div");
const trees = document.createElement("p");
trees.innerText = "🎄";
newDiv.appendChild(trees);

let todayFull = new Date().toString();
let today = new Date(todayFull).getDate();

function fillMeter() {
    meter.setAttribute("low", "12");
    meter.setAttribute("high", "20");
    meter.setAttribute("optimum", "23");

    meter.value = today;

    if (meter.value <= "12") {
        container.className = "container not-yet";
    } else if (meter.value <= "19") {
        container.className = "container soon";
    } else if (meter.value >= "20") {
        container.className = "container now";
    }

    if (meter.value == "25") {
        setTimeout(celebrate, 5000);
    }
}

function celebrate() {
    label.innerText = "It's Christmas Day!!!";
    meter.className = "celebration";
    body.className = "celebrate";

    container.insertAdjacentElement("afterend", newDiv);
}

fillMeter();
