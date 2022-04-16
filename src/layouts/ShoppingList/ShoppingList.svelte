<script>

import { listItems } from "$src/stores/ShoppingList";
import {fly} from 'svelte/transition';
import { quintOut } from "svelte/easing";
import ListItem from "./ListItem.svelte";

import { ingredients } from "$src/stores/Ingredients";

$: listItemValues= Object.values($listItems);
$: listItemValues.sort((a,b)=> {       
    if ( $ingredients[a.ingredient_id].store < $ingredients[b.ingredient_id]){
        return 1;
    }
    if ( $ingredients[a.ingredient_id].store > $ingredients[b.ingredient_id] ){
        return -1;
    }
    return 0;
});


$: total = listItemValues.reduce((total, v)=>{
    return total + v.amount * $ingredients[v.ingredient_id]["price"];
}, 0);
</script>

<div class="ShoppingList">
    <div class="container">
        <h2>
            Shopping List
        </h2>

        <div class="ListItems">
        {#each listItemValues as listItem (listItem.id)}
            <span transition:fly={{ delay: 0, duration: 200, easing: quintOut }}>
                <ListItem {...listItem} />
            </span>
        {/each}
        </div>
        <div class="Total">
            Total: $
            {#key total}
            <span style="display: inline-block" in:fly={{ y: -20 }}>
                {(total/100).toFixed(2)}
            </span>
            {/key}
        </div>
    </div>
</div>


<style>
    .ShoppingList {
        padding: 10px;
    }
    .container {
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        background-color: rgb(255, 218, 148);
        height: 100%;
    }
    h2 {
        text-align: center;
        /* color: white; */
    }

    .ListItems {
        /* background-color: grey; */
        height: 100%;
    }
    .Total {
        background-color: orange;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>