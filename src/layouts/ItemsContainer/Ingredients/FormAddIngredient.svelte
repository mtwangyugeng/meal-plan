<script>

import IngredientCard from "./IngredientCard.svelte";

let imp = {
    id: "",
    name: "",
    unit: "",
    amount: "",
    price: '',
    store: ''
}
</script>


<div class="container">
    <div class="cross" on:click>x</div>
    <h2>Add a new ingredient</h2>
    <IngredientCard {...imp}/>

    <form>
        <input bind:value={imp.name} placeholder="Enter Name"/>
        <input bind:value={imp.store} placeholder="Enter Store"/>

        <div class="Package">
            <input type="number" bind:value={imp.amount} placeholder="Enter Package Size"/>
            <select bind:value={imp.unit} required>
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
            <input type="number" bind:value={imp.price} placeholder="Enter Price"/>
        </div>
        
        <input type="submit" value="Add Ingredient" />
    </form>
</div>


<style>
    .container {
        background-color: rgb(255, 221, 182);
        -webkit-box-shadow: 8px 5px 8px -8px #000000; 
        box-shadow: 8px 5px 8px -8px #000000;
        margin-bottom: 200px;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
    }

    .cross {
        position: absolute;
        right: 10px;
        top: 10px;
        user-select: none;
        cursor: pointer;
        color:rgb(119, 79, 3);
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .cross:hover{
        color:rgb(95, 0, 0);
    }

    .Package {
        display: flex;
    }

    h2 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color:rgb(119, 79, 3)
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input:not([type="submit"]) {
        padding: 10px;
        border-radius: 10px;

        background-color: rgb(252, 204, 149);
        border: none;
        margin: 2px;
    }
    input:not([type="submit"]):focus {
        outline: 1px solid #000000;
    }

    input[type="submit"] {
        background-color: rgb(216, 141, 3);
        padding: 20px;
        margin-top: 20px;
        color: white;
    }
    input[type="submit"]:hover {
        background-color: orange
    }
</style>