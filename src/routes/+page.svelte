<svelte:options runes={true} />

<script lang="ts">
	import { Fancy, PapiQuote, SkillGrid, Teacher } from '$lib'

	import { page } from '$app/stores'

	let { teachers, topSkills } = $page.data
</script>

<Fancy>
	As a self-directed learner, I've developed a unique approach to knowledge acquisition. While I've
	explored traditional education, my true expertise stems from a lifelong passion for self-study and
	hands-on experimentation. From reverse engineering websites to exploring new technologies, I'm
	driven by an insatiable curiosity and a desire to stay ahead of the curve. Throughout my learning
	journey, I've been fortunate to have had the guidance of many influential mentors and resources.
	Here, you'll find some of the individuals and sources that have shaped my understanding of the
	world and fueled my passion for continuous learning.
</Fancy>

<div class="teachers">
	{#each teachers as teacher}
		<Teacher {teacher} />
	{/each}
</div>

<PapiQuote />

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
