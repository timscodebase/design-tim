<script lang="ts">
	import 'iconify-icon'
	export let external: boolean = false
	export let href: string = ''
</script>

{#if external}
	<a {href} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<slot />
		<iconify-icon icon="mdi:open-in-new" />
	</a>
{:else}
	<a {href} data-sveltekit-preload-data>
		<slot />
	</a>
{/if}

<style>
	a {
		display: flex;
		gap: 5px;
		align-items: center;
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
		font-size: var(--body-font-family);
		word-break: break-word;
	}
</style>
