<script lang="ts">
	import { Link } from '$lib'
	export let project

	const { name, thumbnail, image, description, medium } = project
</script>

<article class="project">
	<Link external={true}>
		<img src={thumbnail} />
	</Link>
	<h2>{name}</h2>
	<p>{description}</p>
	<p>{medium}</p>
</article>

<style>
</style>
