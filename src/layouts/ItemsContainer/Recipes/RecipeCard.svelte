<script>
import DeleteIcon from "$src/assets/DeleteIcon.svelte";
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import YesCancel from "$src/layouts/_YesCancel.svelte";
import { currRecipe } from "$src/stores/Recipes";


    export let name;
    export let id;

    const handleClick = () => {
        currRecipe.set(id);
    }
    $: activated = $currRecipe == id;

    let deleting = false

    const handleYes = () => {}
</script>

<button class={activated && "Activated"} on:click|self={handleClick}>
    <div class="NameWrapper" on:click={handleClick}>
        {name}
    </div>

    <div class="DeleteWrapper">
        <span class="Delete" on:click={()=>deleting=true}>
        <DeleteIcon />
        </span>
    </div>
</button>

{#if deleting}
    <PopoutMessage >
        <YesCancel handleYes={handleYes} close={()=>deleting=false} />
    </PopoutMessage>
{/if}

<style>
    button {
        background-color: rgb(255, 179, 66);
        text-align: left;
        padding: 10px 0px 10px 10px;
        width: 95%;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button:not(.Activated):hover {
        background-color: rgb(248, 204, 122);
    }

    .DeleteWrapper {
        width: 20px;
        height: 20px;
    }

    .Delete > :global(svg) {
        width: 20px;
        height: 20px;
    }

    .Delete {
        display: none;
        /* position: absolute;
        right: 0; */
    }

    button:hover .Delete {
        display: inline;
    }

    .Activated {
        background-color: rgb(248, 204, 122);
        transition: width 0.2s;
        width: 100%;
    }
</style>