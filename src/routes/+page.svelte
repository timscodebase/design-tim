<script lang="ts">
	import type { PageData } from './$types'
	import { BucketList, Link, SkillGrid, Teacher, Quote } from '$lib'

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

<style>
	p {
		--turn: 1turn;
		color: var(--primary-2);
		font-size: clamp(1.5rem, 1.75svw, 2rem) !important;
		background: linear-gradient(var(--turn), var(--primary-2), var(--primary));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: spin-gradient 6s infinite;
	}

	@media (max-width: 500px) {
		p {
			text-align: justify;
		}
	}

	.teachers {
		display: grid;
		gap: var(--gap);
		margin-bottom: var(--margin-lg);
		padding-bottom: var(--padding-lg);
		border-bottom: var(--primary) 4px solid;
	}
</style>
