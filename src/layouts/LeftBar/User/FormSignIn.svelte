<script>
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import { postSignup, postSignin } from "$src/stores/User";

let creating = false;
export let close;

let loading = false;
let errorMessage = "";
let shake = false;
const handleSubmit = async () => {
    try{
        if (username.length <= 6) {
            throw new Error("Username: must be 6 more characters.")
        }
        if (creating) {
            if (password.length <= 6) {
                throw new Error("Password: must be 6 more characters.")
            }
            if(username && password === confirmPassword) {
                loading = true;
                const status = await postSignup({"username":username, "password":password})
                loading = false;
                if(status == 201) {
                    close();
                }
            } else {
                throw new Error("Password and Confirm Password must match.")
            }
        } else {
            loading = true;
            const status = await postSignin({"username":username, "password":password})
            loading = false;
            if(status == 202) {
                close();
            } else {
                loading = false;
            }
        }
    }catch (e) {
        errorMessage = e.message;
        loading = false;
        shake = true;
        setTimeout(()=>shake=false, 500);
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

<PopoutMessage on:click={close} shake={shake}>
<form on:submit|preventDefault={handleSubmit}>
    <h2>{creating ? "Create Account": "Log in"}</h2>

    <p class="Error">{errorMessage}</p>

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
</PopoutMessage>

<style>
h2 {
    margin-top: 10px;
    margin-bottom: 20px;
}
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

.Error {
    color: red;
    height: 20px;
    padding-left: 8px;
}

</style>