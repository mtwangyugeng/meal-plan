<script>
import GithubIcon from "$src/assets/GithubIcon.svelte";
import LinkedInIcon from "$src/assets/LinkedInIcon.svelte";

</script>

<div class="Connections">
    <hr />
    <section>
        <span class="LinkedIn">
            <LinkedInIcon />
        </span>
        <span class="Github">
            <GithubIcon />
        </span>
    </section>
</div>

<style>
    span {
        cursor: pointer;
    }
    .LinkedIn:hover :global(path){
        transition: fill 0.2s;
        fill: rgb(57, 57, 189);
    }
    .Github:hover :global(path){
        transition: fill 0.2s;
        fill: rgb(0, 0, 0);
    }

    .Connections {
        width: 100%;
    }

    section {
        width: 100%;
        padding: 10px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: green */
    }

    hr {
        width: 100%;
        border: 1px solid rgb(248, 115, 7);
    }

    section :global(svg) {
        height: 40px;
        width: 40px;
    }
</style>