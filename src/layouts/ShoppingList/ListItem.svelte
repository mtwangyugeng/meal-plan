<script>
    import { ingredients } from "$src/stores/Ingredients";
    import IngredientCard from "$src/layouts/ItemsContainer/Ingredients/IngredientCard.svelte";
    import { fly } from 'svelte/transition';
    import { removeListItem } from "$src/stores/ShoppingList";

    // export let id;
    export let ingredient_id;
    export let amount;
    export let id;

    $: ingredient = $ingredients[ingredient_id]

</script>

<div class="ListItem">
    {id}
    <IngredientCard {...ingredient} request={()=>removeListItem(ingredient_id)}/>
    x 
    {#key amount}
    <span in:fly={{ y: -20 }}>
        {amount}
    </span>
    {/key}
</div>


<style>
    .ListItem {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>