<svelte:options runes={true} />

<script lang="ts">
const { children, liClass } = $props<{ liClass: string }>();
</script>

<li class={liClass}>
	{@render children()}
</li>

<style>
	li {
		display: block;
		padding: 1px 2px;
		border-radius: 6px;
		color: var(--primary-2);
	}
</style>
