<script>
import ItemsContainer from "./ItemsContainer/ItemsContainer.svelte";
import LeftBar from "./LeftBar/LeftBar.svelte";
import SearchBar from "./SearchBar.svelte";
import ShoppingList from "./ShoppingList.svelte";


</script>

<section>
    <LeftBar />
    <div class="MidContainer">
        <SearchBar />
        <ItemsContainer />
    </div>
    <ShoppingList />
</section>


<style>
    section {
        display: flex;
        /* justify-content: space-between; */

        background-color: black;
        height: 100%;
        width: 100%;
    }

    section > :global(.LeftBar) {
        background-color: grey;
        width: 150px;
    }

    section > :global(.ShoppingList) {
        background-color: lightblue;
        width: 400px;
    }

    .MidContainer {
        background-color: lightgrey;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .MidContainer > :global(.SearchBar) {
        background-color: pink;
        height: 100px;
    }

    .MidContainer > :global(.ItemsContainer) {
        background-color: lightgreen;
        height: 100%;
        overflow: auto;
    }
</style>