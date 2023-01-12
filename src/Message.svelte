<script>
    export let message = "Want to play a round?";
</script>

<p>{@html message}</p>
<slot />

<style>
    p {
        font-style: italic;
    }
</style>
