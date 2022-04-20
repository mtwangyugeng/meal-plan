<script>
    import PopoutMessage from "./_PopoutMessage.svelte";

    export let message = "Yes or Cancel";

    export let close;
    export let handleYes;
</script>


<section>
    <div class="Message">{message}</div>
    <div class="Chooses">
        <button class="Yes" on:click={handleYes}>Yes</button>
        <button on:click={close}>Cancel</button>
    </div>
</section>


<style>
    section {
        color: rgb(150, 67, 0);
        /* background-color: white; */
    }

    .Chooses {
        display: flex;
        justify-content: space-between;
    }
    .Message {
        margin: 20px;
        text-align: center;
    }

    button {
        margin: 10px;
        width: 80px;
        height: 40px;
        color: white;
        border-radius: 10px;
        background-color: rgb(207, 0, 0);
    }
    button:hover {
        filter: brightness(120%);
    }

    .Yes {
        background-color: rgb(12, 146, 0);
    }
</style>