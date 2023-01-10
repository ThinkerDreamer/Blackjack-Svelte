<script>
    import { dealerScore } from "./store";

    function calculateDealerScore() {
        dealerScore.set(17); // placeholder value for testing
        alert("You are staying and the dealer got " + $dealerScore);
    }
</script>

<button on:click={calculateDealerScore}>Stay</button>
