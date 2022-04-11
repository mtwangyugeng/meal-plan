
<div class="PopoutMessage">
    <slot />
</div>


<style>
    .PopoutMessage{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.438);

        z-index: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>