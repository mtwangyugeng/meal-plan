<script>
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";

import IngredientCard from "./IngredientCard.svelte";

export let ingreident = {
    name: "Chicken",
    unit: "kg",
    amount: "1",
    price: '1111',
    store: 'Lucky'
}

export let submitRequest;
export let close;
let loading = false;

const handleSubmit = async () => {
    loading = true;
    const status = await submitRequest(ingreident);
    loading = false;
    if(status < 400) {
        close();
    }
}


</script>



    <IngredientCard {...ingreident}/>

    <form on:submit|preventDefault={handleSubmit}>
        <input bind:value={ingreident.name} placeholder="Enter Name"/>
        <input bind:value={ingreident.store} placeholder="Enter Store"/>

        <div class="Package">
            <input step=".01" type="number" bind:value={ingreident.amount} placeholder="Enter Package Size"/>
            <select bind:value={ingreident.unit} required>
                <optgroup label="Volumn">
                <option value="ml">ml</option>
                <option value="L">L</option>
                </optgroup>
                <optgroup label="Weight">
                <option value="kg">kg</option>
                <option value="g">g</option>
                </optgroup>
                <optgroup label="Other">
                    <option value="peice">peice</option>
                </optgroup>
            </select>
            <input type="number" bind:value={ingreident.price} placeholder="Enter Price in Cent"/>
        </div>
        
        <input type="submit" value="Add Ingredient" />
    </form>

    {#if loading}
        <LoadingScreen />
    {/if}