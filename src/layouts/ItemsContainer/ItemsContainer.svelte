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
    
</style>