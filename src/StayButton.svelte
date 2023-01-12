<script>
    import { playerSum, dealerSum, currentMsg, playerMoney } from "./store.js";
    import {
        giveCardDealer,
        handlePlayerWins,
        handleDealerWins,
        handleDraw,
    } from "./utils";

    function calculateDealerScore() {
        dealerPlay();
        if ($dealerSum <= 21 && $playerSum < $dealerSum) {
            currentMsg.set(
                "You got " +
                    $playerSum +
                    ".<br>Dealer got " +
                    $dealerSum +
                    ".<br>You lose! Play again?"
            );
            handleDealerWins();
        } else if ($dealerSum > 21) {
            currentMsg.set(
                "You got " +
                    $playerSum +
                    ".<br>Dealer busted with " +
                    $dealerSum +
                    "!<br>You win! Play again?"
            );
            handlePlayerWins();
        } else if ($playerSum > $dealerSum) {
            currentMsg.set(
                "You got " +
                    $playerSum +
                    ".<br>Dealer got " +
                    $dealerSum +
                    ".<br>You win!<br>Play again?"
            );
            handlePlayerWins();
        } else if ($playerSum === $dealerSum) {
            currentMsg.set(
                "You got " +
                    $playerSum +
                    ".<br>It's a draw!<br>Dealer got " +
                    $dealerSum +
                    ", too.<br>Play again?"
            );
            handleDraw();
        }
    }

    function dealerPlay() {
        while ($dealerSum < 21) {
            if ($dealerSum >= 17) {
                return $dealerSum;
            } else {
                giveCardDealer();
            }
        }
    }
</script>

<button on:click={calculateDealerScore}>Stay</button>
