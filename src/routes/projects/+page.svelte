<script lang="ts">
	import type { PageData } from './$types'
	import { Grid, Project } from '$lib'

	export let data: PageData

	const { projects } = data
</script>

<h2>Projects</h2>

<Grid>
	{#each projects as project}
		<Project {project} />
	{/each}
</Grid>
