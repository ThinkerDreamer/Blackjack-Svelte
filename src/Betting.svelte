<script>
    let message = "Choose your bet";
    $: betText = "Default bet: $25";

    function setNewBet() {
        betText = "Current bet: $" + this.value;
    }
</script>

<p>{message}</p>
<div class="betting-els">
    <p>{betText}</p>
    <input type="range" id="bet-slider" on:mousemove|self={setNewBet} />
</div>

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
