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
	<Link href={image}>
		<div class="img">
			<img src={thumbnail} alt={name} />
		</div>
	</Link>
	<div>
		<details>
			<summary>Description</summary>
			<p>{@html description}</p>
			<div>
				{#if where}
					<h4>Created at:</h4>
					<p>{where}</p>
				{/if}
			</div>
			<div class="links">
				{#if href}
					<Link {href} external>Project Link</Link>
				{/if}
				{#if github}
					<Link href={github} external>Github Link</Link>
				{/if}
			</div>
			<div>
				<p class="meta"><span>Medium: </span>{medium}</p>
			</div>
		</details>
	</div>
</article>

<style>
	p,
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

	.links {
		padding-bottom: var(--padding-md);
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

	details {
		padding-top: var(--padding-sm);
	}

	summary {
		cursor: pointer;
		list-style-type: '▼ ';
	}
	summary::marker {
		color: var(--blue);
		font-size: 1.2em;
	}
	details[open] > summary {
		list-style-type: '▲ ';
	}
</style>
