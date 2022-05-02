<script>
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
import { postSignup, postSignin } from "$src/stores/User";

export let handleTitleChange;

let creating = false;
$: creating ? handleTitleChange("Create Account") : handleTitleChange("Log in")

let loading = false;

export let handleError;
export let handleSuccess;

const handleSubmit = async () => {
    try{
        if (username.length <= 6) {
            throw new Error("Username: must be 7 or more characters.")
        }
        if (creating) {
            if (password.length <= 6) {
                throw new Error("Password: must be 7 or more characters.")
            }
            if(username && password === confirmPassword) {
                loading = true;
                const status = await postSignup({"username":username, "password":password})
                loading = false;
                if(status == 201) {
                    handleSuccess();
                } else {
                    throw new Error("Username already exists")
                }
            } else {
                throw new Error("Password and Confirm Password must match.")
            }
        } else {
            loading = true;
            const status = await postSignin({"username":username, "password":password})
            loading = false;
            if(status == 202) {
                handleSuccess();
            } else {
                loading = false;
                throw new Error("Check username and password")
            }
        }
    }catch (e) {
        loading = false;
        handleError(e.message);
    }
}

let username = "";
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

    <input bind:value={username} placeholder="User Name" />
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

{#if loading}
    <LoadingScreen />
{/if}

<style>

form {
    width: 400px;
}

.Bottom {
    margin-top: 10px;
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