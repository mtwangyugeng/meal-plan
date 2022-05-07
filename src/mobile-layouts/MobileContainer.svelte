<script>
import { token } from "$src/stores/User";
import BottomBar from "./BottomBar/BottomBar.svelte";
import LoginScreen from "./LoginScreen/LoginScreen.svelte";
import MainContent from "./MainContent/MainContent.svelte";

</script>



<section>
    <!-- {#if !$token}
        <LoginScreen />
    {/if} -->
    <MainContent />
    <BottomBar />
</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: pink;
        
    }
</style>