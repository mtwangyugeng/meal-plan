<script>
import UpdateIcon from "$src/assets/UpdateIcon.svelte";
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import FormIngredient from "./FormIngredient.svelte";

    export let ingredient;
    let updating = false;
</script>

<div class="UpdateIngredient" on:click={()=>updating = true}>
    <UpdateIcon />
</div>

{#if updating}
    <PopoutMessage>
        <FormIngredient ingreident={{...ingredient}} on:click={()=>updating=false} title="Update Ingredient"/>
    </PopoutMessage>
{/if}

<style>
    .UpdateIngredient {
        cursor: pointer;
    }

    .UpdateIngredient :global(svg){
        width: 30px;
        height: 30px;
    }
</style>