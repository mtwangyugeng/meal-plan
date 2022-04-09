<script>
import { searchRegex } from "$src/stores/Search";
import AddIngredient from "./AddIngredient.svelte";
import { flip } from 'svelte/animate';
import { ingredients } from "$src/stores/Ingredients";
import IngredientCard from "./IngredientCard.svelte";

</script>

<section>
{#each $ingredients.filter(v => $searchRegex.test(v.name)) as ingredient (ingredient.id)}
    <span animate:flip="{{duration: 200}}">
        <IngredientCard {...ingredient} />
    </span>
{/each}

<AddIngredient />
</section>


<style>
    section {
        display: flex;
        flex-wrap: wrap;
    }
    section :global(.Card) {
        /* background-color: white; */
        width: 180px;
        height: 100px;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
    }
</style>