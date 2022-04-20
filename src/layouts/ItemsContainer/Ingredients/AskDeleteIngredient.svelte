<script>
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
import YesCancel from "$src/layouts/_YesCancel.svelte";
import { deleteIngredient } from "$src/stores/Ingredients";

    export let close;
    export let id;

let loading = false;
    const handleYes = async () => {
        loading = true;
        const status = await deleteIngredient(id);
        loading = false;
        if(status < 400) {
            close();
        }
    }
</script>

<YesCancel 
    message = "Delete Ingredient?"
    handleYes={handleYes} close={close}
/>

{#if loading}
    <LoadingScreen />
{/if}