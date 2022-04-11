<script>
import { searchRegex } from "$src/stores/Search";
import AddIngredient from "./AddIngredient.svelte";
import { flip } from 'svelte/animate';
import { ingredients } from "$src/stores/Ingredients";
import IngredientCard from "./IngredientCard.svelte";

$: ingreidentValues = Object.values($ingredients);

import { addListItem } from "$src/stores/ShoppingList";
import UpdateIngredient from "./UpdateIngredient.svelte";
</script>

<section>
{#each ingreidentValues.filter(v => $searchRegex.test(v.name)) as ingredient (ingredient.id)}
    <span animate:flip="{{duration: 200}}">
        <div class="CardWrapper">
        <IngredientCard {...ingredient} on:click={()=>addListItem(ingredient.id)}/>
        
        <div class="Options">
            <UpdateIngredient ingredient={ingredient} />
            <div>Delete</div>
        </div>

        </div>        
    </span>
{/each}

<AddIngredient />
</section>


<style>
    section {
        display: flex;
        flex-wrap: wrap;
    }
    .CardWrapper {
        position: relative;
    }
    .Options{
        position: absolute;
        top:20px;
        right: -30px;
        /* opacity: 0; */
        user-select: none;
        z-index: 99;
        background-color: #fff;
    }
    .CardWrapper:hover .Options {
        opacity: 1;
    }


</style>