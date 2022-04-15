<script>
    export let close;
</script>

    <div class="Message">Delete Ingredient?</div>
    <div class="Chooses">
        <button on:click={close}>Yes</button>
        <button on:click={close}>Cancel</button>
    </div>


<style>
    .Chooses {
        display: flex;
        justify-content: space-between;
    }
    .Message {
        margin: 20px;
    }

    button {
        margin: 10px;
    }
</style>