<script>
  import {
    gameRunning,
    playerMoney,
    currentMsg,
    showCardView,
  } from "./store.js";

  import Title from "./Title.svelte";
  import Message from "./Message.svelte";
  import GameBoard from "./GameBoard.svelte";
  import StartGame from "./StartGame.svelte";
  import Scoreboard from "./Scoreboard.svelte";
  import CardView from "./CardView.svelte";

  $playerMoney = $playerMoney;

  //TODO: ✅ 1) when natural 21, prize is added twice
  //      ✅  2) handle negative money
  //      ✅  3) cards are dealt before bets are taken, so you can get 21 without betting
  //      ✅  4) When you get 21 via HitButton, there are two 🎉 screens: one with CardView small, and one with no CardView
  //  feature 5) keep track of highest money achieved
</script>

<svelte:head>
  <title>Blackjack in Svelte</title>
</svelte:head>

<Title />

{#if !$gameRunning}
  <Message message={$currentMsg ? $currentMsg : "Want to play a round?"} />
  {#if $showCardView}
    <CardView --prop-size={"0.6rem"} />
  {/if}
  <StartGame />
{/if}

{#if $gameRunning}
  <GameBoard />
{/if}

<Scoreboard money={$playerMoney} />

<style>
  :root {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", Arial,
      sans-serif;
    background-image: url("../blackjack-table.jpg");
    background-size: cover;
    font-weight: bold;
    color: white;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    font-size: 40px;
  }
  :global(p) {
    margin: 0.5rem auto;
    color: white;
  }

  :global(button) {
    background-color: goldenrod;
    border: 1px solid gold;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-size: 0.5rem;
    text-align: center;
    touch-action: manipulation;
    max-width: 90%;
    margin: 0 auto 0.1em;
    padding: 0.25rem 0.5rem;
    font-weight: bold;
    width: fit-content;
    min-width: 5em;
  }

  :global(button:hover) {
    box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset,
      rgba(0, 0, 0, 0.6) 0 1px 3px;
    background-color: gold;
    border-color: goldenrod;
    color: black;
    text-decoration: none;
  }

  :global(button:active) {
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 4px inset,
      rgba(0, 0, 0, 0.4) 0 1px 1px;
  }
</style>
