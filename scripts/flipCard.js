(function () {
    const $cards = document.querySelector('.cards');
    const $card = document.querySelectorAll('.card');
    const $back = document.querySelectorAll('.back');

    $cards.addEventListener("click", function (e) {
        $card.forEach((card, index) => {
            const back = $back[index];
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