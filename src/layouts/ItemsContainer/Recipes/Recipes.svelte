<script>
import { createRecipe, recipes } from "$src/stores/Recipes";
import { searchRegex } from "$src/stores/Search";
import { flip } from "svelte/animate";
import FormRecipe from "./FormRecipe.svelte";
import RecipeCard from "./RecipeCard.svelte";
import RecipeDisplay from "./RecipeDisplay.svelte";


$: recipeValues = Object.values($recipes);

let adding = false;

</script>


<section>
    <div class="RecipeList">
        <h3>Recipes</h3>
        {#each recipeValues.filter(v => $searchRegex.test(v.name) ) as recipe (recipe.id)}
        <span animate:flip="{{duration: 200}}">
            <RecipeCard {...recipe}/>
        </span>
        {/each}
        <button on:click={()=>adding=true}>+</button>
    </div>
    <RecipeDisplay />
</section>

{#if adding}
    <FormRecipe close={()=>adding=false} title="Add Recipe" request={createRecipe}/>
{/if}

<style>
    section {
        display: flex;
        height: 100%;
        color: rgb(134, 76, 0);
    }
    .RecipeList {
        display: flex;
        flex-direction: column;
        background-color: rgb(255, 175, 27);
        height: 100%;
        overflow: auto;
        padding: 10px 0px;
        border-radius: 10px;
        
        width: 160px;

       
    }
    span {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    button {
        height: 40px;
        border: 3px dashed rgb(134, 134, 134);
        margin: 10px;
        border-radius: 8px;
    }
    button:hover {
        background-color: rgb(209, 124, 12);
        color: white;
        transition: all 0.2s;
    }

    h3 {
        text-align: center;
    }
</style>