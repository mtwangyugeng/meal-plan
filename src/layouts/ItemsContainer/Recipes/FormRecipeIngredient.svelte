<script>
    import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
    import { ingredients } from "$src/stores/Ingredients";
    import IngredientCard from "../Ingredients/IngredientCard.svelte";


    let seletedIngredient = null;

    let amount = null;

    export let close;
    let loading = false;
    
    
    
    </script>
    
    
    <div class="RecipeIngredient">
        <IngredientCard {...seletedIngredient}/>
        <div>
            x {amount ? amount : "-.-"}
        </div>
    </div>
    
        <form>
            <select name="ingredient" id="ingredient" bind:value={seletedIngredient} required>
                {#each Object.keys($ingredients) as ingredient_id (ingredient_id)}
                    <option value={$ingredients[ingredient_id]}>{ingredient_id}: {$ingredients[ingredient_id].name}</option>
                {/each}
              </select>
            <input type="number" step=".01" min="0.1" bind:value={amount} placeholder="Enter Amount"/>
            <input type="submit" value="Add Ingredient" />
        </form>
    
        {#if loading}
            <LoadingScreen />
        {/if}
    
<style>
    .RecipeIngredient {
        justify-content: center;
    }
</style>