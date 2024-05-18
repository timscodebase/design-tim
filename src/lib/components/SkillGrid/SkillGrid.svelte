<svelte:options runes={true} />

<script lang="ts">
	import type { SkillType } from '$lib/types'
	import Skill from './Skill.svelte'

	const { skills } = $props() as { skills: SkillType[] }
</script>

<div class="horizontal-strip">
	{#each skills as skill}
		<Skill {skill} />
	{/each}
</div>

<style>
	@keyframes move {
		to {
			transform: translateX(calc(-100% + 100vw));
		}
	}
	.horizontal-strip {
		display: flex;
		justify-content: flex-start;
		gap: 1vmax;
		flex-wrap: wrap;
		width: calc(8 * 300px + 7rem);
		will-change: transform;
		animation: linear move forwards;
		animation-timeline: --section-pin-tl;
		animation-range: cover 55% contain 100%;
		overflow: clip;
	}
</style>
