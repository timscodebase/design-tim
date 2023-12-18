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
	<div>
		<p>{description}</p>
		<p>{medium}</p>
	</div>
</article>

<style>
	article {
		display: grid;
		place-content: center;
		grid-template-rows: 1fr auto 1fr;
		gap: var(--gap);
		padding: var(--padding-md);
		border: var(--border-primary);
	}
</style>
