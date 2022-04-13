<script>
import { recipes } from "$src/stores/Recipes";
import { searchRegex } from "$src/stores/Search";
import RecipeCard from "./RecipeCard.svelte";

$: recipeValues = Object.values($recipes);
</script>


<section>
    {#each recipeValues.filter(v => $searchRegex.test(v.name) ) as recipe (recipe.id)}
        <RecipeCard {...recipe}/>
    {/each}
</section>