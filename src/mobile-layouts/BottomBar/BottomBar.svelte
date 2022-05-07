<script>
import IngredientIcon from "$src/assets/IngredientIcon.svelte";
import RecipeIcon from "$src/assets/RecipeIcon.svelte";


    let tabs = [
        { 
            name: 'Ingreidents',
            icon: IngredientIcon,
        },
        { 
            name: 'Recipes',
            icon: RecipeIcon,
        } 
    ]
</script>

<section>
    {#each tabs as tab (tab.name)}
        <button class=Tab>
            <svelte:component this={tab.icon} />
        </button>
        
    {/each}
</section>


<style>
    section {
        background-color: #888;
        height: 70px;

        display: flex;
    }

    .Tab {
        flex: 2;
    }

    .Tab > :global(svg) {
        width: 40px;
        height: 40px;
    }

    .Shoppinglist {

    }
</style>