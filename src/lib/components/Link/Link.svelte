<script lang="ts">
	import 'iconify-icon'
	const { external = false, href = '/' } = $props<{ external?: boolean; href: string }>()
</script>

{#if external}
	<a {href} target="_blank" rel="noopener" data-sveltekit-preload-data="preload">
		<slot />
		<iconify-icon icon="mdi:open-in-new" />
	</a>
{:else}
	<a {href} data-sveltekit-preload-data="preload">
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

	[aria-current='page'] {
		background: var(--primary-2);
		color: var(--reverse-text);
		padding: 3px 5px;
		view-transition-name: active-page;
	}
</style>
