<script>
  import { currentBet } from "./store";
  import HitButton from "./HitButton.svelte";

  $: playerCards = [];
  $: playerSum = playerCards.reduce((a, b) => a + b, 0);
  $: playersTurn = true;

  function checkForWinner() {
    playersTurn = playersTurn;
  }
</script>

<p class="small">Current bet: ${$currentBet}</p>
<p>Cards: {playerCards}</p>
<p>Sum: {playerSum}</p>

{#if $playersTurn}
  <HitButton />
{/if}

<style>
  .small {
    font-size: 50%;
  }
</style>
