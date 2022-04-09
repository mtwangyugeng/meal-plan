<script>
import { currTab } from "$src/stores/Tab";
import Ingredients from "./Ingredients/Ingredients.svelte";

</script>

<div class="ItemsContainer">
    {#if $currTab == "Ingredients"}
        <Ingredients />
    {:else if $currTab == "Recipes"}
        Recipes
    {/if}
</div>


<style>
    
</style>