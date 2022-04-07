<script>
import {searchRegex} from "./stores/Search";
import {currTab} from "./stores/Tab";

$: console.log($searchRegex);
$: console.log($currTab);
</script>

<main>
</main>

<style>
  main {
		height: 100vh;
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(ul), :global(ol) {
		list-style-type: none;
	}

	:root {
		scroll-behavior: smooth;
	}

	:global(button), :global(input[type="submit"]), :global(input[type="reset"]) {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>
