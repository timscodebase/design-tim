<script lang="ts">
	import type { PageData } from './$types'
	import { Project } from '$lib'

	export let data: PageData

	const { projects } = data
	console.log('Projects: ', projects)
</script>

<h2>Projects</h2>

{#each projects as project}
	<Project {project} />
{/each}
