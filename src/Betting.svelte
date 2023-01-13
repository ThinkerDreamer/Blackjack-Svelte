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

    $: outOfChips = $playerMoney <= 0;
    $: message = outOfChips
        ? "You don't have enough money.<br>Need more?"
        : "Choose your bet";

    $: betText = "Current bet: $" + $currentBet;
    $: buttonText = outOfChips ? "Get more chips" : "Save bet";
    function handleBet() {
        if (!outOfChips) {
            giveCardPlayer();
            giveCardPlayer();
            playerMoney.set($playerMoney - $currentBet);
            bettingTime.set(false);
            gameRunning.set(true);
            playersTurn.set(true);
        } else {
            currentBet.set(25);
            playerMoney.set(200);
        }
    }
</script>

<Message {message} />
{#if !outOfChips}
    <p>{betText}</p>
    <input
        type="range"
        id="bet-slider"
        max={$playerMoney}
        min="5"
        step="5"
        bind:value={$currentBet}
    />
{/if}
<button on:click={handleBet}>{buttonText}</button>

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
