<script>
    import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
    import { ingredients } from "$src/stores/Ingredients";
import { makeRegex } from "$src/stores/Search";
    import IngredientCard from "../Ingredients/IngredientCard.svelte";
    import { flip } from 'svelte/animate';
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";

    $: ingreidentValues = Object.values($ingredients);
    $: filteredIngredient = ingreidentValues.filter(v => searchRegex.test(v.name) && (!selectedIngredient || v.id != selectedIngredient.id))

    

    export let recipeIngredient = {
        amount: null,
        ingredient_id:null
    }

    let selectedIngredient = recipeIngredient.ingredient_id ? $ingredients[recipeIngredient.ingredient_id] : null;
    let amount = recipeIngredient.amount;

    let hoverIngredient = null;

    

    export let close;
    let loading = false;
    
    
    let search = "";
    
    $: searchRegex = makeRegex(search)

    const handleOptionClick = (ingredient) => {
        return () => {
            selectedIngredient = ingredient;
            selectingIngredient = false;
        }
    }

    const handleOptionHover = (ingredient) => {
        return () => {
            hoverIngredient = ingredient;
        }
    }
    let selectingIngredient = false;

    const handleSearchInput = () => {
        // if (search=="") {
        //     selectingIngredient = false;
        //     return;
        // }

        selectingIngredient=true
    }

    const handleKeydown = (e) => {
        if (selectingIngredient) {
            console.log(e.code)
            if (e.code == "Escape") {
                selectingIngredient = false;
            }
            else if (e.code == "ArrowDown") {
                hoverIngredient = filteredIngredient[0]
            }
            else if (e.code == "ArrowRight") {
                selectedIngredient = hoverIngredient;
                selectingIngredient = false;
            }
        }
    }
let shake = false;
export let title = "Title"
</script>


<svelte:window on:keydown={handleKeydown} />

<PopoutMessage close={close} shake={shake} title={title}> 
<div class="FormIngredient">
    
<div class="RecipeIngredient">
    {#if hoverIngredient}
        <IngredientCard {...hoverIngredient}/>
    {:else}
        <IngredientCard {...selectedIngredient}/>
    {/if}
    <div>
        x {amount ? amount : "-.-"}
    </div>
</div>

<form on:submit|preventDefault={()=>{console.log("submit")}}> 
    <div class="SearchIngredients">
        <div class="SelectContainer">
            <div >
                <div class="SelectedIngredient" on:click={()=>selectingIngredient=!selectingIngredient}>
                    {selectedIngredient ? 
                        selectedIngredient.id + ": " + selectedIngredient.name
                    : "Select Ingredient"}
                </div>
                {#if selectingIngredient}
                    <div class="Options" >
                    {#each filteredIngredient as ingredient (ingredient.id)}
                    <span animate:flip="{{duration: 200}}">
                        <div class={"Option " + ((hoverIngredient && hoverIngredient.id === ingredient.id) ? "Activated" : "")} on:click={handleOptionClick(ingredient)} 
                            on:focus={handleOptionHover(ingredient)}
                            on:mouseover={handleOptionHover(ingredient)}
                            on:blur={()=>hoverIngredient=null}
                            on:mouseout={()=>hoverIngredient=null}>
                            {ingredient.id}: {ingredient.name}
                        </div>
                    </span>    
                    {/each}
                    </div>
                {/if}
            </div>

            <input type="text" bind:value={search} placeholder="Search for Ingredient" on:input={handleSearchInput} on:focus={()=>selectingIngredient=true}/>

        </div>
    </div>
    <div class="Amount">
        <input  type="number" step=".01" min="0.1" bind:value={amount} placeholder="Enter Amount"/>
    </div>
    <input type="submit" value="Submit" />
</form>
</div>
{#if loading}
    <LoadingScreen />
{/if}
</PopoutMessage>
    
<style>
    .FormIngredient {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .RecipeIngredient {
        justify-content: center;
    }
    .SearchIngredients {
        position: relative;
    }
   
    .SelectedIngredient {
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        
    }

    .SelectContainer {
        display: flex;
    }

    .SelectContainer > div {
        color: #fff;
        background-color: rgb(179, 86, 0);
        width: 200px;
        margin: 2px 10px;
        border-radius: 5px;
    }

    .SelectContainer > div:hover {
        transition: all 0.2s;
    }

    .Options {
        position: absolute;
        background-color: rgb(201, 130, 0);
        flex-direction: column;

        display: flex;
        max-height: 100px;
        overflow: auto;
        width: 180px;
        left: 20px;
        text-align: center;
    }

    /* .SearchIngredients input:focus + .Options {
        display: flex;
    } */
    .Options:hover {
        display: flex;
    }

    .Option {
        cursor: pointer;
        /* width: 100%; */
        user-select: none;
    }

    .Activated {
        background-color: rgb(179, 86, 0);
        color: #fff;
    }

    .Amount {
        margin: 7px;
    }

    .Amount > input {
        width: 200px;
    }
</style>