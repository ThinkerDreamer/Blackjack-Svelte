<script>
  import {
    bettingTime,
    currentBet,
    playerCards,
    playerSum,
    playersTurn,
  } from "./store.js";

  import HitButton from "./HitButton.svelte";
  import StayButton from "./StayButton.svelte";
  import Message from "./Message.svelte";
  import Betting from "./Betting.svelte";
  import { handlePlayerWins } from "./utils";

  $: message = "";
  $bettingTime = true;

  $: if ($playerSum === 21) {
    message = "You got 21! You win!";
    handlePlayerWins();
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

<style>
  .small {
    font-size: 50%;
  }
</style>
