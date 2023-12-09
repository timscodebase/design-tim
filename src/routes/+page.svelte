<script lang="ts">
	import type { PageData } from './$types'
	import { SkillGrid } from '$lib'

	export let data: PageData

	const { topSkills } = data
</script>

<h2>Here are my most used skilled</h2>
<SkillGrid skills={topSkills} />

<style>
</style>
