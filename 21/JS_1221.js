// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Retrieve distance from previous destination from array of objects.
// - Calculate speed and round speed to an integer (whole number).
// - Display speed in speedometer paragraph.

// Stretch goals:
// - Calculate average overall speed.
// - Display location as North Pole on pageload.

const speedometer = document.getElementById("speedometer");
const select = document.getElementById("select");
const time = document.getElementById("time");
let currentLocation = "";
let timeTaken = 0;
let totalDistance = 0;

const btn = document.getElementById("calc-btn");
btn.addEventListener("click", calculateSpeed);

const speedPara = document.getElementById("speed-p");

let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892,
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111,
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324,
    },
    {
        name: "Sydney",
        distanceFromPrevDestination: 5458,
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531,
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729,
    },
];

function calculateSpeed() {
    let speed = 0;
    currentLocation = select.value;
    const currentDist = destination.filter(
        (place) => place.name === currentLocation
    );
    let dist = currentDist[0]["distanceFromPrevDestination"];

    if (time.value === "0") {
        speed = "⚡ INSTANT ⚡";
    } else {
        speed = Math.floor(dist / time.value) + "mph";
    }

    speedometer.className = "speed";
    speedometer.innerText = speed;

    timeTaken += parseInt(time.value);
    totalDistance += dist;
    updateAverage();
}

function updateAverage() {
    console.log(totalDistance, timeTaken);
    let avg = Math.floor(totalDistance / timeTaken);
    const avgP = document.getElementById("average");
    avgP.innerText = "Average speed: " + avg + " mph";
}
