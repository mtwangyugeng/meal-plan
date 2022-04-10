<script>
import { searchRegex } from "$src/stores/Search";
import AddIngredient from "./AddIngredient.svelte";
import { flip } from 'svelte/animate';
import { ingredients } from "$src/stores/Ingredients";
import IngredientCard from "./IngredientCard.svelte";

$: ingreidentValues = Object.values($ingredients);

import { addListItem } from "$src/stores/ShoppingList";
</script>

<section>
{#each ingreidentValues.filter(v => $searchRegex.test(v.name)) as ingredient (ingredient.id)}
    <span animate:flip="{{duration: 200}}">
        <IngredientCard {...ingredient} on:click={()=>addListItem(ingredient.id)}/>
    </span>
{/each}

<AddIngredient />
</section>


<style>
    section {
        display: flex;
        flex-wrap: wrap;
    }
    
</style>