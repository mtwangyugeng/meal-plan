<script>
   import {user, token} from "$src/stores/User"
</script>

<div class="User">
{#if $token == ""}
    <button class="SignIn">Sign In</button>
{:else}
    <button>Logout</button>
    <div>{$user.email}</div>
{/if}
</div>


<style>
    .SignIn {
        width: 80px;
        height: 40px;
        background-color: lightblue;
        border-radius: 10px;
    }

    button:hover {
        filter: brightness(120%);
    }

</style>