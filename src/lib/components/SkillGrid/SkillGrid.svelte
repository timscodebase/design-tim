<script lang="ts">
	import type { SkillType } from '$lib/types'
	import Skill from './Skill.svelte'

	export let topSkills: SkillType[]
</script>

<div class="grid">
	{#each topSkills as skill}
		<Skill {skill} />
	{/each}
</div>

<style>
</style>
