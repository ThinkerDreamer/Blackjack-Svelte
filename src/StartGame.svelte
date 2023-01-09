<script>
    import { bettingTime } from "./store";

    function handleStartBtn() {
        bettingTime.set(true);
    }
</script>

<button on:click={handleStartBtn} id="newGameBtn">Start a new game</button>
