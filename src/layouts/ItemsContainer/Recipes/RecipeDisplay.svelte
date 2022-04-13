<script>
import { ingredients } from "$src/stores/Ingredients";
import { currRecipe, recipes, recipeIngredients, recipeProcedures } from "$src/stores/Recipes";
import { addListItem } from "$src/stores/ShoppingList";
import IngredientCard from "../Ingredients/IngredientCard.svelte";

$: recipe = $recipes[$currRecipe]

</script>


<section>
    {recipe.id}
    {recipe.name}

    <div class="Ingredients">
        {#each Object.keys($recipeIngredients) as ingredient_id}
            <span on:click={()=>addListItem(ingredient_id)}>
            <IngredientCard {...$ingredients[ingredient_id]} />
            </span>
            {$recipeIngredients[ingredient_id]['amount']}
        {/each}
    </div>

    <div class="Procedures">
        {#each $recipeProcedures as procedure}
            <div>
                {procedure.content}
            </div>
        {/each}
    </div>
</section>