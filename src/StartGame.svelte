<script>
    import { gameRunning, playerCards, dealerCards } from "./store.js";
    import { giveCardPlayer } from "./utils";

    function handleStartBtn() {
        gameRunning.set(true);
        playerCards.set([]);
        dealerCards.set([]);
        giveCardPlayer();
        giveCardPlayer();
    }
</script>

<button on:click={handleStartBtn} id="newGameBtn">Start a new game</button>
