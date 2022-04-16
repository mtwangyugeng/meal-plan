<script>
   import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import {user, token} from "$src/stores/User"
import FormSignIn from "./FormSignIn.svelte";

   let signningIn = false;
</script>

<div class="User">
{#if $token == ""}
    <button class="SignIn" on:click={()=>signningIn=true}>Sign In</button>
{:else}
    <button>Logout</button>
    <div>{$user.email}</div>
{/if}
</div>

{#if signningIn == true}
    <PopoutMessage on:click={()=>signningIn=false}>
        <FormSignIn />
    </PopoutMessage>
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