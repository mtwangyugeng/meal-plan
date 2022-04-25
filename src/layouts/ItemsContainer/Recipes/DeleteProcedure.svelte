<script>
    import DeleteIcon from "$src/assets/DeleteIcon.svelte";
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
    import YesCancel from "$src/layouts/_YesCancel.svelte";
import { deleteRecipeProcedure } from "$src/stores/Recipes";
    
    let deleting = false;
    export let id;

    let loading = false;
    const handleYes = async () => {
        loading = true;
        const status = await deleteRecipeProcedure(id);
        loading = false;
        if (status < 400) {
            deleting=false
        }
    }
    </script>
    
    <button class="DeleteIngredient" on:click={()=>deleting=true}>
        <DeleteIcon />
    </button>
    
    {#if deleting}
    <PopoutMessage>
        <YesCancel 
            message = "Delete Procedure?"
            handleYes={handleYes} close={()=>deleting=false}
        />
    {#if loading}
        <LoadingScreen />
    {/if}
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