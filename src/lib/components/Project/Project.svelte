<script lang="ts">
	import { Link } from '$lib'
	export let project

	const { name, href, thumbnail, image, where, description, medium } = project
</script>

<article>
	<div>
		<h2>{name}</h2>
		{#if where}
			<h3>Created at:</h3>
			<p>{where}</p>
		{/if}
	</div>
	<Link href={image}>
		<img src={thumbnail} alt={name} />
	</Link>
	{#if href}
		<Link {href} external={true}>
			{href}
		</Link>
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

	h2 {
		color: var(--primary-2);
	}
	h3 {
		color: color-mix(in srgb, var(--primary), var(--text) 75%);
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
	}

	article a {
		color: color-mix(in srgb, var(--primary), var(--text) 75%);
	}

	h4 {
		color: color-mix(in srgb, var(--primary-2), var(--text) 75%);
		font-weight: bolder;
	}
</style>
