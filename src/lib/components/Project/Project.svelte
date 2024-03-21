<svelte:options runes={true} />

<script lang="ts">
	import type { ProjectType } from '$lib/types'
	import { Link } from '$lib'
	const { project } = $props<ProjectType>()

	const { name, href, github, thumbnail, image, where, description, medium } = project
</script>

<article>
	<div>
		<h3>{name}</h3>
	</div>
	<div>
		{#if where}
			<h4>Created at:</h4>
			<p>{where}</p>
		{/if}
	</div>
	<Link href={image}>
		<div class="img">
			<img src={thumbnail} alt={name} />
		</div>
	</Link>
	<div>
		{#if href}
			<Link {href} external>Project Link</Link>
		{/if}
		{#if github}
			<Link href={github} external>Github Link</Link>
		{/if}
	</div>
	<div>
		<h4>Description:</h4>
		<p>{@html description}</p>
	</div>
	<div>
		<p class="meta"><span>Medium: </span>{medium}</p>
	</div>
</article>

<style>
	p,
	h2,
	h3 {
		padding: 0;
		padding-bottom: var(--padding-sm);
	}

	h3 {
		display: grid;
		color: var(--primary-2);
	}

	h4 {
		color: var(--primary);
	}

	p.meta {
		color: var(--primary-2);

		span {
			color: var(--primary);
			font-weight: bold;
		}
	}

	span {
		color: var(--primary);
		font-weight: bold;
	}

	.img {
		height: 150px;
		overflow-y: hidden;
	}

	article {
		display: grid;
		/* || */
		/* || */
		/* \/ tied to the number of rows in /routes/projects/+page.svelte */
		grid-row: span 6;
		grid-template-rows: subgrid;
		border-radius: var(--border-radius-sm);
	}

	article a {
		color: color-mix(in srgb, var(--primary), var(--text) 75%);
	}
</style>
