<script lang="ts">
	import type { JobType } from '$lib/types'
	import { slugify } from '$utils'
	export let job: JobType

	const { company, dates, description, location, title } = job
</script>

<article id={`${slugify(company)}`}>
	<h3>{company}</h3>
	<p>{title}-{location}</p>
	<p>{dates}</p>
	<p>{description}</p>
</article>

<style>
	article {
		height: 50svh;
		padding: var(--padding-sm);
		border: var(--border-primary);
	}

	h3 {
		color: var(--primary-2);
	}
</style>
