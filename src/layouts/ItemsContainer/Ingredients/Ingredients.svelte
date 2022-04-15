<script>
import { searchRegex } from "$src/stores/Search";
import AddIngredient from "./AddIngredient.svelte";
import { flip } from 'svelte/animate';
import { ingredients } from "$src/stores/Ingredients";
import IngredientCard from "./IngredientCard.svelte";

$: ingreidentValues = Object.values($ingredients);

import { addListItem } from "$src/stores/ShoppingList";
import UpdateIngredient from "./UpdateIngredient.svelte";
import DeleteIngredient from "./DeleteIngredient.svelte";


import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import FormIngredient from "./FormIngredient.svelte";
import AskDelete from "./AskDeleteIngredient.svelte";

    let updating = false;
    let currIngredient = null;

    let deleting = false;
</script>

<section>
{#each ingreidentValues.filter(v => $searchRegex.test(v.name)) as ingredient (ingredient.id)}
    <span animate:flip="{{duration: 200}}">
        <div class="CardWrapper">
        <IngredientCard {...ingredient} on:click={()=>addListItem(ingredient.id)}/>
        
        <div class="Options">
            <UpdateIngredient on:click={()=>{updating=true; currIngredient = {...ingredient}}}/>
            <DeleteIngredient on:click={()=>{deleting=true;}} />
        </div>

        </div>        
    </span>
{/each}

<AddIngredient />
</section>

{#if updating}
    <PopoutMessage on:click={()=>updating=false} title="Update Ingredient">
        <FormIngredient ingreident={currIngredient} />
    </PopoutMessage>
{/if}


{#if deleting}
    <PopoutMessage on:click={()=>{deleting=false}} title="">
        <AskDelete close={()=>{deleting=false}}/>
    </PopoutMessage>
{/if}

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
        bottom: -30px;
        right: 0px;
        display: none;
        user-select: none;
        z-index: 2;

        width: 100%;
        /* display: flex; */
        /* background-color: #fff; */
    }
    .CardWrapper:hover .Options {
        display: flex;
        justify-content: flex-end;
    }


    
</style>