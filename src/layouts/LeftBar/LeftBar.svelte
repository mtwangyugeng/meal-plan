<script>
import Connections from "./Connections.svelte";
import Tabs from "./Tabs.svelte";
import User from "./User/User.svelte";


</script>

<div class="LeftBar">
    
    <div class="container">
        <h1>Meal Plan</h1>
        <Tabs />
        <span class="Bottom">
            <User />
            <Connections />
        </span>
    </div>
</div>

<style>
    .Bottom {
        /* background-color: #fff; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .LeftBar {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        
        color: white;
        
    }

    .container {
        height: 100%;
        width: 200px;
        background-color: rgb(255, 79, 9);
        /* border-radius: 50px; */
        padding-top: 50px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

</style>
