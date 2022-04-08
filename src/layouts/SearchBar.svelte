<script>
    import {setSearchRegex} from "$src/stores/Search"
    let search = "";
    $: setSearchRegex(search);

    import IngredientIcon from "$src/assets/IngredientIcon.svelte"
    import RecipeIcon from "$src/assets/RecipeIcon.svelte"

    import {TABS, currTab} from "$src/stores/Tab"
    import { fly } from 'svelte/transition';
</script>

<div class="SearchBar">
    <div class="container">
        {#key $currTab}
            <span style="display: inline-block" in:fly={{ y: -20 }}>
                {#if $currTab == "Ingredients"}
                    <IngredientIcon />
                {:else if $currTab == "Recipes"}
                    <RecipeIcon />
                {/if}
            </span>
        {/key}
        
        <input bind:value={search} placeholder={`Search ${$currTab}`}/>
    </div>
</div>


<style>
    .SearchBar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        background-color: rgb(245, 207, 213);
        display: flex;
        width: 500px;
        border-radius: 40px;
        padding: 20px;
    }

    .container :global(svg) {
		width: 30px;
		height: 30px;
        margin-right: 20px;
	}
    input {
        background-color: transparent;
        border: none;
        width: 90%;
    }
    input:focus {
        outline: none;
    }
</style>