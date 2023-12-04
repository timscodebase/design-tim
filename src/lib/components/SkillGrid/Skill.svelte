<script lang="ts">
	import type { SkillType } from '$lib/types'
	export let skill: SkillType
	import { navColor } from '$stores'

	function onMouseover() {
		console.log('hovering over skill', skill.category)
		setTimeout(() => {
			navColor.set(skill.category)
			console.log('set navColor to', $navColor)
		}, 500)
	}
</script>

<div on:mouseover={onMouseover} class={`skill ${skill.category}`}>
	<h3>{skill.name}</h3>

	<p>{skill.category}</p>

	<p class="info">
		{skill.level}, {parseInt(skill.yearsExp) > 1
			? `${skill.yearsExp} years`
			: `${skill.yearsExp} year`} of experience
	</p>

	<!-- <h4>Used At</h4>
	<ul class="usedAt">
		{#each skill.usedAt as usedAt}
			<li>{usedAt}</li>
		{/each}
	</ul> -->

	<!-- "usedAt": [] "category": ["devops"] -->
</div>

<style>
	.skill {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		padding: var(--gap);
	}
</style>
