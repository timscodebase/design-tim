<script lang="ts">
	import type { PageData } from './$types'
	import { Link, Grid, Job } from '$lib'

	import resume from '$lib/img/resume.pdf'

	export let data: PageData

	const { jobs } = data
</script>

<p class="flashy">
I am actively looking to secure a dynamic Full-Stack Engineer role within an innovative organization, where I can channel my technical prowess and creative flair to craft and maintain cutting-edge, user-friendly websites with a focus on responsiveness and visual appeal.
</p>

<p class="inline">
	Checkout my <Link href={resume} external={true}>
	Resume</Link> to find out more.
</p>

<h2>Past Work</h2>

<div>
	{#each jobs as job}
		<Job {job} />
	{/each}
</div>

<style>
	.inline {
		display: flex;
		align-items: center;
	}
	.flashy {
		--turn: 1turn;
		color: var(--primary-2);
		font-size: clamp(1.5rem, 1.75svw, 2rem) !important;
		background: linear-gradient(var(--turn), var(--primary-2), var(--primary));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: spin-gradient 6s infinite;
		padding-top: var(--padding-lg);
	}
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--gap);
	}
</style>
