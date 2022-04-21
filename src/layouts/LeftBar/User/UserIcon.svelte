<script>
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";

    import YesCancel from "$src/layouts/_YesCancel.svelte";
import {user, logout} from "$src/stores/User"

    let loggingOut = false;
</script>

<div class="Container">
    <button class="UserIcon" title={$user.username}>
        {$user.username[0]}
    </button>

    <div class="RightSide">
        <div>
            {$user.username}
        </div>
        <button class="LogOut" on:click={()=>loggingOut=true}>
            Log Out
        </button>
    </div>
</div>

{#if loggingOut}
<PopoutMessage on:click={()=>loggingOut = false}>
    <YesCancel 
        message = "Log Out?"
        handleYes = {logout} 
        close = {() => loggingOut = false}
    />
</PopoutMessage>
{/if}


<style>
    .UserIcon {
        text-transform: uppercase;
        font-weight: bold;
        background-color: rgb(141, 2, 2);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px
    }

    .LogOut {
        margin-top: 10px;
        background-color: rgb(196, 117, 0);
        padding: 10px;
        border-radius: 10px;
    }

    .LogOut:hover {
        filter: brightness(120%)
    }

    .Container {
        display: flex;
        align-items: center;
    }
</style>