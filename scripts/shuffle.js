const $cards = document.querySelectorAll('.cards');

export default function shuffle() {
    $cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * $cards.length);
        card.style.order = randomPos;
    });
}