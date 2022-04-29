<script>
import MainContainer from "./layouts/MainContainer.svelte";
import MobileContainer from "./mobile-layouts/MobileContainer.svelte";

let mode = null;

let moveUp = "";
const handleClick = (imp) => {
    return () => {
        mode = imp;
        moveUp = "MoveUp";
        // setTimeout(() => moveUp = "", 500);
    }
}
</script>

<section class={moveUp}>
    <h1>Choose Your Device</h1>
    <div>
        <button on:click={handleClick("desktop")}>Desktop</button>
        <button on:click={handleClick("mobile")}>Mobile</button>
    </div>
</section>
{#if mode === "desktop"}
    <MainContainer />
{:else if mode === "mobile"}
    <MobileContainer />
{/if}

<style>
    .MoveUp {
        animation: shake 0.5s;
        /* When the animation is finished, start again */

        animation-timing-function: ease;
        animation-fill-mode: forwards;
    }

    @keyframes shake {
        from {top: 0%}
        to {top: -100%}
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
        background-color: orange;
        flex-direction: column;
        flex-wrap: wrap;
        position: fixed;

        z-index: 100;
    }

    h1 {
        margin-bottom: 30px;
        text-align: center;
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    button {
        width: 150px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(194, 126, 1);
        margin: 10px;
    }

    button:hover {
        transition: all 0.2s;
        background-color: rgb(255, 81, 0);
    }
</style>