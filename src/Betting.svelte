<script>
    import {
        bettingTime,
        playerMoney,
        currentBet,
        gameRunning,
        playersTurn,
    } from "./store";
    import { giveCardPlayer } from "./utils";

    import Message from "./Message.svelte";

    let message = "Choose your bet";
    $: betText = "Current bet: $" + $currentBet;

    function setBet() {
        giveCardPlayer();
        giveCardPlayer();
        bettingTime.set(false);
        gameRunning.set(true);
        playerMoney.set($playerMoney - $currentBet);
        playersTurn.set(true);
    }
</script>

<Message {message} />
<p>{betText}</p>
<input
    type="range"
    id="bet-slider"
    max={$playerMoney}
    min="5"
    step="5"
    bind:value={$currentBet}
/>
<button on:click={setBet}>Save bet</button>

<style>
    #bet-slider {
        width: 50%;
        height: 15px;
        background: #d3d3d3;
        outline: none;
        padding: 0;
        margin: 2px;
        border: none;
    }

    #bet-slider::-webkit-slider-thumb {
        appearance: none;
        width: 25px;
        height: 25px;
        background: #04aa6d;
        cursor: pointer;
    }

    #bet-slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #04aa6d;
        cursor: pointer;
    }
</style>
