<script>
import { indexIngredient, ingredients } from "$src/stores/Ingredients";
import { indexRecipe, recipes } from "$src/stores/Recipes";
import { indexListItems, listItems } from "$src/stores/ShoppingList";
import {token} from "$src/stores/User"
import FormSignIn from "./FormSignIn.svelte";
import UserIcon from "./UserIcon.svelte";

   let signningIn = false;

$: if($token){
        indexIngredient().then(()=>{
            indexListItems();
            indexRecipe();
        })
    } else {
        ingredients.set({});
        listItems.set({})
        recipes.set({})
    }
</script>

<div class="User">
{#if $token == ""}
    <button class="SignIn" on:click={()=>signningIn=true}>Sign In</button>
{:else}
    <UserIcon />
{/if}
</div>

{#if signningIn == true || $token == ""}
    <FormSignIn close={()=>signningIn=false} />
{/if}


<style>
    .User {
        margin-bottom: 40px;
    }

    .SignIn {
        width: 80px;
        height: 40px;
        background-color: rgb(212, 139, 3);
        border-radius: 10px;
    }

    button:hover {
        filter: brightness(120%);
    }

</style>