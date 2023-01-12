<script>
  import { currentMsg, playerSum, showCardView } from "./store.js";
  import { giveCardPlayer, handlePlayerWins, handleDealerWins } from "./utils";

  function handleHit() {
    giveCardPlayer();
    checkForBust();
    checkFor21();
  }

  function checkFor21() {
    if ($playerSum === 21) {
      showCardView.set(true);
      currentMsg.set("You got 21! You win! Play again?");
      handlePlayerWins();
    }
  }
  function checkForBust() {
    if ($playerSum > 21) {
      showCardView.set(true);
      currentMsg.set(
        "You got " + $playerSum + " and busted!<br>Dealer wins! Play again?"
      );
      handleDealerWins();
    }
  }
</script>

<button on:click={handleHit}>Hit</button>
