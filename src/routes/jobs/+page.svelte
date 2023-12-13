<script lang="ts">
	import type { PageData } from './$types'
	import { Job } from '$lib'

	export let data: PageData

	const { jobs } = data
</script>

<h2>Past Work</h2>

<div class="jobs">
	{#each jobs as job}
		<Job {job} />
	{/each}
</div>

<style>
	.jobs {
		display: grid;
		gap: var(--gap);
	}
</style>
