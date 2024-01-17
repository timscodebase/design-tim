<script lang="ts">
	export let category: string
</script>

<span class="category">&num;{category}</span>

<style>
	.category {
		color: var(--primary);
		font-weight: bold;
	}
</style>
