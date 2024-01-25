<script lang="ts">
	import type { PageData } from './$types'
	import { Project } from '$lib'

	export let data: PageData

	const { projects } = data
</script>

<svelte:head>
	<title>Tim Smith Projects</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here are some of the projects I've worked on." />
</svelte:head>

<h2>Projects</h2>

<div class="grid">
	{#each projects as project}
		<Project {project} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		/* || */
		/* || */
		/* || tied to the number of spans in */
		/* \/ /lib/components/Project/Project.svelte */
		grid-template-rows: repeat(6, auto);
		grid-gap: 1rem;
		margin-top: var(--margin-md);
		container-type: inline-size;
	}
</style>
