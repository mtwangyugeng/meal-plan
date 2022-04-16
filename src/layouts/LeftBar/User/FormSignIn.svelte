<script>
let creating = false;

const handleSubmit = () => {
    if (creating) {
        console.log("creating")
    } else {
        console.log("loggin")
    }
}

let userName = "";
let password = "";
let confirmPassword = "";

let showPassword = false;
$: passwordType = showPassword? "text" : "password";

const handlePassword = (e) => {
    password = e.target.value;
}

const handleConfirmPassword = (e) => {
    confirmPassword = e.target.value;
}
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h2>{creating ? "Create Account": "Log in"}</h2>
    <input bind:value={userName} placeholder="User Name" />
    <input on:input={handlePassword} type={passwordType} placeholder="Password" />
    {#if creating}
        <input on:input={handleConfirmPassword} type={passwordType} placeholder="Confirm Password" />
    {/if}
    <label class="ShowPassword">
        <input type="checkbox" bind:checked={showPassword} />
        Show Password
    </label>
    {#if creating}
        <div class="Bottom">
            <div class="Switch" on:click={()=>creating=false}>Log In</div>
            <input type="submit" value="Create Account" />
        </div>
    {:else}
        <div class="Bottom">
            <div class="Switch" on:click={()=>creating=true}>Create Account</div>
            <input name="submit" type="submit" value="Log In" />
        </div>
    {/if}
    
    
</form>


<style>
h2 {
    margin-bottom: 20px;
}
form {
    width: 400px;
}

.Bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.Switch {
    user-select: none;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 10px;
    font-weight: bold;
    color: brown;
}
.Switch:hover {
    color: darkred;
}

.ShowPassword {
    margin-top: 10px;
    margin-left: 5px;
    user-select: none;
    cursor: pointer;
    color: black;
}

</style>