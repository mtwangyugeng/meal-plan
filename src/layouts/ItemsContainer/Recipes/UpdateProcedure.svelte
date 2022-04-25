<script>
    import UpdateIcon from "$src/assets/UpdateIcon.svelte";
import { updateRecipeProcedure } from "$src/stores/Recipes";
import FormProcedure from "./FormProcedure.svelte";
    
    
    let updating = false;
    export let procedure;

    export let id;
</script>
    
    <button class="UpdateProcedure" on:click={()=>updating=true}>
        <UpdateIcon />
    </button>
    
{#if updating}
    <FormProcedure close={()=>updating=false} procedure={procedure} title = "Update Procedure" request={(procedure)=>updateRecipeProcedure(id, procedure)}/>
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