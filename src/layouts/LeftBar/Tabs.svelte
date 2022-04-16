<script>
    import IngredientIcon from "$src/assets/IngredientIcon.svelte";
    import RecipeIcon from "$src/assets/RecipeIcon.svelte";

    import {TABS, currTab} from "$src/stores/Tab"

    const icons = {
        [TABS[0]]: IngredientIcon,
        [TABS[1]]: RecipeIcon
    }
</script>


<div class="Tabs">
{#each TABS as tab (tab)}
    <button class={$currTab == tab && "active"} 
        on:click={()=>currTab.set(tab)}>
        <svelte:component this={icons[tab]} />
        {tab}
    </button>
{/each}
</div>


<style>
    .Tabs {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        /* background-color: #fff; */
    }

    button {
        background-color: rgb(252, 90, 26);
        height: 50px;
        width: 100%;
        margin-bottom: 10px;
        /* border-radius: 50%; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 15px;

        overflow: hidden;
        word-wrap: break-word;
    }
    button :global(svg) {
        width: 30px;
        height: 30px;
    }

    button:not(.active):hover :global(svg) {
        animation-name: shake;
        animation-duration: 100ms;
        animation-iteration-count: 2;
        animation-timing-function: linear; 
    }

    @keyframes shake {
    from {
        transform:rotate(-10deg);
    }
    to {
        transform:rotate(10deg);
    }
}

    .active {
        color: white;
        background-color: rgb(253, 163, 104);
        transition: all 0.2s;
    }

    .active :global(svg) {
        transition: all 0.2s;
        width: 40px;
        height: 40px;
    }

</style>