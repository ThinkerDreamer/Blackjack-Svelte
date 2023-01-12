<script>
  import { currentMsg } from "./store.js";
  import { giveCardPlayer, handleDealerWins } from "./utils";
  import { playerSum } from "./store";

  function handleHit() {
    giveCardPlayer();
    checkForBust();
    checkFor21();
  }

  function checkFor21() {
    if ($playerSum === 21) {
      currentMsg.set("You got 21! You win! Play again?");
      handlePlayerWins();
    }
  }
  function checkForBust() {
    if ($playerSum > 21) {
      currentMsg.set(
        "You got " + $playerSum + "<br>and busted!<br>Dealer wins! Play again?"
      );
      handleDealerWins();
    }
  }
</script>

<button on:click={handleHit}>Hit</button>
