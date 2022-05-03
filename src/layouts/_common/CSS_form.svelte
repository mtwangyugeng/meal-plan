<span>
    <slot />
</span>

<style>
    span {
        width: 100%;
    }
    span :global(form) {
        display: flex;
        flex-direction: column;
        width:100%;
    }

    span :global(input:not([type="submit"])), :global(textarea) {
        padding: 10px;
        border-radius: 10px;

        background-color: rgb(252, 204, 149);
        border: none;
        margin: 2px;
        font-size: 18px;
    }
    span :global(input:not([type="submit"])):focus, :global(textarea):focus {
        outline: 1px solid #f77e2e;
    }

    span :global(input[type="submit"]) {
        background-color: rgb(216, 141, 3);
        padding: 20px;
        margin-top: 20px;
        color: white;
        border-radius: 5px;
    }
    span :global(input[type="submit"]):hover {
        background-color: orange
    }
</style>