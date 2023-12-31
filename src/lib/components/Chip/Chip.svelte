<script lang="ts">
	export let liClass: string = ''
	console.log('class: ', liClass)
</script>

<li class={liClass}>
	<slot />
</li>

<style>
	li {
		padding: var(--padding-xs) var(--padding-sm);
		border-radius: 2px;
		color: var(--reverse-text);
		/* background: color-mix(in srgb, var(--yellow), var(--text) 50%); */
		border: 4px solid var(--background), 2px solid var(--yellow);
	}
</style>
