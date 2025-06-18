<script>
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: masonry;
		grid-gap: var(--gap);
		margin-top: var(--margin-md);
	}
</style>
