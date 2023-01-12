<script>
    import {
        bettingTime,
        playerMoney,
        currentBet,
        gameRunning,
        playersTurn,
    } from "./store";

    import Message from "./Message.svelte";

    let message = "Choose your bet";
    $: choosingBet = true;
    $: betText = "Current bet: $" + $currentBet;

    function setBet() {
        choosingBet = false;
        bettingTime.set(false);
        gameRunning.set(true);
        playerMoney.set($playerMoney - $currentBet);
        playersTurn.set(true);
    }
</script>

<div class="betting-els">
    <Message {message} />
    <p class:small={!choosingBet}>{betText}</p>
    {#if choosingBet}
        <input
            type="range"
            id="bet-slider"
            max={$playerMoney}
            min="5"
            step="5"
            bind:value={$currentBet}
        />
        <button on:click={setBet}>Save bet</button>
    {/if}
</div>

<style>
    .small {
        font-size: 50%;
    }
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
