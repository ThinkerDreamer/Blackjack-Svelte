<script>
  function randomCard() {
    let card;
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
      card = 10;
    } else if (randomNumber === 1) {
      card = 11;
    } else {
      card = randomNumber;
    }
    playerCards.push(card);
    playerCards = playerCards;
  }
</script>

<button on:click={randomCard}>Get a card</button>
