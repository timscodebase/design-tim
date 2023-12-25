<script lang="ts">
	import { Link } from '$lib'
	export let project

	const { name, thumbnail, image, where, description, medium } = project
</script>

<article>
	<h2>{name}</h2>
	<p>{where}</p>
	<Link href={image}>
		<img src={thumbnail} alt={name} />
	</Link>
	<div>
		<p>{description}</p>
		<p>{medium}</p>
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: var(--gap);
		padding: var(--padding-md);
		border: var(--border-primary);
	}
</style>
