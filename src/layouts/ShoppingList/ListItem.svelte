<script>
    import { ingredients } from "$src/stores/Ingredients";
    import IngredientCard from "$src/layouts/ItemsContainer/Ingredients/IngredientCard.svelte";
    import { fly } from 'svelte/transition';

    export let id;
    export let ingredient_id;
    export let amount;

    $: ingredient = $ingredients[ingredient_id]
</script>

<div class="ListItem">
    <IngredientCard {...ingredient} />
    x 
    {#key amount}
    <span style="display: inline-block" in:fly={{ y: -20 }}>
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