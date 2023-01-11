<script>
  import {
    bettingTime,
    currentBet,
    playerCards,
    playerSum,
    playersTurn,
    currentMsg,
  } from "./store.js";

  import HitButton from "./HitButton.svelte";
  import StayButton from "./StayButton.svelte";
  import Message from "./Message.svelte";
  import Betting from "./Betting.svelte";
  import { handleReset } from "./utils";

  $: message = "";
  $: showResetButton = false;
  $bettingTime = true;

  // TODO: instead of reset button, incorporate this with StayButton logic
  // maybe use handlePlayerWin() or handleDealerWin() instead
  $: if ($playerSum >= 21 && $playersTurn) {
    $playersTurn = false;
    if ($playerSum > 21) {
      message = "You busted! Play again?";
    }
    if ($playerSum === 21) {
      message = "You got 21! You win!";
    }
    showResetButton = true;
  }
</script>

{#if $bettingTime}
  <Betting />
{:else}
  <p class="small">Current bet: ${$currentBet}</p>
  <p>
    Cards:
    {#each $playerCards as card (card.value)}
      <span>{card.name} </span>
    {/each}
  </p>
  <p>Sum: {$playerSum}</p>
{/if}

{#if $playersTurn}
  <HitButton />
  <StayButton />
{:else}
  <Message {message} />
{/if}

{#if showResetButton}
  <button
    on:click={() => {
      handleReset($currentMsg);
    }}>Reset</button
  >
{/if}

<style>
  .small {
    font-size: 50%;
  }
</style>
