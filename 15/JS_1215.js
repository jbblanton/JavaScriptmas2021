// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Write a function to display the correct greeting when a language is selected.

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".

const languageSelector = document.getElementById("language-selector");
const greetingDisplay = document.getElementById("greeting-text");
languageSelector.addEventListener("change", translate);
const greetingDiv = document.getElementById("container");
const msgBox = document.getElementsByClassName("container");

const greetingsDict = {
    English: "Merry Christmas!",
    Spanish: "Feliz Navidad!",
    Ukrainian: "щасливого Різдва!",
    Welsh: "Nadolig Llawen!",
    Arabic: "عيد ميلاد مجيد",
    Swahili: "Krismasi Njema",
    Hawaiian: "mele Kalikimaka",
};

function translate() {
    let newGreeting = languageSelector.value;
    greetingDiv.classList.add("pre-animate");
    setTimeout(function () {
        greetingDiv.classList.remove("pre-animate");
        greetingDisplay.innerText = greetingsDict[newGreeting];
    }, 1000);
}
