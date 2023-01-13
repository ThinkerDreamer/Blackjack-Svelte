<script>
  import {
    bettingTime,
    currentBet,
    playerSum,
    playersTurn,
    showCardView,
    currentMsg,
  } from "./store.js";

  import HitButton from "./HitButton.svelte";
  import StayButton from "./StayButton.svelte";
  import Betting from "./Betting.svelte";
  import { handlePlayerWins } from "./utils";
  import CardView from "./CardView.svelte";

  $bettingTime = true;

  $: if ($playerSum === 21) {
    currentMsg.set("You got 21! You win!");
    showCardView.set(true);
    handlePlayerWins();
  }
</script>

{#if $bettingTime}
  <Betting />
{:else}
  <p class="small">Current bet: ${$currentBet}</p>
  <CardView />
{/if}

{#if $playersTurn}
  <HitButton />
  <StayButton />
{/if}

{#if $showCardView}
  <CardView />
{/if}

<style>
  .small {
    font-size: 0.5rem;
  }
</style>
