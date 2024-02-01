<script lang="ts">
	import 'iconify-icon'
	const { external = false, to = '/' } = $props<{ external?: boolean; to: string }>()
</script>

{#if external}
	<a href={to} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<slot />
		<iconify-icon icon="mdi:open-in-new" />
	</a>
{:else}
	<a href={to}>
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
