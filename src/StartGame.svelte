<script>
    import {
        gameRunning,
        playerCards,
        dealerCards,
        showCardView,
    } from "./store.js";

    function handleStartBtn() {
        showCardView.set(false);
        gameRunning.set(true);
        playerCards.set([]);
        dealerCards.set([]);
    }
</script>

<button on:click={handleStartBtn} id="newGameBtn">Start a new game</button>
