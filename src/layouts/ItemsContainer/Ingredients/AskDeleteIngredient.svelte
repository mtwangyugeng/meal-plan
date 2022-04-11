<script>
    export let close;
</script>

<div class="AskDelete">
    <div class="Message">Delete Ingredient?</div>

    <div class="Chooses">
        <button on:click={close}>Yes</button>
        <button on:click={close}>Cancel</button>
    </div>

</div>

<style>
    .AskDelete {
        background-color: white;
        margin-bottom: 300px;
        padding: 30px;
        border-radius: 10px;
    }
    .Chooses {
        display: flex;
        justify-content: space-between;
    }
    .Message {
        margin-bottom: 20px;
    }
</style>