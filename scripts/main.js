import flipcard from "./flipCard.js";
import shuffle from "./shuffle.js";

flipcard();

document.getElementById("shuffleButton").addEventListener("click", () => {
    shuffle();
  });
