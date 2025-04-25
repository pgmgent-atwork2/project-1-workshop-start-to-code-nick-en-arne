(function () {
    const $memoryCards = document.querySelectorAll('.memory-cards');
    const $backs = document.querySelectorAll('.back');
    const $cards = document.querySelectorAll('.card');

    $memoryCards.forEach((memoryCard, index) => {
        memoryCard.addEventListener("click", function () {
            const back = $backs[index];
            const card = $cards[index];

            if (card.classList.contains("hidden")) {
                card.classList.remove("hidden");
                back.classList.add("hidden");
            } else {
                card.classList.add("hidden");
                back.classList.remove("hidden");
            }
        });
    });
})();


