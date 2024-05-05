<svelte:options runes={true} />

<script lang="ts">
    const { categories } = $props<{ categories: Tag[] }>();
</script>

{#snippet tag(category)}
	<span class="category">&num;{category}</span>
{/snippet}

<div class="tags">
	{#each categories as category}
		{@render tag(category)}
	{/each}
</div>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		padding: var(--padding-sm) 0;
		gap: var(--gap);
	}
</style>
