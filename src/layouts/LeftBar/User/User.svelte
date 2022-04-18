<script>
   import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import {token} from "$src/stores/User"
import FormSignIn from "./FormSignIn.svelte";
import UserIcon from "./UserIcon.svelte";

   let signningIn = false;
</script>

<div class="User">
{#if $token == ""}
    <button class="SignIn" on:click={()=>signningIn=true}>Sign In</button>
{:else}
    <UserIcon />
{/if}
</div>

{#if signningIn == true}
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