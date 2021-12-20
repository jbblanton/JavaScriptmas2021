// ** 24 days of JavaScriptmas from Scrimba **

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

const btn = document.getElementById("btn");
btn.addEventListener("click", findYum);

const foodDiv = document.getElementById("foodHolder");

//Specific URL to get a random dessert image:
const request = new Request(
    "https://foodish-api.herokuapp.com/api/images/dessert"
);

function findYum() {
    let foodPic;

    if (!document.querySelector("img")) {
        foodPic = document.createElement("img");
        foodPic.id = "image";
        foodDiv.appendChild(foodPic);
    } else {
        foodPic = document.getElementById("image");
    }

    return fetch(request)
        .then((response) => response.json())
        .then((data) => {
            let dessert = data.image;
            foodPic.src = dessert;
        })
        .catch((error) => console.log(error));
}
