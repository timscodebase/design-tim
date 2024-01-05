<script lang="ts">
	import 'iconify-icon'
	export let external: boolean = false
	export let href: string = ''
	export let className: string = ''
</script>

{#if external}
	<a {href} class={className} target="_blank" rel="noopener" data-sveltekit-preload-data>
		<iconify-icon icon="mdi:open-in-new" />
		<slot />
	</a>
{:else}
	<a {href} class={className} data-sveltekit-preload-data>
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

	.github {
		color: #6e5494;
	}

	.linkedin {
		color: #0077b5;
	}
</style>
