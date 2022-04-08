<script>
   import {user, token} from "$src/stores/User"
</script>

<div class="User">
{#if $token == ""}
    <button>Sign In</button>
{:else}
    <button>Logout</button>
    <div>{$user.email}</div>
{/if}
</div>