<script>
  import { playerCards } from "./store";

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
    // add the new card to the rest of the cards in the player's hand
    playerCards.update((currentCards) => {
      return [...currentCards, card];
    });
  }
</script>

<button on:click={randomCard}>Hit</button>
