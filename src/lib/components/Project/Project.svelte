<script lang="ts">
	import type { ProjectType } from '$lib/types'
	import { Link } from '$lib'
	export let project: ProjectType

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
		place-items: center;
		color: var(--primary-2);
		font-size: clamp(2rem, 5svw, 3rem);
	}

	h4 {
		color: var(--primary);
		font-size: clamp(1.5rem, 2.5svw, 2.25rem);
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
		grid-row: span 6;
		grid-template-rows: subgrid;
		padding: var(--padding-md);
		border-radius: var(--border-radius-sm);
	}

	article a {
		color: color-mix(in srgb, var(--primary), var(--text) 75%);
	}
</style>
