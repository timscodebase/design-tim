<script lang="ts">
	import type { PageData } from './$types'
	import { SkillGrid } from '$lib'

	import { page } from '$app/stores'

	const { skills } = $page.data
</script>

<svelte:head>
	<title>Tim Smith Skills</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="These are the skills I have developed over the years." />
</svelte:head>

<h2>I excel in the following skills:</h2>
<SkillGrid {skills} />
