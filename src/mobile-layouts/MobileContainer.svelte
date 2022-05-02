<script>
import { token } from "$src/stores/User";
import LoginScreen from "./LoginScreen/LoginScreen.svelte";

</script>



<section>
    {#if !$token}
        <LoginScreen />
    {/if}
</section>