<script>
import UpdateIcon from "$src/assets/UpdateIcon.svelte";

</script>

<button class="UpdateIngredient" on:click>
    <UpdateIcon />
</button>



<style>
    .UpdateIngredient:hover {
        opacity: 0.7;
    }
    .UpdateIngredient :global(svg){
        width: 30px;
        height: 30px;
    }
</style>