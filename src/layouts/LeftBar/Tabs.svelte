<script>
    import {TABS, currTab} from "$src/stores/Tab"


</script>


<div class="Tabs">
{#each TABS as tab (tab)}
    <button class={$currTab == tab && "active"} 
        on:click={()=>currTab.set(tab)}>
        {tab}
    </button>
{/each}
</div>


<style>
    .Tabs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        background-color: rgb(136, 124, 124);
        height: 50px;
        width: 50px;
        margin-bottom: 10px;
        border-radius: 50%;

        overflow: hidden;
        word-wrap: break-word;
    }

    .active {
        color: white
    }


</style>