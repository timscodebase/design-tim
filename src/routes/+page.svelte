<script lang="ts">
	import type { PageData } from './$types'
	import { Link, SkillGrid } from '$lib'

	export let data: PageData

	const { topSkills } = data
</script>

<p>
	My brain works differently than most. Because of this, traditional education is not for me. I have
	taken a few college courses, but I have learned most of what I know through self-study and
	experimentation (reverse engineering others websites). I have a passion for learning and I am
	always looking for new ways to improve my skills and stay current in this rapidly changing
	landscape. The following are some of the most influential educators I have learned from along my
	journey:
</p>

<h2>Here are my most used skilled</h2>
<SkillGrid skills={topSkills} />
<Link href="/skills">See all my skills</Link>

<style>
	p {
		color: var(--primary);
	}
</style>
