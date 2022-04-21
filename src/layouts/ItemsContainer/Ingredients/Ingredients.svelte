<script>
import { searchRegex } from "$src/stores/Search";
import AddIngredient from "./AddIngredient.svelte";
import { flip } from 'svelte/animate';
import { ingredients, updateIngredient } from "$src/stores/Ingredients";
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
    let deletingID = null;

    let deleting = false;
</script>

<section>
{#each ingreidentValues.filter(v => $searchRegex.test(v.name)) as ingredient (ingredient.id)}
    <span animate:flip="{{duration: 200}}">
        <div class="CardWrapper">
        <IngredientCard {...ingredient} request={()=>addListItem(ingredient.id)}/>
        
        <div class="Options">
            <UpdateIngredient on:click={()=>{updating=true; currIngredient = {...ingredient}}}/>
            <DeleteIngredient on:click={()=>{deleting=true; deletingID = ingredient.id}} />
        </div>

        </div>        
    </span>
{/each}

<AddIngredient />
</section>

{#if updating}
    <PopoutMessage on:click={()=>updating=false} title="Update Ingredient">
        <FormIngredient close={()=>updating=false} ingreident={currIngredient} submitRequest={(ingredient)=>updateIngredient(currIngredient.id, ingredient)}/>
    </PopoutMessage>
{/if}


{#if deleting}
    <PopoutMessage on:click={()=>{deleting=false}} title="">
        <AskDelete close={()=>{deleting=false}} id = {deletingID} />
    </PopoutMessage>
{/if}

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: hidden;
    }
    .CardWrapper {
        position: relative;
        /* margin: 10px */
    }
    .Options{
        position: absolute;
        top: 0px;
        right: -30px;
        display: none;
        user-select: none;
        z-index: 2;

        width: 50px;
        height: 100%;
        
        /* background-color: #888;
        opacity: 0.5;
        display: flex;
        flex-direction: column;
        justify-content: center; */
    }
    .CardWrapper:hover .Options {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


    
</style>