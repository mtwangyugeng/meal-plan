<script>
let creating = false;
</script>

<form>
    <h2>{creating ? "Create Account": "Log in"}</h2>
    <input placeholder="User Name" />
    <input placeholder="Password" />
    {#if creating}
        <input placeholder="Confirm Password" />
        <div class="Bottom">
            <div class="Switch" on:click={()=>creating=false}>Log In</div>
            <input type="submit" value="Create Account" />
        </div>
    {:else}
        <div class="Bottom">
            <div class="Switch" on:click={()=>creating=true}>Create Account</div>
            <input type="submit" value="Log In" />
        </div>
    {/if}
    
    
</form>


<style>

form {
    width: 400px;
}

.Bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.Switch{
    user-select: none;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 10px;
}
</style>