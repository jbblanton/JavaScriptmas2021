//** 24 days of JavaScriptmas from Scrimba **//

// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.

const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
    const christmas = 25;

    let todayFull = new Date().toString();
    let today = new Date(todayFull).getDate();
    let remainingDays = christmas - today;

    countdownDisplay.innerText = remainingDays;
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

const solsticeCount = document.getElementById("solstice-countdown-display");

function renderSolsticeCountdown() {
    const winterSolstice = 21;

    let todayFull = new Date().toString();
    let today = new Date(todayFull).getDate();
    let remainingDays = winterSolstice - today;

    solsticeCount.innerText = remainingDays;
}

renderSolsticeCountdown();
