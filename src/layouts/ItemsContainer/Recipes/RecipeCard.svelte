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
    {name}

    <span class="Delete" on:click={()=>deleting=true}>
    <DeleteIcon />
    </span>
</button>


<style>
    button {
        width: 100px;
        background-color: yellow;
        text-align: left;
        padding: 10px 3px;
        position: relative;
    }

    .Delete > :global(svg) {
        width: 20px;
        height: 20px;
    }

    .Delete {
        display: none;
        position: absolute;
        right: 0;
    }

    button:hover .Delete {
        display: inline;
    }

    .Activated {
        background-color: red;
    }
</style>