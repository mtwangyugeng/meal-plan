<script>
import GithubIcon from "$src/assets/GithubIcon.svelte";
import LinkedInIcon from "$src/assets/LinkedInIcon.svelte";

const goLink = (link) => {
    return ()=>window.open(link);
}
</script>

<div class="Connections">
    <hr />
    <section>
        <span class="LinkedIn" on:click={goLink("https://www.linkedin.com/in/yu-geng-simon-wang/")}>
            <LinkedInIcon />
        </span>
        <span class="Github" on:click={goLink("https://github.com/mtwangyugeng/meal-plan")}>
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