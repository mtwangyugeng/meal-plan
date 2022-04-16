<script>
import { currTab } from "$src/stores/Tab";
import Ingredients from "./Ingredients/Ingredients.svelte";
import Recipes from "./Recipes/Recipes.svelte";

</script>

<div class="ItemsContainer">
    {#if $currTab == "Ingredients"}
        <Ingredients />
    {:else if $currTab == "Recipes"}
        <Recipes />
    {/if}
</div>


<style>
    .ItemsContainer {
        /* border: 1px solid brown; */
        background-color: rgb(238, 200, 144);
        border-radius: 10px;
        margin: 10px;
    }
</style>