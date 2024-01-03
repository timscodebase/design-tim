<script lang="ts">
	export let external: boolean = false
	export let href: string = ''
	export let className: string = ''
</script>

{#if external}
	<a {href} class={className} target="_blank" rel="noopener" data-sveltekit-reload>
		<slot />
	</a>
{:else}
	<a {href} class={className} data-sveltekit-reload>
		<slot />
	</a>
{/if}

<style>
	a {
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
		font-size: var(--body-font-family);
	}

	.github {
		color: #6e5494;
	}

	.linkedin {
		color: #0077b5;
	}
</style>
