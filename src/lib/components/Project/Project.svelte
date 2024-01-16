<script lang="ts">
	import { Link } from '$lib'
	export let project

	const { name, href, github, thumbnail, image, where, description, medium } = project
</script>

<article>
	<div>
		<h3>{name}</h3>
		{#if where}
			<h4>Created at:</h4>
			<p>{where}</p>
		{/if}
	</div>
	<Link href={image}>
		<img src={thumbnail} alt={name} />
	</Link>
	{#if href}
		<Link {href} external={true}>Project Link</Link>
	{/if}
	{#if github}
		<Link href={github} external={true}>Github Link</Link>
	{/if}

	<div>
		<h4>Description:</h4>
		<p>{@html description}</p>
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
		color: var(--primary-2);
		font-size: clamp(2rem, 5svw, 4rem);
	}

	h4 {
		color: var(--primary);
		font-size: clamp(1.5rem, 3svw, 2.75rem);
	}

	p.meta {
		color: var(--primary-2);

		span {
			color: var(--primary);
			font-weight: bold;
		}
	}
	article {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: var(--padding-md);
		border: var(--border-primary);
		border-radius: var(--border-radius-sm);
	}

	article a {
		color: color-mix(in srgb, var(--primary), var(--text) 75%);
	}
</style>
