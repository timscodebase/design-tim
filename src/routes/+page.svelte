<script lang="ts">
	import type { PageData } from './$types'
	import { BucketList, Link, SkillGrid, Teacher, Quote } from '$lib'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	export let data: PageData

	const { teachers, topSkills } = data
</script>

<Quote />

<p>
	My cognitive gears turn in their unique way, making the conventional educational path a mismatch
	for me. While I dabbled in a few college courses, my true knowledge reservoir comes from the
	realms of self-study and hands-on experimentation—like the art of reverse engineering websites.
	Fueled by an insatiable passion for learning, I constantly seek fresh avenues to refine my skills
	and navigate the ever-evolving landscape. The following are some of my favorite teachers:
</p>

<div class="teachers">
	{#each teachers as teacher}
		<Teacher {teacher} />
	{/each}
</div>

<h3>Here are my most used skilled</h3>
<SkillGrid skills={topSkills} />
<br />
<Link href="/skills">See all my skills</Link>
<br />

<BucketList />

<style>
	p {
		color: var(--primary-2);
		font-size: clamp(1.25rem, 1.75svw, 1.5rem) !important;
		background: linear-gradient(1turn, var(--primary-2), var(--primary));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: spin-gradient 6s infinite;
	}

	@keyframes spin-gradient {
		0% {
			background: linear-gradient(36deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		10% {
			background: linear-gradient(72deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		20% {
			background: linear-gradient(108deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		30% {
			background: linear-gradient(144deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		40% {
			background: linear-gradient(180deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		50% {
			background: linear-gradient(216deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		60% {
			background: linear-gradient(252deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		70% {
			background: linear-gradient(288deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		80% {
			background: linear-gradient(324deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		90% {
			background: linear-gradient(360deg, var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	.teachers {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		gap: var(--gap);
		padding-bottom: var(--padding-lg);
	}
</style>
