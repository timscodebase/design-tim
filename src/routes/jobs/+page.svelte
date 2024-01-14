<script lang="ts">
	import type { PageData } from './$types'
	import { Link, Grid, Job } from '$lib'

	import resume from '$lib/assets/resume.pdf'

	export let data: PageData

	const { jobs } = data
</script>

<svelte:head>
	<title>Tim Smith Jobs</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here is my past work experience." />
</svelte:head>

<h2>Past Work</h2>

<p class="flashy">
	I am actively looking to secure a dynamic Full-Stack Engineer role within an innovative
	organization, where I can channel my technical prowess and creative flair to craft and maintain
	cutting-edge, user-friendly websites with a focus on responsiveness and visual appeal.
</p>

<p class="inline">
	Checkout my <Link href={resume} external={true}>Resume</Link> to find out more.
</p>

<div>
	{#each jobs as job}
		<Job {job} />
	{/each}
</div>

<style>
	.inline {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--gap);
	}
</style>
