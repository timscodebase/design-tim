<script lang="ts">
	import 'iconify-icon'
	export let external: boolean = false
	export let href: string = ''
	import { page } from '$app/stores'

	$: currentRoute = $page.url.pathname
</script>

{#if external}
	<a {href} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<slot />
		<iconify-icon icon="mdi:open-in-new" />
	</a>
{:else}
	<a
		class:active={currentRoute === href ? true : false}
		aria-current={currentRoute === href ? 'page' : 'false'}
		{href}
		data-sveltekit-preload-data
	>
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

	.active {
		background: var(--primary-2);
		color: var(--reverse-text);
		padding: 3px 5px;
		view-transition-name: active-page;
	}
</style>
