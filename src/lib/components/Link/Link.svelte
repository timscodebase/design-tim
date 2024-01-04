<script lang="ts">
	export let external: boolean = false
	export let href: string = ''
</script>

{#if external}
	<a {href} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<slot />
	</a>
{:else}
	<a {href} data-sveltekit-preload-data>
		<slot />
	</a>
{/if}

<style>
	a {
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
		font-size: var(--body-font-family);
	}
</style>
