<script>
import { recipes } from "$src/stores/Recipes";
import { searchRegex } from "$src/stores/Search";
import RecipeCard from "./RecipeCard.svelte";
import RecipeDisplay from "./RecipeDisplay.svelte";


$: recipeValues = Object.values($recipes);

</script>


<section>
    <div class="RecipeList">
        <h3>Recipes</h3>
        {#each recipeValues.filter(v => $searchRegex.test(v.name) ) as recipe (recipe.id)}
            <RecipeCard {...recipe}/>
        {/each}
    </div>
    <RecipeDisplay />
</section>


<style>
    section {
        display: flex;
        height: 100%;
    }
    .RecipeList {
        display: flex;
        flex-direction: column;
        background-color: white;
        height: 100%;
        overflow: auto;
        padding: 10px 3px;
        border-radius: 10px;
    }
/* 
    @media only screen and (max-width: 1000px) {
        section {
            flex-direction: column;
            
        }
        .RecipeList {
            background-color: lightblue;
            flex-direction: row;
            height: auto
        }
    } */

    h3 {
        text-align: center;
    }
</style>