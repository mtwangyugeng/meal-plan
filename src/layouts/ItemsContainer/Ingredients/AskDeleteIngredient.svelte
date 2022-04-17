<script>
import YesCancel from "$src/layouts/_YesCancel.svelte";

    export let close;
</script>

<YesCancel 
    message = "Delete Ingredient?"
    handleYes={close} close={close}
/>