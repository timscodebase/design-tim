<svelte:options runes={true} />

<script lang="ts">
	import type { SkillType } from '$lib/types'
	import Skill from './Skill.svelte'

	const { skills } = $props() as { skills: SkillType[] }
</script>

<div class="sticky shadow">
	<h2>The Skills That Make Me Unstoppable</h2>
	<div class="border">
		<div class="horizontal-strip">
			{#each skills as skill}
				<Skill {skill} />
			{/each}
		</div>
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

	.border {
		width: 100%;
		height: 100%;
	}

	@supports (animation-timeline: view()) {
		.sticky {
			position: sticky;
			top: 18%;
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
			width: calc((8 * 400px) + (7 * var(--gap)));
			gap: var(--gap);
			will-change: transform;
			animation: linear move forwards;
			animation-timeline: --section-pin-tl;
			animation-range: exit-crossing 15% contain 100%;
			overflow: clip;
		}
	}
</style>
