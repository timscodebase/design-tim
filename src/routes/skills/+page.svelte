<script lang="ts">
	import type { PageData } from './$types'
	import { SkillGrid } from '$lib'

	import { page } from '$app/stores'

	let { skills } = $page.data
</script>

<svelte:head>
	<title>Tim Smith's Skills</title>
	<link rel="canonical" href="https://design-tim.vercel.app/" />
	<meta
		name="description"
		content="These are the skills I have developed over the years."
	/>
</svelte:head>

<h2>I excel in the following skills:</h2>
<SkillGrid {skills} />
