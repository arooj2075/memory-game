const emojis = ['🍎', '🍩', '🍇', '🍉', '🌸', '🍓', '🍍', '🥝'];
const cardsArray = [...emojis, ...emojis]; // duplicate for pairs
let flippedCards = [];
let matchedCards = 0;

const board = document.getElementById('game-board');

// Shuffle
cardsArray.sort(() => 0.5 - Math.random());

cardsArray.forEach((emoji) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;

  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
      card.classList.add('flipped');
      card.textContent = emoji;
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        checkMatch();
      }
    }
  });

  board.appendChild(card);
});

function checkMatch() {
  const [first, second] = flippedCards;

  if (first.dataset.emoji === second.dataset.emoji) {
    matchedCards += 2;
    flippedCards = [];

    if (matchedCards === cardsArray.length) {
      setTimeout(() => alert('🎉 You matched them all! Well done Arooj!'), 300);
    }
  } else {
    setTimeout(() => {
      first.classList.remove('flipped');
      second.classList.remove('flipped');
      first.textContent = '';
      second.textContent = '';
      flippedCards = [];
    }, 800);
  }
}
