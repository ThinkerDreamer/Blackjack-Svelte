<script>
  import { giveCardPlayer } from "./utils";
  import { playerCards, playerSum } from "./store";

  // async function handleHit() {
  function handleHit() {
    giveCardPlayer();
    //await tick();
    //$playerSum = $playerSum;
    $playerCards = $playerCards;
  }
</script>

<button on:click={handleHit}>Hit</button>
