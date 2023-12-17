<script lang="ts">
	export let project

	const { name, thumbnail, image, description, medium } = project
</script>

<article class="project">
	<img src={thumbnail} />
	<h2>{name}</h2>
	<p>{description}</p>
	<p>{medium}</p>
	<img src={image} alt={name} />
</article>

<style>
</style>
