<script>
import DeleteIcon from "$src/assets/DeleteIcon.svelte";
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import YesCancel from "$src/layouts/_YesCancel.svelte";

let deleting = false;

const handleYes = () => {}
</script>

<button class="DeleteIngredient" on:click={()=>deleting=true}>
    <DeleteIcon />
</button>

{#if deleting}
<PopoutMessage>
    <YesCancel 
        message = "Delete Recipe Ingredient?"
        handleYes={handleYes} close={()=>deleting=false}
    />
</PopoutMessage>
{/if}

<style>
    .DeleteIngredient {
        opacity: 0.7;
    }
    .DeleteIngredient:hover {
        opacity: 1;
    }

    .DeleteIngredient :global(svg){
        width: 30px;
        height: 30px;
    }

    
</style>