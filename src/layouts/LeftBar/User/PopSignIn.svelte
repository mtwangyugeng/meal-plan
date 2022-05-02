<script>
import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
import FormSignIn from "./FormSignIn.svelte";

    export let close;

    let shake = false;
    let errorMessage = "";
    let title = ""

    const handleTitleChange = (imp) => {
        title = imp;
    }

    const handleError = (msg) => {
        errorMessage = msg;
        shake = true;
        setTimeout(()=>shake=false, 500);
    }

    const handleSuccess = () => {
        close();
    }
</script>

<PopoutMessage shake={shake} errorMessage={errorMessage} title={title}>
    <FormSignIn handleError={handleError} handleSuccess={handleSuccess} handleTitleChange={handleTitleChange}/>
</PopoutMessage>