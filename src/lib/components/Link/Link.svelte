<svelte:options runes={true} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const { children, className = '', external = false, href = '/' } = $props<{
		className?: string
		external?: boolean
		href: string
	}>()

	onMount(() => {
		const EI = document.querySelector('.ei')
		if (EI) {
			EI.addEventListener('mouseover', () => {
				EI.innerHTML = `
					Environmental Impact
					<iconify-icon icon="mdi:open-in-new"></iconify-icon>
				`
			})
			EI.addEventListener('mouseleave', () => {
				EI.innerHTML = `
					EI
					<iconify-icon icon="mdi:open-in-new"></iconify-icon>
				`
			})

			EI.addEventListener('touchstart', () => {
				EI.innerHTML = `
					Environmental Impact
					<iconify-icon icon="mdi:open-in-new"></iconify-icon>
				`
			})
			EI.addEventListener('touchend', () => {
				EI.innerHTML = `
					EI
					<iconify-icon icon="mdi:open-in-new"></iconify-icon>
				`
			})
		}
	})
</script>

{#if external}
	<a class={className} aria-current={$page.route.id === href ? 'page' : undefined} {href} target="_blank" rel="noopener" data-sveltekit-preload-data="viewport">
		{@render children()}
		<iconify-icon icon="mdi:open-in-new"></iconify-icon>
	</a>
{:else}
	<a {href}>
		{@render children()}
	</a>
{/if}

<style>
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
		transition: all 0.3s ease;
	}
</style>
