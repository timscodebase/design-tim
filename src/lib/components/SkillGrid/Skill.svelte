<svelte:options runes={true} />

<script lang="ts">
	import { scale } from 'svelte/transition'
	import { Chip } from '$lib'
	import type { SkillType } from '$lib/types'

	const { skill } = $props<{ skill: SkillType }>()
</script>

<div
	class={`skill ${skill.category}`}
	in:scale={{ duration: 500 }}
	out:scale={{ duration: 500 }}
	role="button"
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
			<Chip liClass={skill.category}>{usedAt}</Chip>
		{/each}
	</ul>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			scale: 0.8;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	}

	.fade-in {
		animation: fadeIn linear;
		animation-timeline: scroll(root);
		animation-range: entry 25% cover 50%;
	}

	.skill {
		width: 300px;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		border-radius: 4px;

		h3,
		h4,
		p {
			padding: 0;
		}
	}

	@media (max-width: 500px) {
		.skill {
			margin: 0;
			padding: var(--padding-sm);
		}
	}

	.info {
		--size: 10px;
		position: absolute;
		top: var(--size);
		right: var(--size);
		color: var(--text);
		text-align: end;
	}

	.usedAt {
		display: flex;
		flex-wrap: wrap;
		margin-top: var(--padding-md);
		gap: var(--padding-md);
	}
</style>
