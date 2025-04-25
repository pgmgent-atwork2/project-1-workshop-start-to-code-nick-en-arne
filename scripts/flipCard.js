export default function flipcard() {
    const $memoryCards = document.querySelectorAll('.memory-cards');
    const $backs = document.querySelectorAll('.back');
    const $cards = document.querySelectorAll('.front');
    let flippedCards = [];

  $memoryCards.forEach((memoryCard, index) => {
    memoryCard.addEventListener("click", function () {
      if (lockBoard) return;
      const back = $backs[index];
      const card = $cards[index];

      if (!card.classList.contains("hidden")) return;

      card.classList.remove("hidden");
      back.classList.add("hidden");

      if (!firstCard) {
        firstCard = card;
        return;
      }

      secondCard = card;
      checkForMatch();
    });
  });

  function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
      disableCards(); 
    } else {
      unflipCards();
    }
  }

  function disableCards() {

    setTimeout(() => {
      firstCard.classList.add("disabled");
      secondCard.classList.add("disabled");
      resetBoard();
    }, 1000);
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.add("hidden");
      secondCard.classList.add("hidden");
      resetBoard();
      lockBoard = false;
    }, 2000);
  }

  function resetBoard() {
    firstCard = null;
    secondCard = null;
  }
}
