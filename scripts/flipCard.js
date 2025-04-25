export default function flipcard() {
    const $memoryCards = document.querySelectorAll('.memory-cards');
    const $backs = document.querySelectorAll('.back');
    const $cards = document.querySelectorAll('.front');
    let flippedCards = [];

    $memoryCards.forEach((memoryCard, index) => {
        memoryCard.addEventListener("click", function () {
            const back = $backs[index];
            const card = $cards[index];

            if (!card.classList.contains("hidden") || flippedCards.length >= 2) {
                return;
            }
            card.classList.remove("hidden");
            back.classList.add("hidden");
            flippedCards.push(index);

            if (flippedCards.length === 2) {
                setTimeout(() => {

                    flippedCards.forEach(i => {
                        $cards[i].classList.add("hidden");
                        $backs[i].classList.remove("hidden");
                    });
                    flippedCards = [];
                }, 2000);
            }
        });
    });
}


