// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.

const crew = document.getElementById("crew");
const btn = document.getElementById("btn");
btn.addEventListener("click", launch);

//slide-out-blurred-right

function launch() {
    let countdown = 4;

    let sendOff = setInterval(function () {
        countdown -= 1;
        if (countdown === -1) {
            clearInterval(sendOff);
            crew.className = "slide-out-blurred-right";
            setTimeout(function () {
                btn.innerText = "Merry Christmas!!!";
            }, 2000);
        } else {
            btn.innerText = countdown;
        }
    }, 1000);
}
