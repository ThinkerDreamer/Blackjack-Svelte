<script>
	import { gameRunning, bettingTime, playerMoney } from "./store.js";

	import Title from "./Title.svelte";
	import Message from "./Message.svelte";
	import Betting from "./Betting.svelte";
	import GameBoard from "./GameBoard.svelte";
	import StartGame from "./StartGame.svelte";
	import Scoreboard from "./Scoreboard.svelte";

	$: showMessage = true;
</script>

<svelte:head>
	<title>Blackjack in Svelte</title>
</svelte:head>

<Title />

{#if showMessage && !$gameRunning && !$bettingTime}
	<Message />
{/if}

{#if !$gameRunning && !$bettingTime}
	<StartGame />
{/if}

{#if $bettingTime}
	<Betting />
{/if}

{#if $gameRunning}
	<GameBoard />
	<Scoreboard />
{/if}

<style>
	:root {
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			Arial, sans-serif;
		background-image: url("../blackjack-table.jpg");
		/*             filter: blur(8px);
            -webkit-filter: blur(8px); */
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
</style>
