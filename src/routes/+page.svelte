<script lang="ts">
	import type { PageData } from './$types'
	import { Link, SkillGrid } from '$lib'

	export let data: PageData

	const { topSkills } = data
</script>

<h2>Here are my most used skilled</h2>
<SkillGrid skills={topSkills} />
<Link href="/skills">See all my skills</Link>

<style>
</style>
