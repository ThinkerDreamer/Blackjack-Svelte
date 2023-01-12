<script>
    import { playerCards, playerSum } from "./store";
</script>

<p>
    Cards:
    {#each $playerCards as card, index}
        {@html index == $playerCards.length - 1
            ? `<span>${card.name}</span>`
            : `<span>${card.name}, </span>`}
    {/each}
</p>
<p>
    Sum: {$playerSum}
</p>

<style>
    p {
        font-size: var(--prop-size, 1rem);
    }
</style>
