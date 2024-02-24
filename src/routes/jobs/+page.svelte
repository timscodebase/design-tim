<script lang="ts">
	import { Link, Fancy, Job } from '$lib'

	import resume from '$lib/assets/resume-2024.pdf'

	import { page } from '$app/stores'

	const { jobs } = $page.data
</script>

<svelte:head>
	<title>Tim Smith Jobs</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="Here is my past work experience." />
</svelte:head>

<h2>Jobs</h2>

<Fancy>
	I am actively looking to secure a dynamic Full-Stack Engineer role within an innovative
	organization, where I can channel my technical prowess and creative flair to craft and maintain
	cutting-edge, user-friendly websites with a focus on responsiveness and visual appeal.
</Fancy>

<p class="inline">
	Checkout my <Link href={resume} external>Resume</Link> to find out more.
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
