document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('pexeso-board');
    const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];
    let flippedCards = [];
    let matchedCards = [];

    // Shuffle the images
    images.sort(() => Math.random() - 0.5); 

    // Create card elements and append them to the board
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('pexeso-row');

        for (let j = 0; j < 4; j++) {
            const index = i * 4 + j;
            const card = document.createElement('div');
            card.classList.add('pexeso-card');
            card.dataset.image = images[index];
            card.dataset.index = index;
            card.addEventListener('click', flipCard);

            const img = document.createElement('img');
            img.src = 'img/back.jpg'; // Blank image initially
            card.appendChild(img);

            row.appendChild(card);
        }

        board.appendChild(row);
    }

    // Function to handle card flipping
    function flipCard() {
        if (flippedCards.length < 2) {
            const selectedCard = this;
            const img = selectedCard.querySelector('img');
            img.src = selectedCard.dataset.image;

            flippedCards.push(selectedCard);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.image === card2.dataset.image) {
            matchedCards.push(card1, card2);
            if (matchedCards.length === images.length) {
                alert('ez');
            }
        } else {
            const img1 = card1.querySelector('img');
            const img2 = card2.querySelector('img');
            img1.src = 'img/back.jpg';
            img2.src = 'img/back.jpg';
        }
        flippedCards = [];
    }
});