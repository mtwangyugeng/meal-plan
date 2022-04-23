<script>
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import FormRecipeIngredient from "./FormRecipeIngredient.svelte";

    let adding = false;
</script>

<button class="RecipeIngredient" on:click={()=>adding=true}>
    <div>+</div>
</button>

{#if adding}
        <FormRecipeIngredient close={()=>adding=false} />
{/if}

<style>
    button {
        background-color: rgb(219, 219, 219);

        padding: 10px;
        text-transform: capitalize;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button:hover {
        background-color: rgb(190, 190, 190);
    }

    .RecipeIngredient {
        border: 0px;
    }

    div {
        border: 3px dashed rgb(134, 134, 134);
        width: 80%;
        height: 80%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>