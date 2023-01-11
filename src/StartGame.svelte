<script>
    import { gameRunning, playerCards } from "./store.js";
    import { giveCardPlayer } from "./utils";

    function handleStartBtn() {
        gameRunning.set(true);
        playerCards.set([]);
        console.log("Reset playerCards.");
        giveCardPlayer();
        giveCardPlayer();
        console.log("Player Cards", $playerCards);
    }
</script>

<button on:click={handleStartBtn} id="newGameBtn">Start a new game</button>
