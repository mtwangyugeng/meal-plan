<script>
    export let id;
    export let name;
    export let store;
    export let amount;
    export let unit;
    export let price;
</script>


<div class="Card">
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
</style>