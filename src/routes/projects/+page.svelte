<script lang="ts">
	import type { PageData } from './$types'
	import { Project, Masonry } from '$lib'

	export let data: PageData

	const { projects } = data
</script>

<h2>Projects</h2>

<Masonry>
	{#each projects as project}
		<Project {project} />
	{/each}
</Masonry>
