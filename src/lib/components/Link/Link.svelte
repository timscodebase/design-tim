<script lang="ts">
	import 'iconify-icon'
	import { page } from '$app/stores'
	const { external = false, to = '/' } = $props<{ external?: boolean; to: string }>()
</script>

{#if external}
	<a href={to} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<slot />
		<iconify-icon icon="mdi:open-in-new" />
	</a>
{:else}
	<a href={to} aria-current={$page.route.id === to ? 'page' : undefined}>
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

	/* [aria-current='page'] {
		background: var(--primary-2);
		color: var(--reverse-text);
		padding: 3px 5px;
		view-transition-name: active-page;
	} */
</style>
