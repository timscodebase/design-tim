<script lang="ts">
	import type { SkillType } from '$lib/types'
	import Skill from './Skill.svelte'

	export let topSkills: SkillType[]
	console.log(topSkills)
</script>

<div class="grid">
	{#each topSkills as skill}
		<Skill {skill} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 1rem;
	}
</style>
