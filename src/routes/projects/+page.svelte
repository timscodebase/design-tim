<script lang="ts">
	import type { PageData } from './$types'
	import { Project, Masonry } from '$lib'

	export let data: PageData

	const { projects } = data
</script>

<svelte:head>
	<title>Tim Smith Projects</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here are some of the projects I've worked on." />
</svelte:head>

<h2>Projects</h2>

<Masonry>
	{#each projects as project}
		<Project {project} />
	{/each}
</Masonry>
