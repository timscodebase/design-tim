<svelte:options runes={true} />

<script lang="ts">
	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import { Chip, Link } from '$lib'
	import { viewport, slugify } from '$utils'
	import { navColor } from '$stores'
	import type { SkillType } from '$lib/types'

	const { skill, visible } = $props<{ skill: SkillType; visible: boolean }>()
	let isVisible = $state(visible)

	onMount(() => {
		const box = document.querySelector('.outer')
		if (!isVisible && viewport.isIn(box)) {
			isVisible = true
		}

		document.addEventListener(
			'scroll',
			function () {
				if (!isVisible && viewport.isIn(box)) {
					isVisible = true
				}
			},
			{
				passive: true
			}
		)
	})

	function onMouseover() {
		navColor.set(skill.category)
	}
</script>

<div class="outer">
	{#if isVisible}
		<div
			tabindex="0"
			on:touchstart={onMouseover}
			on:mouseover={onMouseover}
			on:focus={onMouseover}
			class={`skill ${skill.category}`}
			in:scale={{ duration: 500 }}
			out:scale={{ duration: 500 }}
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
						<Link href={`/jobs/#${slugify(usedAt)}`}>{usedAt}</Link>
					</Chip>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.skill {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		padding: var(--gap);
		border-radius: 4px;
		height: 100%;
		margin: 1rem 0;

		h3,
		h4,
		p {
			padding: 0;
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
		gap: var(--padding-md);
	}
</style>
