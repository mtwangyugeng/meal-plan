<script>
    import UpdateIcon from "$src/assets/UpdateIcon.svelte";
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import FormRecipeIngredient from "./FormRecipeIngredient.svelte";
    
    let updating = false;
    export let recipeIngredient;
</script>
    
    <button class="UpdateIngredient" on:click={()=>updating=true}>
        <UpdateIcon />
    </button>
    
{#if updating}
    <FormRecipeIngredient close={()=>updating=false} recipeIngredient={recipeIngredient}/>
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