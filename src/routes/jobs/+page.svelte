<script lang="ts">
	import type { PageData } from './$types'
	import { Grid, Job } from '$lib'

	export let data: PageData

	const { jobs } = data
</script>

<h2>Past Work</h2>

<Grid>
	{#each jobs as job}
		<Job {job} />
	{/each}
</Grid>
