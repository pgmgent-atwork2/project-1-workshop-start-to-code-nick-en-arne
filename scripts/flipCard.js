export default function flipcard() {
  const $memoryCards = document.querySelectorAll(".memory-cards");
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let currentPlayer = 1;
  const scores = { player1: 0, player2: 0 };

  function updateUI() {
    const $player1Score = document.getElementById("player1");
    const $player2Score = document.getElementById("player2");
    const $currentPlayerDisplay = document.getElementById("current-player");
  
    $player1Score.textContent = `Score: ${scores.player1}`;
    $player2Score.textContent = `Score: ${scores.player2}`;
    $currentPlayerDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }

  function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
  
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
      scores[`player${currentPlayer}`] ++;
    } else {
      unflipCards();
      switchPlayer();
    }
    updateUI();
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
    }, 1000);
  }

  function resetBoard() {
    firstCard = null;
    secondCard = null;
  }
  updateUI();
}
