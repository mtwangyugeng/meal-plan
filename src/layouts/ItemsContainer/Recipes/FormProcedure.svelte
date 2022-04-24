<script>
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
    export let close;
    export let procedure = {
        content: ""
    }
    export let title = "Procedure"; 
</script>


<PopoutMessage close={close} title={title}>
    <form>
        <input type="text" bind:value={procedure.content} placeholder="Enter Content"/>
        <input type=submit value="Submit" />
    </form>
</PopoutMessage>