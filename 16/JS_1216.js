// ** 24 days of JavaScriptmas from Scrimba **

// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.

const ageSelector = document.getElementById("age-selector");
const genreSelector = document.getElementById("genre-selector");
ageSelector.addEventListener("change", selectMovie);
genreSelector.addEventListener("change", selectMovie);

const btn = document.getElementById("btn");
btn.addEventListener("click", selectMovie);

const movieTitle = document.getElementById("movie-title");

const moviesArr = [
  {
    name: "Die Hard",
    age: "18+",
    genre: "Action",
    background: "url(die_hard.jpg)",
  },
  {
    name: "Love Actually",
    age: "18+",
    genre: "Romance",
    background: "url(love_actually.jpg)",
  },
  {
    name: "The Polar Express",
    age: "PG",
    genre: "Action",
    background: "url(polar_express.jpg)",
  },
  {
    name: "Shrek",
    age: "PG",
    genre: "Romance",
    background: "url(shrek.jpg)",
  },
];

function selectMovie() {
  let ageGroup = ageSelector.value;
  let genre = genreSelector.value;

  for (let movie of moviesArr) {
    if (movie.age === ageGroup && movie.genre === genre) {
      movieTitle.innerText = movie.name;
      document.getElementById("movie-display").style.backgroundImage =
        movie.background;
    }
  }
}

// All images sourced from imdb.com
