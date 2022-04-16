<script>
import DeleteIcon from "$src/assets/DeleteIcon.svelte";
import { currRecipe } from "$src/stores/Recipes";


    export let name;
    export let id;

    const handleClick = () => {
        currRecipe.set(id);
    }
    $: activated = $currRecipe == id;

    let deleting = false
</script>

<button class={activated && "Activated"} on:click|self={handleClick}>
    <div class="NameWrapper">
        {name}
    </div>

    <div class="DeleteWrapper">
        <span class="Delete" on:click={()=>deleting=true}>
        <DeleteIcon />
        </span>
    </div>
</button>


<style>
    button {
        background-color: yellow;
        text-align: left;
        padding: 10px 0px 10px 10px;
        width: 100%;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: space-between;
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
        background-color: rgb(0, 255, 13);
    }
</style>