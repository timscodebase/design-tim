<script lang="ts">
	import type { PageData } from './$types'
	import { Link, SkillGrid, Teacher } from '$lib'

	export let data: PageData

	const { teachers, topSkills } = data
</script>

<p>
	My cognitive gears turn in their unique way, making the conventional educational path a mismatch
	for me. While I dabbled in a few college courses, my true knowledge reservoir comes from the
	realms of self-study and hands-on experimentation—like the art of reverse engineering websites.
	Fueled by an insatiable passion for learning, I constantly seek fresh avenues to refine my skills
	and navigate the ever-evolving landscape. Join me as I recount encounters with some of the most
	influential educators who have illuminated my learning journey
</p>

<div class="teachers">
	{#each teachers as teacher}
		<Teacher {teacher} />
	{/each}
</div>

<h2>Here are my most used skilled</h2>
<SkillGrid skills={topSkills} />
<Link href="/skills">See all my skills</Link>

<style>
	p {
		color: var(--primary);
	}

	.teachers {
		display: grid;
		gap: var(--gap);
	}
</style>
