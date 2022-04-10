<script>
import { getIngredientById } from "$src/stores/Ingredients";

import { listItems } from "$src/stores/ShoppingList";
import { flip } from 'svelte/animate';
import ListItem from "./ListItem.svelte";

</script>

<div class="ShoppingList">
    <div class="container">
        <h2>
            Shopping List
        </h2>
        {#each $listItems as listitem (listitem.id)}
            <span animate:flip="{{duration: 200}}">
                <ListItem {...listitem} />
            </span>
        {/each}
    </div>
</div>