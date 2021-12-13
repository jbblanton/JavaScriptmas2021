// ** 24 days of JavaScriptmas from Scrimba **

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

const btn = document.getElementById("btn");
let food = document.getElementById("food");
const form = document.getElementById("form");
form.addEventListener("submit", planMeal);

function planMeal(event) {
  event.preventDefault();
  let meal = "";

  let guests = document.forms["menu-planner"]["guests"].value;
  let veggie = document.forms["menu-planner"]["vegetarian"].checked;
  let gluten = document.forms["menu-planner"]["gluten"].checked;

  console.log(guests, veggie, gluten);
  let large = false;

  if (guests > 6) {
    large = true;
  }

  if (veggie) {
    if (gluten) {
      if (large) {
        meal = choose(meals["large"]["gluten-veg"]);
      } else {
        meal = choose(meals["small"]["gluten-veg"]);
      }
    } else {
      if (large) {
        meal = choose(meals["large"]["vegetarian"]);
      } else {
        meal = choose(meals["small"]["vegetarian"]);
      }
    }
  } else if (gluten) {
    if (large) {
      meal = choose(meals["large"]["gluten"]);
    } else {
      meal = choose(meals["small"]["gluten"]);
    }
  } else {
    if (large) {
      meal = choose(meals["large"]["meat"]);
    } else {
      meal = choose(meals["small"]["meat"]);
    }
  }

  food.innerText = meal;
}

function choose(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const meals = {
  large: {
    vegetarian: ["Spinach & Mushroom Lasagna", "Enchiladas"],
    gluten: ["Green Chili Chicken Soup"],
    meat: ["Goose", "Spagetti & Meatballs"],
    "meat-gluten": ["Chicken & (Falafel!) Waffles"],
    "gluten-veg": ["Stuffed Peppers"],
  },
  small: {
    vegetarian: ["Nut Roast", "Stuffed Acorn Squash", "Christmas Curry"],
    gluten: ["Spicy Coconut Shrimp with Quinoa"],
    meat: ["Roast Chicken", "Pork Chops"],
    "meat-gluten": [
      "Salmon Poke Bowls",
      "Pancetta & Mushroom-Stuffed Chicken Breast",
    ],
    "gluten-veg": ["Wild Rice & Butternut Squash Salad"],
  },
};
