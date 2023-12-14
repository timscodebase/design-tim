<script lang="ts">
	import type { SkillType } from '$lib/types'
	import { Chip, Link } from '$lib'
	import { slugify } from '$utils'
	export let skill: SkillType
	import { navColor } from '$stores'

	function onMouseover() {
		navColor.set(skill.category)
	}
</script>

<div
	role="button"
	tabindex="0"
	on:touchstart={onMouseover}
	on:mouseover={onMouseover}
	on:focus={onMouseover}
	class={`skill ${skill.category}`}
>
	<h3>{skill.name}</h3>

	<p class="info">
		<b
			>{skill.yearsExp}
			{parseInt(skill.yearsExp) > 1 ? ` yrs` : `yr`}</b
		>
		<br />{skill.category}
		<br /><b>{skill.level}</b>
	</p>

	<h4>Used At</h4>
	<ul class="usedAt">
		{#each skill.usedAt as usedAt}
			<Chip>
				<Link href={`jobs/#${slugify(usedAt)}`}>{usedAt}</Link>
			</Chip>
		{/each}
	</ul>
</div>

<style>
	.skill {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		padding: var(--gap);
	}

	.info {
		--size: 10px;
		position: absolute;
		top: var(--size);
		right: var(--size);
		color: var(--text);
	}

	.usedAt {
		display: flex;
		flex-wrap: wrap;
		gap: var(--padding-xs);
	}
</style>
