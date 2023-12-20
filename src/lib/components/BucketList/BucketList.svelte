<script lang="ts">
	import type { GoalType } from '$lib/types'
	import { Grid } from '$lib'
	import List from './list.json'
	import Item from './Item.svelte'

	let bucketList: GoalType[] = List
</script>

<h3>My BucketList...</h3>

<Grid>
	{#each bucketList as item}
		<Item {item} />
	{/each}
</Grid>

<style>
	h3 {
		color: var(--primary-2);
	}
</style>
