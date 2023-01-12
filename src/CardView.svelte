<script>
    import { playerCards, playerSum } from "./store";
</script>

<p>
    Cards:
    {#each $playerCards as card}
        <span>{card.name} </span>
    {/each}
</p>
<p>Sum: {$playerSum}</p>
