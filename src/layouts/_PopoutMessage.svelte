<script>
    export let title = "";
</script>

<div class="PopoutMessage">
    <div class="container">
        <div class="cross" on:click>x</div>
        <h2>{title}</h2>
    <slot />
    </div>
</div>


<style>
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

    .PopoutMessage :global(input:not([type="submit"])) {
        padding: 10px;
        border-radius: 10px;

        background-color: rgb(252, 204, 149);
        border: none;
        margin: 2px;
    }
    .PopoutMessage :global(input:not([type="submit"])):focus {
        outline: 1px solid #000000;
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
</style>