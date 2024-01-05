<script lang="ts">
	import 'iconify-icon'
	export let external: boolean = false
	export let href: string = ''
</script>

{#if external}
	<a {href} class={className} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<iconify-icon icon="mdi:open-in-new" />
		<slot />
	</a>
{:else}
	<a {href} data-sveltekit-preload-data>
		<slot />
	</a>
{/if}

<style>
	a {
		display: flex;
		gap: var(--gap);
		align-items: center;
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
		color: color-mix(in srgb, var(--primary), var(--text) 75%);
		font-size: var(--body-font-family);
		word-break: break-word;
	}
</style>
