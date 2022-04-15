<script>
import { ingredients } from "$src/stores/Ingredients";
import { currRecipe, recipes, recipeIngredients, recipeProcedures } from "$src/stores/Recipes";
import { addListItem } from "$src/stores/ShoppingList";
import IngredientCard from "../Ingredients/IngredientCard.svelte";

$: recipe = $recipes[$currRecipe]

</script>


<section>
    <div class="container">
    <h3>{recipe.name}</h3>

    <h4>Ingredients</h4>
    <div class="Ingredients">
        {#each Object.keys($recipeIngredients) as ingredient_id}
            <div class="Ingredient">
                <span on:click={()=>addListItem(ingredient_id)}>
                <IngredientCard {...$ingredients[ingredient_id]} />
                </span>
                x
                <div>
                    {$recipeIngredients[ingredient_id]['amount']}
                </div>
            </div>
        {/each}
    </div>

    <h4>Procedures</h4>
    <div class="Procedures">
        {#each $recipeProcedures as procedure}
            <div class="Procedure">
                {procedure.content}
            </div>
        {/each}
    </div>
    </div>
</section>


<style>
    section {
        background-color: rgb(255, 208, 106);
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
    }

    .container {
        width:100%;
        max-width: 800px;
    }
    h3 {
        text-align: center;
    }

    .Ingredient {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Ingredients {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .Procedure {
        background-color: yellow;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
    }

</style>