export default function shuffle() {
  const $memoryCards = Array.from(document.querySelectorAll(".listItems"));

  const shuffledCards = $memoryCards.sort(() => Math.random() - 0.5);
  const $cardsContainer = document.querySelector(".cards");
  $cardsContainer.innerHTML = "";
  shuffledCards.forEach((card) => {
    $cardsContainer.appendChild(card);
  });
}
