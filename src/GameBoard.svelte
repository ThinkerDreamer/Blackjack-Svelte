<script>
    let cards = [1, 2, 3];
    $: sum = cards.reduce((a, b) => (a + b));
</script>

<p>{cards}</p>
<p>{sum}</p>
