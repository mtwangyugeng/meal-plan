<script>
import { ingredients } from "$src/stores/Ingredients";
import { currRecipe, recipes, recipeIngredients, recipeProcedures } from "$src/stores/Recipes";
import { addListItem } from "$src/stores/ShoppingList";
import IngredientCard from "../Ingredients/IngredientCard.svelte";
import AddRecipeIngredient from "./AddRecipeIngredient.svelte";

$: recipe = $recipes[$currRecipe]

</script>


<section>
    <div class="container">
    <h3>{recipe.name}</h3>

    <h4>Ingredients</h4>
    <div class="Ingredients">
        {#each Object.keys($recipeIngredients) as ingredient_id}
            <div class="RecipeIngredient">
                <IngredientCard {...$ingredients[ingredient_id]} request={()=>addListItem(ingredient_id)}/>
                <div>
                    x {$recipeIngredients[ingredient_id]['amount']}
                </div>
            </div>
        {/each}
        <div class="RecipeIngredient">
            <AddRecipeIngredient />
        </div>
    </div>

    <h4>Procedures</h4>
    <div class="Procedures">
        {#each $recipeProcedures as procedure, i}
            <div class="Procedure">
                {i+1}. {procedure.content}
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

    :global(.RecipeIngredient) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* background-color: grey; */
        width: 260px
    }
    .Ingredients {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .Procedure {
        background-color: rgb(255, 188, 62);
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
    }

</style>