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
                "Dealer got " + $dealerSum + ". You lose! Play again?"
            );
            handleDealerWins();
        } else if ($dealerSum > 21) {
            currentMsg.set(
                "Dealer busted with " + $dealerSum + "! You win! Play again?"
            );
            console.log(`playerMoney is: ${$playerMoney}`);
            handlePlayerWins();
        } else if ($playerSum > $dealerSum) {
            currentMsg.set(
                "You win! Dealer got " + $dealerSum + ". Play again?"
            );
            handlePlayerWins();
        } else if ($playerSum === $dealerSum) {
            currentMsg.set(
                "It's a draw! Dealer got " + $dealerSum + ". Play again?"
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
