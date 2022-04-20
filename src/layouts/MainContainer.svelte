<script>
import Footer from "./Footer.svelte";
import ItemsContainer from "./ItemsContainer/ItemsContainer.svelte";
import LeftBar from "./LeftBar/LeftBar.svelte";
import SearchBar from "./SearchBar.svelte";
import ShoppingList from "./ShoppingList/ShoppingList.svelte";


</script>

<section>
    <LeftBar />
    <div class="MidContainer">
        <SearchBar />
        <ItemsContainer />
        <Footer />
    </div>
    <ShoppingList />
</section>


<style>
    section {
        display: flex;
        /* justify-content: space-between; */

        background-color: rgb(252, 190, 110);
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
    }

    section > :global(.LeftBar) {
        width: 200px;
    }

    section > :global(.ShoppingList) {
        width: 280px;
    }

    .MidContainer {
        /* background-color: lightgrey; */
        width: calc(100% - 480px);
        display: flex;
        flex-direction: column;
    }

    .MidContainer > :global(.SearchBar) {
        /* background-color: pink; */
        height: 100px;
        padding: 10px;
    }

    .MidContainer > :global(.ItemsContainer) {
        /* background-color: lightgreen; */
        height: 100%;
        overflow: auto;
    }
</style>