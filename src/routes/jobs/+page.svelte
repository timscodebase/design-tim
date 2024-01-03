<script lang="ts">
	import type { PageData } from './$types'
	import { Grid, Job } from '$lib'

	export let data: PageData

	const { jobs } = data
</script>

<h2>Past Work</h2>

<div>
	{#each jobs as job}
		<Job {job} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--gap);
	}
</style>
