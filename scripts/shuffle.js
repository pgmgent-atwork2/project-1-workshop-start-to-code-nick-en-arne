export default function shuffle() {
  const $memoryCards = document.querySelectorAll(".memory-card");

  $memoryCards.forEach((memoryCard) => {
    const randomPos = Math.floor(Math.random() * $memoryCards.length);
    memoryCard.style.order = randomPos;
  });
}
