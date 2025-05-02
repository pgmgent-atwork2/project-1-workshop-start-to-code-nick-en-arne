 function updateUI() {
    const $player1Score = document.getElementById("player1");
    const $player2Score = document.getElementById("player2");
    const $currentPlayerDisplay = document.getElementById("current-player");
  
    $player1Score.textContent = `Score: ${scores.player1}`;
    $player2Score.textContent = `Score: ${scores.player2}`;
    $currentPlayerDisplay.textContent = `Player ${currentPlayer}'s turn`;
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

  export default function shuffle() {
    const $memoryCards = Array.from(document.querySelectorAll(".listItems"));
  
    const shuffledCards = $memoryCards.sort(() => Math.random() - 0.5);
    const $cardsContainer = document.querySelector(".cards");
    $cardsContainer.innerHTML = "";
    shuffledCards.forEach((card) => {
      $cardsContainer.appendChild(card);
    });
  }
  
