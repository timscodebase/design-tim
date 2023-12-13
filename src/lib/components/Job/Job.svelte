<script lang="ts">
	import type { JobType } from '$lib/types'
	import { slugify } from '$utils'
	export let job: JobType

	const { company, dates, description, location, title } = job
</script>

<article id={`${slugify(company)}`} class="job">
	<h3>{company}</h3>
	<p>{title}-{location}</p>
	<p>{dates}</p>
	<p>{description}</p>
</article>

<style>
	.job {
		padding: var(--padding-sm);
		border: var(--border-primary);
	}
</style>
