<svelte:options runes={true} />

<script lang="ts">
	import type { SkillType } from '$lib/types'
	import Skill from './Skill.svelte'

	const { skills } = $props() as { skills: SkillType[] }
</script>

<div class="sticky">
	<h2>Here are my most used skilled</h2>
	<div class="horizontal-strip">
		{#each skills as skill}
			<Skill {skill} />
		{/each}
	</div>
</div>

<style>
	.horizontal-strip {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		grid-gap: 1rem;
		margin-top: var(--margin-md);
	}

	@supports (animation-timeline: view()) {
		.sticky {
			position: sticky;
			top: 22%;
			overflow-x: hidden;
		}
		@keyframes move {
			to {
				transform: translateX(calc(-100% + 38vw));
			}
		}
		.horizontal-strip {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			width: calc((8 * 300px) + (7 * var(--gap)));
			gap: var(--gap);
			will-change: transform;
			animation: linear move forwards;
			animation-timeline: --section-pin-tl;
			animation-range: contain 20% contain 100%;
			overflow: clip;
		}
	}
</style>
