<script>
import { recipes } from "$src/stores/Recipes";
import { searchRegex } from "$src/stores/Search";
import { flip } from "svelte/animate";
import RecipeCard from "./RecipeCard.svelte";
import RecipeDisplay from "./RecipeDisplay.svelte";


$: recipeValues = Object.values($recipes);

</script>


<section>
    <div class="RecipeList">
        <h3>Recipes</h3>
        {#each recipeValues.filter(v => $searchRegex.test(v.name) ) as recipe (recipe.id)}
        <span animate:flip="{{duration: 200}}">
            <RecipeCard {...recipe}/>
        </span>
        {/each}
    </div>
    <RecipeDisplay />
</section>


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