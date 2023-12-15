<script lang="ts">
	import type { JobType } from '$lib/types'
	import { slugify } from '$utils'
	export let job: JobType

	const { company, dates, description, location, title } = job
</script>

<article id={`${slugify(company)}`}>
	<h3>{company}</h3>
	<div class="meta">
		<span>{title}-{location}</span>
		<span>{dates}</span>
	</div>
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

	.meta {
		padding: var(--padding-sm) 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: color-mix(in srgb, var(--pink), var(--text) 50%);
	}

	p {
		font-size: clamp(1.5rem, 2svw, 2rem);
	}
</style>
