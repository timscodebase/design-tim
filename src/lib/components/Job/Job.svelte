<script lang="ts">
	import type { JobType } from '$lib/types'
	import { slugify } from '$utils'
	const { job } = $props() as { job: JobType }

	const { company, dates, description, location, title } = job
</script>

<article id={`${slugify(company)}`}>
	<h3>{company}</h3>
	<div class="meta">
		<span>{title}-{location}</span>
		<span class="date">{dates}</span>
	</div>
	<p>{@html description}</p>
</article>

<style>
	article {
		min-height: 50svh;
		padding: var(--padding-lg);
	}

	h3 {
		color: var(--primary-2);
	}

	p {
		text-align: justify;
		padding: 0;
	}

	.date {
		text-align: right;
	}

	.meta {
		padding: var(--padding-sm) 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: color-mix(in srgb, var(--primary), var(--text) 70%);
	}
</style>
