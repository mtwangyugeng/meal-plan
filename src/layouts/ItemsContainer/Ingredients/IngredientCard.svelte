<script>
import LoadingScreen from "$src/layouts/_LoadingScreen.svelte";

    export let id="";
    export let name;
    export let store;
    export let amount;
    export let unit;
    export let price;

    export let request = async () => {};
    
let loading = false;
const handleClick = async () => {
    loading = true;
    const status = await request();
    loading = false;
}
</script>


<div class="Card" on:click={handleClick}>
    <h3>{name ? name : '<name>'}</h3>
    <i>id: #{id ? id : '<id>'}</i>
    <p>Store: {store ? store: '<store>'}</p>
    {#if (amount || unit || price)}
        <p>Package: {amount ? amount: "-"} {unit ? unit: "-"} / ${price ? (price/100.00).toFixed(2) : "--.--"}</p>
    {:else}
        <p>Package: {"<package>"}</p>
    {/if}

    {#if loading}
    <LoadingScreen />
    {/if}
</div>



<style>
    .Card {
        background-color: white;
        -webkit-box-shadow: 8px 5px 8px -8px #000000; 
        box-shadow: 8px 5px 8px -8px #000000;
        color: #000000;
        position: relative;
    }
    .Card > h3 {
        text-align: center;
    }

    :global(.Card) {
        /* background-color: white; */
        width: 190px;
        height: 100px;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;

        cursor: pointer;
        user-select: none;
    }

    :global(.Card):hover {
        filter:brightness(90%);
    }
</style>