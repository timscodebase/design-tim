<script lang="ts">
	import type { SkillType } from '$lib/types'
	export let skill: SkillType
	import { navColor } from '$stores'

	function onMouseover() {
		navColor.set(skill.category)
	}
</script>

<div
	role="button"
	tabindex="0"
	on:mouseover={onMouseover}
	on:focus={onMouseover}
	class={`skill ${skill.category}`}
>
	<h3>{skill.name}</h3>

	<p>{skill.category} / <b>{skill.level}</b></p>

	<p class="info">
		<b>{skill.yearsExp}</b>
		{parseInt(skill.yearsExp) > 1 ? ` years` : `${skill.yearsExp} year`} of experience
	</p>
</div>

<!-- <h4>Used At</h4>
<ul class="usedAt">
	{#each skill.usedAt as usedAt}
		<li>{usedAt}</li>
	{/each}
</ul> -->

<!-- "usedAt": [] "category": ["devops"] -->

<style>
	.skill {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		padding: var(--gap);
	}
</style>
