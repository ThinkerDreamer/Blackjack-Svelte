<script>
    import { currentBet } from "./store";

    $: playerCards = [];
    $: playerSum = playerCards.reduce((a, b) => a + b, 0);

    function randomCard() {
        let card;
        let randomNumber = Math.floor(Math.random() * 13) + 1;
        if (randomNumber > 10) {
            card = 10;
        } else if (randomNumber === 1) {
            card = 11;
        } else {
            card = randomNumber;
        }
        playerCards.push(card);
        playerCards = playerCards;
    }
    console.log($currentBet);
</script>

<p class="small">Current bet: ${$currentBet}</p>
<p>Cards: {playerCards}</p>
<p>Sum: {playerSum}</p>
<button on:click={randomCard}>Get a card</button>

<style>
    .small {
        font-size: 50%;
    }
</style>
