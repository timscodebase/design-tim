<script lang="ts">
	import type { PageData } from './$types'
	import { SkillGrid } from '$lib'

	let { data } = $props<PageData>()

	const { skills } = data
</script>

<svelte:head>
	<title>Tim Smith Skills</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="These are the skills I have developed over the years." />
</svelte:head>

<h2>I excel in the following skills:</h2>
<SkillGrid {skills} />
