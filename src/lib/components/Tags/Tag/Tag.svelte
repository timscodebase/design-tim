<script lang="ts">
	let { category } = $props()
</script>

<span class="category">&num;{category}</span>

<style>
	.category {
		color: var(--primary);
		font-weight: bold;
	}
</style>
