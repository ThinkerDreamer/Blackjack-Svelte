<script>
	import Title from "./Title.svelte";
	import Message from "./Message.svelte";
	import Betting from "./Betting.svelte";
	import GameBoard from "./GameBoard.svelte";

	let gameRunning = true;
	let bettingTime = false;
</script>

<Title />
<Message />
{#if bettingTime}
	<Betting />
{/if}
{#if gameRunning}
	<GameBoard />
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
</style>
