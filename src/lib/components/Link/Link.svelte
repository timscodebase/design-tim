<svelte:options runes={true} />

<script lang="ts">
	import 'iconify-icon'
	const { external = false, href = '/' } = $props<{
		external?: boolean
		href: string
	}>()
</script>

{#if external}
	<a {href} target="_blank" rel="noopener" data-sveltekit-preload-data="viewport">
		<slot />
		<iconify-icon icon="mdi:open-in-new" />
	</a>
{:else}
	<a {href}>
		<slot />
	</a>
{/if}

<style>
	@layer typography {
		[aria-current='page'] {
			background: var(--primary-2);
			color: #000;
			padding: 3px 5px;
			view-transition-name: active-page;
		}
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
	}
</style>
