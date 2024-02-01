<script lang="ts">
	import 'iconify-icon'
	export let href = '/'
	export let external = false
	import { page } from '$app/stores'

	let path = $page.url.pathname

	console.log('HREF:', href)
</script>

{#if external}
	<a {href} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<slot />
		<iconify-icon icon="mdi:open-in-new" />
	</a>
{:else}
	<a
		class:active={path === href ? true : false}
		aria-current={path === href ? 'page' : 'false'}
		{href}
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
