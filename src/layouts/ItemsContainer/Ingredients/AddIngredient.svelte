<script>
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import { createIngredient } from "$src/stores/Ingredients";
    import FormAddIngredient from "./FormIngredient.svelte";

    let adding = false;
</script>

<button class="Card" on:click={()=>adding=true}>
    <div>+</div>
</button>

{#if adding}
    <PopoutMessage close={()=>adding=false} title="Add Ingredient">
        <FormAddIngredient close={()=>adding=false} submitRequest={(ingredient)=>createIngredient(ingredient)}/>
    </PopoutMessage>
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

    div {
        border: 3px dashed rgb(134, 134, 134);
        width: 80%;
        height: 80%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>