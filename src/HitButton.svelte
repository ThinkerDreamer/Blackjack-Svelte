<script>
  import { giveCardPlayer } from "./utils";

  async function handleHit() {
    giveCardPlayer();
    await tick();
  }
</script>

<button on:click={handleHit}>Hit</button>
