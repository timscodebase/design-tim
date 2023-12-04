<script lang="ts">
	import type { PageData } from './$types'
	import { SkillGrid } from '$lib'

	export let data: PageData

	const { skills } = data
</script>

<h2>I excel in the following skills:</h2>
<SkillGrid {skills} />

<style>
</style>
