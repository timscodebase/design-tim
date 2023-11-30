<script lang="ts">
	import type { PageData } from './$types'
	import { SkillGrid } from '$lib'

	export let data: PageData

	const topSkills = data.topSkills
</script>

<h2>I excel in the following skills:</h2>
<SkillGrid {topSkills} />

<style>
</style>
