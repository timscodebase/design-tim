<script lang="ts">
	import type { SkillType } from '$lib/types'
	import Skill from './Skill.svelte'

	export let skills: SkillType[]
</script>

<div class="grid">
	{#each skills as skill}
		<Skill {skill} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
		margin-top: var(--margin-md);
	}
</style>
