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
		--turn: 1turn;
		color: var(--primary-2);
		font-size: clamp(1.25rem, 1.75svw, 1.5rem) !important;
		background: linear-gradient(var(--turn), var(--primary-2), var(--primary));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: spin-gradient 6s infinite;
		transition: all 6s ease-in-out;
	}

	@keyframes spin-gradient {
		0% {
			--turn: 0turn;
		}
		10% {
			--turn: 0.1turn;
		}
		20% {
			--turn: 0.2turn;
		}
		30% {
			--turn: 0.3turn;
		}
		40% {
			--turn: 0.4turn;
		}
		50% {
			--turn: 0.5turn;
		}
		60% {
			--turn: 0.6turn;
		}
		70% {
			--turn: 0.7turn;
		}
		80% {
			--turn: 0.8turn;
		}
		90% {
			--turn: 0.9turn;
		}
		100% {
			--turn: 1turn;
		}
	}

	.teachers {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		gap: var(--gap);
		padding-bottom: var(--padding-lg);
	}
</style>
