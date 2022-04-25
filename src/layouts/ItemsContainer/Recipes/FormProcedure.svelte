<script>
    import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import { currRecipe } from "$src/stores/Recipes";
    export let close;
    export let procedure = {
        content: ""
    }
    export let title = "Procedure"; 
    export let request;

    let loading = false;
    const handleSubmit = async () =>{
        const neo = {
            ...procedure,
            recipe_id: $currRecipe
        }
        loading = true;
        const status = await request(neo);
        loading = false;
        if (status < 400) {
            close();
        }
    }
</script>


<PopoutMessage close={close} title={title}>
    <form on:submit|preventDefault={handleSubmit}>
        <textarea bind:value={procedure.content} placeholder="Enter Content"/>
        <input type=submit value="Submit" />
    </form>

    {#if loading}
        <LoadingScreen />
    {/if}
</PopoutMessage>


<style>
    textarea {
        width: 400px;
        height: 300px;
    }
</style>