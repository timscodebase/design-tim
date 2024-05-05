<svelte:options runes={true} />

<script lang="ts">
  const { category } = $props<{ category: string }>();
</script>

<span class="category">&num;{category}</span>

<style>
	.category {
		color: var(--primary);
		font-weight: bold;
	}
</style>
