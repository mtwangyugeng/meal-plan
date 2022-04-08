<script>
import Tabs from "./Tabs.svelte";
import User from "./User.svelte";


</script>

<div class="LeftBar">
    <div class="container">
        <Tabs />
        <User />
    </div>
</div>

<style>
    .LeftBar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        height: 90%;
        width: 90%;
        background-color: rgb(255, 114, 58);
        border-radius: 50px;
        padding-top: 50px;
        padding-bottom: 50px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>
