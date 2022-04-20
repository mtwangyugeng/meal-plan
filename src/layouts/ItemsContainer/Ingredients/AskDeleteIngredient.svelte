<script>
import YesCancel from "$src/layouts/_YesCancel.svelte";
import { deleteIngredient } from "$src/stores/Ingredients";

    export let close;
    export let id;
    const handleYes = () => {
        deleteIngredient(id);
        close();
    }
</script>

<YesCancel 
    message = "Delete Ingredient?"
    handleYes={handleYes} close={close}
/>