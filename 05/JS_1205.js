// ** 24 days of JavaScriptmas from Scrimba **

const greetingDisplay = document.getElementById("greeting-display");
const btn = document.getElementById("btn");
const bauble = document.getElementById("bauble");
btn.addEventListener("click", writeGreeting);

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.

function writeGreeting() {
  let num = getRandomInt();
  let phrase = greetings[num];
  greetingDisplay.innerText = phrase;
}

function getRandomInt(max = 22) {
  return Math.floor(Math.random() * max);
}

const greetings = {
  0: "A most merry Christmas season!",
  1: "Sending you merry Christmas wishes!",
  2: "New Year? Yes please! Here's to better times ahead for us all! Wishing you a very happy Christmas and a safe and healthy 2022.",
  3: "From our bubble to yours, have a very Merry Christmas and a happy holiday season!",
  4: "Merry Christmas! Hope the New Year is full of hope for better days ahead.",
  5: "May the magic of the Christmas season fill your home with joy and peace.",
  6: "May this Christmas be a time for you to rest and recover, and to reflect on all that you have achieved.",
  7: "Merry Christmas! We might be separated today, but we are still raising a glass to your good health and happiness from afar.",
  8: "The gift of love. The gift of peace. The gift of happiness. May all these be yours at Christmas.",
  9: "May the peace and blessings of Christmas be yours; And may the coming year be filled with happiness.",
  10: "May the Christmas season fill your home with joy, your heart with love, and your life with laughter.",
  11: "May all the sweet magic of Christmas conspire to gladden your heart and fill every desire.",
  12: "May this Christmas end the present year on a cheerful note and make way for a fresh and bright New Year!",
  13: "May the good times and treasures of the present become the golden memories of tomorrow. Wishing you lots of love, joy and happiness this Christmas!",
  14: "May your Christmas sparkle with moments of love, laughter and goodwill, And may the year ahead be full of contentment and joy. Have a Merry Christmas.",
  15: "May the joy and festivities continue to radiate in your lives, long after Christmas is gone. Merry Christmas! Happy New Year!",
  16: "May the peace and joy of Christmas live in your heart all year long.",
  17: "Christmas Greetings! With many good wishes for Christmas and the coming year.",
  18: "May the blessings of peace, good will, and happiness be with you at Christmas and always.",
  19: "Merry Christmas and best wishes for a Happy New Year.",
  20: "May the blessings of Christmas be with you today and always.",
  21: "May the peace and joy of Christmas be with you today and throughout the New Year.",
  22: "A wish for peace and happiness at Christmas and throughout the New Year.",
};
