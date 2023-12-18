<script lang="ts">
	import { Link } from '$lib'
	export let project

	const { name, thumbnail, image, description, medium } = project
</script>

<article>
	<h2>{name}</h2>
	<Link href={image}>
		<img src={thumbnail} alt={name} />
	</Link>
	<p>{description}</p>
	<p>{medium}</p>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--gap);
		margin: var(--margin-md);
		padding: var(--padding-md);
		border: var(--border-primary);
	}
</style>
