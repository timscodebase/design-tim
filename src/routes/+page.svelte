<svelte:options runes={true} />

<script lang="ts">
	import { Fancy, SkillGrid, Teacher } from '$lib'

	import { page } from '$app/stores'

	let { teachers, topSkills } = $page.data
</script>

<Fancy>
	My cognitive gears turn in their unique way, making the conventional educational path a mismatch
	for me. While I dabbled in a few college courses, my true knowledge reservoir comes from the
	realms of self-study and hands-on experimentation—like the art of reverse engineering websites.
	Fueled by an insatiable passion for learning, I constantly seek fresh avenues to refine my skills
	and navigate the ever-evolving landscape. The following are some of my favorite teachers:
</Fancy>

<div class="teachers">
	{#each teachers as teacher}
		<Teacher {teacher} />
	{/each}
</div>

<SkillGrid skills={topSkills} />

<style>
	.teachers {
		display: grid;
		gap: var(--gap);
		margin-bottom: var(--margin-lg);
		padding-bottom: var(--padding-lg);
		border-bottom: var(--primary) 4px solid;
	}
</style>
