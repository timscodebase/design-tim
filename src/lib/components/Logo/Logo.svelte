<script>
	import { name, description } from '$lib/config'
</script>

<a href="/">
	<h1>{name}</h1>
	<p>{description}</p>
</a>

<style>
	a {
		display: block;
	}

	p {
		max-width: 50svw;
		font-size: clamp(1.25rem, 2.5svw, 2.5rem);
	}

	@media (max-width: 600px) {
		p {
			display: block;
			max-width: 100svw;
		}
	}
</style>
