<script>
    import UpdateIcon from "$src/assets/UpdateIcon.svelte";
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import { updateRecipeIngredient } from "$src/stores/Recipes";
import FormRecipeIngredient from "./FormRecipeIngredient.svelte";
    
    let updating = false;
    export let recipeIngredient;

    export let id;
</script>
    
    <button class="UpdateIngredient" on:click={()=>updating=true}>
        <UpdateIcon />
    </button>
    
{#if updating}
    <FormRecipeIngredient close={()=>updating=false} recipeIngredient={recipeIngredient} title="Update Recipe Ingredient" request={(imp)=>updateRecipeIngredient(id, imp)}/>
{/if}
    <style>
        .UpdateIngredient {
            opacity: 0.7;
        }
        .UpdateIngredient:hover {
            opacity: 1;
        }
        .UpdateIngredient :global(svg){
            width: 30px;
            height: 30px;
        }
    </style>