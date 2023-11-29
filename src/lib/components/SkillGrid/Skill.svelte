<script lang="ts">
	import type { SkillType } from '$lib/types'
	export let skill: SkillType
</script>

<div class="skill">
	<h3>{skill.name}</h3>

	<div class="categories">
		{#each skill.category as category}
			<p>{category}</p>
		{/each}
	</div>

	<p class="info">
		{skill.level}, {skill.yearsExp > 1 ? `${skill.yearsExp} years` : `${skill.yearsExp} year`} of experience
	</p>

	<h4>Used At</h4>
	<ul class="usedAt">
		{#each skill.usedAt as usedAt}
			<li>{usedAt}</li>
		{/each}
	</ul>

	<!-- "usedAt": [] "category": ["devops"] -->
</div>

<style>
	.categories {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap);
	}
</style>
