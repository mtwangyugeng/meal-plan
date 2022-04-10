<script>
    export let id;
    export let name;
    export let store;
    export let amount;
    export let unit;
    export let price;

</script>


<div class="Card" on:click >
    <h3>{name}</h3>
    <i>#{id}</i>
    <p>Store: {store}</p>
    <p>Package: {amount} {unit} / ${(price/100.00).toFixed(2)}</p>
</div>


<style>
    .Card {
        background-color: white;
    }
    .Card > h3 {
        text-align: center;
    }

    :global(.Card) {
        /* background-color: white; */
        width: 180px;
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