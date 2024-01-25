<script lang="ts">
	import { viewport } from '$utils'
	import { onMount } from 'svelte'
	import type { SkillType } from '$lib/types'
	import { Link } from '$lib'
	import Skill from './Skill.svelte'

	export let skills: SkillType[]
	let visible = false

	function resetVisible() {
		visible = false
	}

	onMount(() => {
		const box = document.querySelector('.grid')

		document.addEventListener(
			'scroll',
			() => {
				if (viewport.isBottom(box)) {
					resetVisible()
				}
			},
			{
				passive: true
			}
		)
	})
</script>

<div class="grid">
	{#each skills as skill}
		<Skill {visible} {skill} />
	{/each}
</div>
<br />
<Link href="/skills">See all my skills</Link>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: 1fr;
		grid-gap: 1rem;
		margin-top: var(--margin-md);
	}
</style>
