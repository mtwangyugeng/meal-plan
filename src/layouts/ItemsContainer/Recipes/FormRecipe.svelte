<script>
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";

    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
    export let close;
    export let recipe = {
        name: ""
    }
    export let title = "Recipe"; 

    export let request;
    let loading = false;
    const handleSubmit = async () => {
        loading = true;
        const status = await request(recipe)
        loading = false;
        if(status < 400) {
            close();
        }
    }
</script>


<PopoutMessage close={close} title={title}>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" bind:value={recipe.name} placeholder="Enter Name"/>
        <input type=submit value="Submit" />
    </form>
    {#if loading}
        <LoadingScreen />
    {/if}
</PopoutMessage>