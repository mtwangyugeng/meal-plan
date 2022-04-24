<script>
    import UpdateIcon from "$src/assets/UpdateIcon.svelte";
import FormProcedure from "./FormProcedure.svelte";
    
    
    let updating = false;
    export let procedure;
</script>
    
    <button class="UpdateProcedure" on:click={()=>updating=true}>
        <UpdateIcon />
    </button>
    
{#if updating}
    <FormProcedure close={()=>updating=false} procedure={procedure} title = "Update Procedure" />
{/if}
    <style>
        .UpdateProcedure {
            opacity: 0.7;
        }
        .UpdateProcedure:hover {
            opacity: 1;
        }
        .UpdateProcedure :global(svg){
            width: 30px;
            height: 30px;
        }
    </style>