<script>
import FormSignIn from "$src/layouts/LeftBar/User/FormSignIn.svelte";
import CSS_form from "$src/layouts/_common/CSS_form.svelte";

const handleTitleChange = (imp) => {
    }

    const handleError = (msg) => {
    }

    const handleSuccess = () => {
    }

</script>

<section>
    <CSS_form>
        <FormSignIn handleError={handleError} handleSuccess={handleSuccess} handleTitleChange={handleTitleChange} />
    </CSS_form>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100vh;
        background-color: #888;
        padding: 10px;
    }
</style>