<script>

import { listItems } from "$src/stores/ShoppingList";
import { flip } from 'svelte/animate';
import { fly } from 'svelte/transition';
import ListItem from "./ListItem.svelte";

$: listItemValues= Object.values($listItems)

import { ingredients } from "$src/stores/Ingredients";

$: total = listItemValues.reduce((total, v)=>{
    return total + v.amount * $ingredients[v.ingredient_id]["price"];
}, 0)

</script>

<div class="ShoppingList">
    <div class="container">
        <h2>
            Shopping List
        </h2>

        <div class="ListItems">
        {#each listItemValues as listItem (listItem.id)}
            <span animate:flip="{{duration: 200}}">
                <ListItem {...listItem} />
            </span>
        {/each}
        </div>
        <div>
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
    .container {
        display: flex;
        flex-direction: column;
        background-color: red;
        height: 100%;
    }
    h2 {
        text-align: center
    }

    .ListItems {
        background-color: grey;
        height: 100%;
    }


</style>