<script>
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
    export let close;
    export let recipe = {
        name: ""
    }
    export let title = "Recipe"; 
</script>


<PopoutMessage close={close} title={title}>
    <form>
        <br/>
        <input type="text" bind:value={recipe.name} placeholder="Enter New Name"/>
        <input type=submit value="Rename" />
    </form>
</PopoutMessage>