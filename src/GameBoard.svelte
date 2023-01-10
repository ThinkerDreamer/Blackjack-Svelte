<script>
  import { currentBet } from "./store";
  import HitButton from "./HitButton.svelte";
  import StayButton from "./StayButton.svelte";
  import FoldButton from "./FoldButton.svelte";

  $: playerCards = [];
  $: playerSum = playerCards.reduce((a, b) => a + b, 0);
  $: playersTurn = true;
  $: canHit = false;
  $: canStay = false;
  $: canFold = false;
</script>

<p class="small">Current bet: ${$currentBet}</p>
<p>Cards: {playerCards}</p>
<p>Sum: {playerSum}</p>

{#if $playersTurn}
  {#if $canHit}
    <HitButton />
  {/if}
  {#if $canStay}
    <StayButton />
  {/if}
  {#if $canFold}
    <FoldButton />
  {/if}
{/if}

<style>
  .small {
    font-size: 50%;
  }
</style>
