<script lang="ts">
	export let external: boolean = false
	export let href: string = ''
	export let className: string = ''
</script>

{#if external}
	<a {href} class={className} target="_blank" rel="noopener">
		<slot />
	</a>
{:else}
	<a {href} class={className}>
		<slot />
	</a>
{/if}

<style>
	a {
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
	}

	.github {
		color: #6e5494;
	}

	.linkedin {
		color: #0077b5;
	}
</style>
