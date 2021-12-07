// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Add christmassify class to greeting.
//- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  if (christmassifierBtn.innerText == "Christmassify") {
    greeting.className = "christmassified";
    body.className = "christmas";
    christmassifierBtn.innerText = "De-christmassify";
    setTimeout(christmassifyName, 12000);
  } else {
    greeting.className = "no-mas-christmas";
    body.className = "no-mas-christmas";
    christmassifierBtn.innerText = "Christmassify";
  }
}
