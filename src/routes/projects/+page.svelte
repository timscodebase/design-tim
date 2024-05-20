<svelte:options runes={true} />

<script lang="ts">
	import { Project } from '$lib'

	import { page } from '$app/stores'

	let { projects } = $page.data
</script>

<svelte:head>
	<title>Tim Smith's Projects</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here are some of the projects I've worked on." />
</svelte:head>

<h2>My Latest Projects</h2>

<div>
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
	}

	@media (max-width: 500px) {
		div {
			grid-template-columns: 1fr;
		}
	}
</style>
