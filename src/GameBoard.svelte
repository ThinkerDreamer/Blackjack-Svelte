<script>
    let cards = [1, 2, 3];
    $: sum = cards.reduce(function (a, b) {
        return a + b;
    });
</script>

<p>{cards}</p>
<p>{sum}</p>
