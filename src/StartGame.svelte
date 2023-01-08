<script>
    import { bettingTime, gameRunning } from "./store";

    function setBet() {
        console.log("Setting bettingTime to true");
        bettingTime.set(true);
        document.getElementById("newGameBtn").style.display = "none";
    }
</script>

<button on:click={setBet} id="newGameBtn">Start a new game</button>
