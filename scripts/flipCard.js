export default function flipcard() {
  const $memoryCards = document.querySelectorAll(".memory-cards");
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  $memoryCards.forEach((memoryCard) => {
    memoryCard.addEventListener("click", function () {
      if (lockBoard) return;
      if (this === firstCard) return;

      const front = this.querySelector(".front");
      const back = this.querySelector(".back");

      if (!front.classList.contains("hidden")) return;

      front.classList.remove("hidden");
      back.classList.add("hidden");

      if (!firstCard) {
        firstCard = this;
        return;
      }

      secondCard = this;
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
      firstCard.querySelector(".front").classList.add("hidden");
      firstCard.querySelector(".back").classList.remove("hidden");
      secondCard.querySelector(".front").classList.add("hidden");
      secondCard.querySelector(".back").classList.remove("hidden");
      resetBoard();
      lockBoard = false;
    }, 2000);
  }

  function resetBoard() {
    firstCard = null;
    secondCard = null;
  }
}
