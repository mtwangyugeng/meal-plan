<script>
import MainContainer from "./layouts/MainContainer.svelte";
import MobileContainer from "./mobile-layouts/MobileContainer.svelte";

let mode = null;
</script>

{#if !mode}
    <section>
        <h1>Choose Your Device</h1>
        <div>
        <button on:click={()=>mode="desktop"}>Desktop</button>
        <button on:click={()=>mode="mobile"}>Mobile</button>
    </div>
    </section>
{:else if mode === "desktop"}
    <MainContainer />
{:else if mode === "mobile"}
    <MobileContainer />
{/if}

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
        background-color: orange;
        flex-direction: column;
        flex-wrap: wrap;
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