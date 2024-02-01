<script lang="ts">
	import { Tag } from '$lib'
	const { categories } = $props<{ categories: Tag[] }>()
</script>

<div class="tags">
	{#each categories as category}
		<Tag {category} />
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
