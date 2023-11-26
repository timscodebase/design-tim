<script lang="ts">
	import { Tag } from '$lib'
	export let categories: string[] = []
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
		padding-top: var(--padding-sm);
		gap: var(--gap);
	}
</style>
