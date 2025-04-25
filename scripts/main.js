import flipcard from "./flipCard.js";
import shuffle from "./shuffle.js";

shuffle()

flipcard();

document.getElementById("shuffleButton").addEventListener("click", () => {
    shuffle();
  });

