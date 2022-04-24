<script>
import { ingredients } from "$src/stores/Ingredients";
import { currRecipe, recipes, recipeIngredients, recipeProcedures, updateRecipe, getRecipeIngredients_byID, getRecipeProcedures_byID } from "$src/stores/Recipes";
import { addListItem } from "$src/stores/ShoppingList";
import IngredientCard from "../Ingredients/IngredientCard.svelte";
import AddRecipeIngredient from "./AddRecipeIngredient.svelte";
import DeleteRecipeIngredient from "./DeleteRecipeIngredient.svelte";
import UpdateRecipeIngredient from "./UpdateRecipeIngredient.svelte";
import UpdateRecipeName from "./UpdateRecipeName.svelte";

import FormRecipe from "./FormRecipe.svelte";
import FormProcedure from "./FormProcedure.svelte";
import DeleteProcedure from "./DeleteProcedure.svelte";
import UpdateProcedure from "./UpdateProcedure.svelte";
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
    
let updatingRecipeName = false;
let AddingProcedure = false;

$: recipe = $recipes[$currRecipe]

let loading = false;
currRecipe.subscribe(
    async (v) => {
        loading = true;
        await getRecipeIngredients_byID(v);
        await getRecipeProcedures_byID(v);
        loading = false
    }
)
</script>

{#if $currRecipe}
<section>
    <div class="container">
    <h3>
        {recipe.name}
        <span class="UpdateName">
            <UpdateRecipeName on:click={()=>updatingRecipeName=true} />
        </span>
    </h3>

    <h4>Ingredients</h4>
    
    <div class="Ingredients">
        {#each Object.keys($recipeIngredients) as ingredient_id}
            <div class="RecipeIngredient">
                <IngredientCard {...$ingredients[ingredient_id]} request={()=>addListItem(ingredient_id)}/>
                <div>
                    x {$recipeIngredients[ingredient_id]['amount']}
                </div>
                
                <div class="UpdateDelete">
                    <UpdateRecipeIngredient recipeIngredient = {$recipeIngredients[ingredient_id]} />
                    <DeleteRecipeIngredient />
                </div>
            </div>
        {/each}
        <AddRecipeIngredient />

    </div>
<!-- 
    <h4>Procedures</h4>
    <div class="Procedures">
        {#each $recipeProcedures as procedure, i}
            <div class="Procedure">
                <div class="ProcedureLeft">
                    {i+1}. {procedure.content}
                </div>
                <div class="ProcedureRight">
                    <UpdateProcedure procedure = {procedure} />
                    <DeleteProcedure />
                </div>
            </div>
        {/each}
        <div class="AddProcedure" on:click={()=>AddingProcedure=true}>+</div>
    </div> -->
    </div>

    {#if loading}
        <LoadingScreen />
    {/if}
</section>

{#if updatingRecipeName}
    <FormRecipe close={()=>updatingRecipeName=false} title="Rename Recipe" recipe={recipe} request={(recipe) => updateRecipe(recipe.id, recipe)}/>
{/if}

{#if AddingProcedure}
    <FormProcedure close={()=>AddingProcedure=false} title="Add Procedure"/>
{/if}

{/if}
<style>
    section {
        background-color: rgb(255, 208, 106);
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        overflow: auto;
        position: relative;
    }

    .container {
        width:100%;
        max-width: 800px;
    }
    h3 {
        text-align: center;
        /* background-color: white; */
        position: relative;
    }

    .UpdateName {
        display: none;
        position: absolute;
        top: -5px;
        margin-left: 10px;
    }

    h3:hover .UpdateName {
        display: inline-block;
    }

    :global(.RecipeIngredient) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* background-color: grey; */
        width: 280px;
        height: 130px;
        border-radius: 10px;
        margin: 10px;
        position: relative;
        border: 1px solid;
    }
    
    .UpdateDelete {
        position: absolute;
        right: 0;
        bottom: 0;
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ProcedureRight {
        display: flex;
        flex-direction: column;
    }

    .AddProcedure {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        border: 3px dashed rgb(134, 134, 134);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85px;
    }
    .AddProcedure:hover {
        background-color: rgb(209, 124, 12);
        color: #fff;
        transition: all 0.2s;
    }
</style>