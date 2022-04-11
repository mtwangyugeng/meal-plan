<script>
import UpdateIcon from "$src/assets/UpdateIcon.svelte";
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import FormIngredient from "./FormIngredient.svelte";

    export let ingredient;
    let updating = false;
</script>

<button class="UpdateIngredient" on:click={()=>updating = true}>
    <UpdateIcon />
</button>

{#if updating}
    <PopoutMessage>
        <FormIngredient ingreident={{...ingredient}} on:click={()=>updating=false} title="Update Ingredient"/>
    </PopoutMessage>
{/if}

<style>
    .UpdateIngredient:hover {
        opacity: 0.7;
    }
    .UpdateIngredient :global(svg){
        width: 30px;
        height: 30px;
    }
</style>