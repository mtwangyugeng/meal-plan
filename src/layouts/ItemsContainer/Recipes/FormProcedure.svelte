<script>
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
    export let close;
    export let procedure = {
        content: ""
    }
    export let title = "Recipe"; 
</script>


<PopoutMessage close={close} title={title}>
    <form>
        <br/>
        <input type="text" bind:value={procedure.content} placeholder="Enter Content"/>
        <input type=submit value="Rename" />
    </form>
</PopoutMessage>