<script>
    export let title = "";
    export let shake = false;
    export let close = null;
    export let errorMessage = "";
</script>

<div class="PopoutMessage">
    <div class={"container " + (shake ? "Shake" : "")}>
        {#if close}
            <div class="cross" on:click={close}>x</div>
        {/if}
        <h2>{title}</h2>
        <p class="Error">{errorMessage}</p>

    <slot />
    </div>
</div>


<style>
    .Error {
        color: red;
        height: 20px;
        padding-left: 8px;
        height: auto;
    }
    h2 {
        margin-bottom: 10px;
    }
    .PopoutMessage{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.438);

        z-index: 3;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        background-color: rgb(255, 221, 182);
        -webkit-box-shadow: 8px 5px 8px -8px #000000; 
        box-shadow: 8px 5px 8px -8px #000000;
        margin-bottom: 200px;
        padding: 20px 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
    }

    .cross {
        position: absolute;
        right: 10px;
        top: 10px;
        user-select: none;
        cursor: pointer;
        color:rgb(119, 79, 3);
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .cross:hover{
        color:rgb(95, 0, 0);
    }

    .container :global(h2) {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color:rgb(119, 79, 3)
    }

    .PopoutMessage :global(form) {
        display: flex;
        flex-direction: column;
    }

    .PopoutMessage :global(input:not([type="submit"])), :global(textarea) {
        padding: 10px;
        border-radius: 10px;

        background-color: rgb(252, 204, 149);
        border: none;
        margin: 2px;
        font-size: 18px;
    }
    .PopoutMessage :global(input:not([type="submit"])):focus, :global(textarea):focus {
        outline: 1px solid #f77e2e;
    }

    .PopoutMessage :global(input[type="submit"]) {
        background-color: rgb(216, 141, 3);
        padding: 20px;
        margin-top: 20px;
        color: white;
        border-radius: 5px;
    }
    .PopoutMessage :global(input[type="submit"]):hover {
        background-color: orange
    }

    .Shake {
        animation: shake 0.5s;
        /* When the animation is finished, start again */
        animation-iteration-count: 1; 
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
</style>