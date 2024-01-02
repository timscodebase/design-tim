<script lang="ts">
	import type { SkillType } from '$lib/types'
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
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
	transition:fly={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}
>
	<h3>{skill.name}</h3>

	<p class="info">
		<b class="bold"
			>{skill.yearsExp}
			{parseInt(skill.yearsExp) > 1 ? ` years` : `year`}</b
		>
		<br />{skill.category}
		<br /><b class="bold">{skill.level}</b>
	</p>

	<h4>Used At</h4>
	<ul class="usedAt">
		<!-- alphabetize list -->

		{#each skill.usedAt.sort() as usedAt}
			<Chip liClass={skill.category}>
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
		border-radius: 4px;

		h3,
		h4,
		p {
			padding: 0;
		}

		h4 {
		}
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
