<script>
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import { createRecipeIngredient } from "$src/stores/Recipes";
import FormRecipeIngredient from "./FormRecipeIngredient.svelte";

    let adding = false;
</script>

<button class="RecipeIngredient" on:click={()=>adding=true}>
    <div>+</div>
</button>

{#if adding}
        <FormRecipeIngredient close={()=>adding=false} title = "Add Recipe Ingredient" request={createRecipeIngredient}/>
{/if}

<style>
    button {
        /* background-color: rgb(219, 219, 219); */

        padding: 10px;
        text-transform: capitalize;
        
        display: flex;
        align-items: center;
        justify-content: center;

        border: 3px dashed rgb(134, 134, 134);
    }
    button:hover {
        background-color: rgb(209, 124, 12);
        color: #fff;
        transition: all 0.2s;
    }

    /* .RecipeIngredient {
        border: 0px;
    } */

    div {
        /* border: 3px dashed rgb(134, 134, 134);
        width: 80%;
        height: 80%; */

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>