<script lang="ts">
	import type { PageData } from './$types'
	import { SkillGrid } from '$lib'

	export let data: PageData

	const { topSkills } = data
</script>

<SkillGrid skills={topSkills} />

<style>
</style>
